import { parseJwtExpiryMs } from '@frontend-monorepo/utility';
import axios, { type AxiosInstance } from 'axios';

import { type RefreshTokenCallback, RefreshTokenScheduler } from './RefreshTokenScheduler';

export type ApiClientOptions = {
  baseUrl: string;
  refreshTokenCallback: RefreshTokenCallback;
  refreshTokenThresholdMs: number;
};

export default class ApiClient {
  private axiosInstance: AxiosInstance;
  private authToken: string | null = null;

  private refreshTokenScheduler: RefreshTokenScheduler;

  private requestInterceptorId: number | null = null;

  constructor(options: ApiClientOptions) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      headers: { 'Content-Type': 'application/json' },
    });

    this.refreshTokenScheduler = new RefreshTokenScheduler({
      expireThresholdMs: options.refreshTokenThresholdMs,
      refreshTokenCallback: async () => {
        const token = await options.refreshTokenCallback();
        this.configureToken(token);
        return token;
      },
    });
  }

  configureToken(token: string) {
    this.authToken = token;

    // Register request interceptor
    this.requestInterceptorId = this.axiosInstance.interceptors.request.use((config) => {
      if (this.authToken) {
        config.headers.Authorization = `Bearer ${this.authToken}`;
      }
      return config;
    });

    // Schedule token refresh
    this.scheduleRefreshToken(token);
  }

  clearToken() {
    delete this.axiosInstance.defaults.headers.common.Authorization;
    this.authToken = null;

    // Unregister request interceptor
    if (this.requestInterceptorId !== null) {
      this.axiosInstance.interceptors.request.eject(this.requestInterceptorId);
      this.requestInterceptorId = null;
    }

    // Stop token refresh
    this.refreshTokenScheduler.stop();
  }

  scheduleRefreshToken(token: string) {
    const expiryMs = parseJwtExpiryMs(token);
    if (expiryMs) {
      this.refreshTokenScheduler.start(expiryMs);
    } else {
      this.refreshTokenScheduler.stop();
    }
  }

  getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

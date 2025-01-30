import ApiClient, { type ApiClientOptions } from './ApiClient';
import UserClient from './user';

export type BackendClientOptions = {
  apiClientOptions: ApiClientOptions;
};

export class BackendClient {
  private apiClient: ApiClient;
  public user: UserClient;

  constructor(options: BackendClientOptions) {
    this.apiClient = new ApiClient(options.apiClientOptions);
    const axiosInstance = this.apiClient.getInstance();

    this.user = new UserClient(axiosInstance);
  }

  configureToken(token: string) {
    this.apiClient.configureToken(token);
  }

  clearToken() {
    this.apiClient.clearToken();
  }
}

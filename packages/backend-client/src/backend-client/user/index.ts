import { type AxiosInstance } from 'axios';

import type { GetMeResponse } from './type';

export default class UserClient {
  private axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  async getMe(): Promise<GetMeResponse> {
    const response = await this.axios.get('/user/me');
    return response.data;
  }
}

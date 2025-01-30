export type RefreshTokenCallback = () => Promise<string>;

export interface RefreshTokenSchedulerOptions {
  expireThresholdMs: number;
  refreshTokenCallback: RefreshTokenCallback;
}

export class RefreshTokenScheduler {
  private refreshTimerId: ReturnType<typeof setInterval> | null = null;
  private expireThresholdMs: number;

  refreshTokenCallback: RefreshTokenCallback;

  constructor({
    expireThresholdMs = 30 * 1000, // Default to 30 seconds
    refreshTokenCallback,
  }: RefreshTokenSchedulerOptions) {
    this.refreshTokenCallback = refreshTokenCallback;
    this.expireThresholdMs = expireThresholdMs;
  }

  start(expiryTimeMs: number) {
    this.stop();

    const now = Date.now();
    const refreshTime = expiryTimeMs - this.expireThresholdMs;
    const delay = refreshTime - now;

    if (delay <= 0) {
      this.triggerRefresh();
      return;
    }

    this.refreshTimerId = setTimeout(() => {
      this.triggerRefresh();
    }, delay);
  }

  private async triggerRefresh() {
    try {
      await this.refreshTokenCallback();
    } catch (error) {
      console.error('Refresh token failed:', error);
    }
  }

  stop() {
    if (this.refreshTimerId) {
      clearTimeout(this.refreshTimerId);
      this.refreshTimerId = null;
    }
  }
}

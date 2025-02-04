import { describe, expect, it } from 'vitest';
import { i18next } from './i18n';

describe('Check i18n works', () => {
  it('should be initialized', () => {
    expect(i18next).toBeDefined();
  });

  it('en should be default language', () => {
    expect(i18next.language).toBe('en');
  });

  it('en.title should be Hello World', () => {
    expect(i18next.t('title')).toBe('Hello World');
  });
});

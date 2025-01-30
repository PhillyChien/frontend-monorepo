import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { parseJwtExpiryMs } from '.';

/**
 *  The following JWT tokens are "Demo Token" for demonstration purposes,
 *  you can generate them using JWT.io or other methods.
 *
 * 1. validTokenWithExp
 *    - Payload has exp = 1735689600 (approximately 2025/01/31 00:00:00 UTC)
 * 2. validTokenWithoutExp
 *    - Payload does not have exp
 * 3. invalidToken
 *    - Incorrect structure, cannot be parsed
 * 4. emptyToken
 *    - Empty string
 *
 * Note: These tokens are not actually signed, they are for demonstration purposes only.
 */

// 1) validTokenWithExp => header: {"alg":"HS256","typ":"JWT"}
//    payload: {"sub":"1234567890","name":"John Doe","iat":1516239022,"exp":1735689600}
//    The signature is mock
const validTokenWithExp =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
  'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MzU2ODk2MDB9.' +
  'mocksignature';

// 2) validTokenWithoutExp => No exp
//    payload: {"sub":"1234567890","name":"John Doe","iat":1516239022}
const validTokenWithoutExp =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
  'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.' +
  'mocksignature';

// 3) invalidToken => Does not conform to JWT structure
const invalidToken = 'not.a.valid.jwt';

// 4) emptyToken => Empty string
const emptyToken = '';

describe('parseJwtExpiryMs', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Listen to console.error, to check if the error is called
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Reset the spy after each test
    consoleErrorSpy.mockRestore();
  });

  it('should return expiry in milliseconds if valid token has exp', () => {
    const result = parseJwtExpiryMs(validTokenWithExp);

    // exp = 1735689600 (seconds) => milliseconds: 1735689600 * 1000
    expect(result).toBe(1735689600 * 1000);
    // Should not trigger console.error
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('should return null if valid token has no exp', () => {
    const result = parseJwtExpiryMs(validTokenWithoutExp);
    expect(result).toBeNull();
    // Should not trigger console.error
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('should return null and log error if token is invalid', () => {
    const result = parseJwtExpiryMs(invalidToken);
    expect(result).toBeNull();
    // Expected to be called once
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Fail to parse token expiry:', expect.any(Error));
  });

  it('should return null and log error if token is empty', () => {
    const result = parseJwtExpiryMs(emptyToken);
    expect(result).toBeNull();
    // Expected to be called once
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Fail to parse token expiry:', expect.any(Error));
  });
});

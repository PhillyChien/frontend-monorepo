import { jwtDecode, type JwtPayload } from 'jwt-decode';

export function parseJwtExpiryMs(token: string): number | null {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded.exp) {
      return decoded.exp * 1000;
    }
    return null;
  } catch (error) {
    console.error('Fail to parse token expiry:', error);
    return null;
  }
}

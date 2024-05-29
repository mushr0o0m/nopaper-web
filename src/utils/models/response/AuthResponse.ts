export interface AuthResponse {
  refresh: string;
  access: string;
  refreshExpires: number;
  accessExpires: number;
}

export interface GuestResponse {
  userId: string;
}
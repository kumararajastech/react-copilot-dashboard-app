// src/config/runtimeenv.ts
export interface RuntimeEnv {
  API_BASE_URL: string;
  ENABLE_ANALYTICS: boolean;
  APP_TITLE: string;
  MAX_PAGE_SIZE: number;
}

export const runtimeEnv: RuntimeEnv = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com/v1',
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  APP_TITLE: 'Enterprise Analytics Dashboard',
  MAX_PAGE_SIZE: 10,
};

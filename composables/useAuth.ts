
import { computed, ref } from 'vue';

const VALID_EMAIL = 'demo@shapes.com';
const VALID_PASSWORD = 'password123';

export const useAuth = () => {
  const token = process.client
    ? useCookie<string | null>('auth_token')
    : ref<string | null>(null);

  const isAuthenticated = computed(() => !!token.value);

  const login = (email: string, password: string) => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // Only write cookies on the client to avoid header issues in SSR
      if (process.client) {
        token.value = 'mock-token';
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    if (process.client) {
      token.value = null;
    }
  };

  return { isAuthenticated, login, logout };
};

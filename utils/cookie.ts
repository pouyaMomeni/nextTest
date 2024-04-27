import Cookies from 'js-cookie';

// Set a cookie
export const setCookie = (key: string, value: any, options?: Cookies.CookieAttributes) => {
  Cookies.set(key, value, options);
};

// Get a cookie
export const getCookie = (key: string) => {
  return Cookies.get(key);
};

// Remove a cookie
export const removeCookie = (key: string) => {
  Cookies.remove(key);
};

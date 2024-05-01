// utils/auth.ts

export const getCookie = (name: string, req?: any): string | null => {
  // Server-side handling
  if (req) {
    const cookieHeader = req.headers.cookie;
    if (!cookieHeader) return null;
    const cookies = cookieHeader.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return decodeURIComponent(cookieValue);
      }
    }
  }
  // Client-side handling
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return decodeURIComponent(cookieValue);
      }
    }
  }
  return null;
};

// Check if the user is authenticated by looking for an ID token
export const getUser = (req?: any): boolean => {
  const idToken = getCookie('id_token', req); 
  return !!idToken; 
};

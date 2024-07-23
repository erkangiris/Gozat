export const getSessionStorage = (name) => {
  if (typeof window !== 'undefined') {
    const storedValue = sessionStorage.getItem(name);
    if (storedValue) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error('Error parsing JSON from session storage', error);
        return null;
      }
    }
    return null;
  }
  return null;
};

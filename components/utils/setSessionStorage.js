export const setSessionStorage = (name, value) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(name, JSON.stringify(value));
    }
  };
  
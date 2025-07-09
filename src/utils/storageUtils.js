const getItemLocalStorage = (key, fallback = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (err) {
    console.warn(`Could not parse localStorage[${key}]:`, err);
    return fallback;
  }
};

const setItemLocalStorage = (key, value) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving to localStorage: ${e}`);
  }
};

export { getItemLocalStorage, setItemLocalStorage };

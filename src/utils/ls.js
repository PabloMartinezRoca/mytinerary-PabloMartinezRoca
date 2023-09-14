export const ls = {
    getText: (key) => localStorage.getItem(key),
    get: (key) => JSON.parse(localStorage.getItem(key)),
    set: (key, value) => localStorage.setItem(key, value),
    rm: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
}
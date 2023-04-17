export function useLocalStorage(key, defaultValue, method) {
    return useStorage(key, defaultValue, method, window.localStorage);
}

export function useSessionStorage(key, defaultValue, method) {
    return useStorage(key, defaultValue, method, window.sessionStorage);
}

function useStorage(key, defaultValue, method, storageObject) {
    switch (method) {
        case "get":
            return (JSON.parse(storageObject.getItem(key)) == null) ? defaultValue : JSON.parse(storageObject.getItem(key));
            break;
        case "set":
            return storageObject.setItem(key, JSON.stringify(defaultValue));
            break;
    }
}
import SecureLS from 'secure-ls';

const secureLs = new SecureLS();

const setItem = (key, value) => {
    secureLs.set(key, value);
};

const getItem = (key) => {
    return secureLs.get(key);
};


const clearItem = () => {
    localStorage.clear();
};

const storage = {
    getItem,
    setItem,
    clearItem
};

export default storage;
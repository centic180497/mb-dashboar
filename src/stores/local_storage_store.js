class LocalStorageStoreClass {
  getItem(key) {
    return localStorage.getItem(key)
  }

  setItem(key, value) {
    localStorage.setItem(key, value)
  }
}

const LocalStorageStore = new LocalStorageStoreClass()

export default LocalStorageStore

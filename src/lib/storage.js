export default class Storage {
  constructor(storageId) {
    this.storageId = storageId;
    this.initStore = () => {
      if (!localStorage.getItem(this.storageId)) {
        localStorage.setItem(this.storageId, JSON.stringify([]))
      }
    }
    this.initStore()

    this.readData = (id) => {
      if (id) {
        const store = JSON.parse(localStorage.getItem(this.storageId))
        return store.find((data) => data.userId === id)
      }
      return JSON.parse(localStorage.getItem(this.storageId))
    }

    this.storeData = (formData) => {
      const store = this.readData()
      const dataExists = store.find((data) => data.userId === formData.userId);

      if (dataExists) {
        const newStore = store.map((data) => {
          if (data.userId === formData.userId) {
            data = formData
          }
          return data
        })
        localStorage.setItem(this.storageId, JSON.stringify(newStore))
        return newStore
      }

      store.push(formData)
      localStorage.setItem(this.storageId, JSON.stringify(store))
      return store
    }

    this.deleteDataFromStore = (id) => {
      const store = this.readData()
      const dataExists = store.find((data) => data.userId === id);
      let newStore

      if (dataExists) {
        newStore = store.filter((data) => data.userId !== id)
        localStorage.setItem(this.storageId, JSON.stringify(newStore))
      }

      return newStore
    }
  }
}
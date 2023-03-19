export default class Storage {
  constructor(storageId) {
    this.storageId = storageId; // use this.storageId with localStorage as a unique key to store data
    // Pass storageId to save json string data after each operation in localStorage
    // local storageId is important to retrieve old saved data
    // console.log('Storage');
    this.initStore = () => {
      if (!localStorage.getItem("form")) {
        localStorage.setItem("form", JSON.stringify([]))
      }
    }
    this.initStore()

    this.readData = (id) => {
      if (id) {
        const store = JSON.parse(localStorage.getItem("form"))
        return store.find((data) => data.userId === id)
      }
      return JSON.parse(localStorage.getItem("form"))
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
        localStorage.setItem("form", JSON.stringify(newStore))
        return newStore
      }

      store.push(formData)
      localStorage.setItem("form", JSON.stringify(store))
      return store
    }

    this.deleteDataFromStore = (id) => {
      const store = this.readData()
      const dataExists = store.find((data) => data.userId === id);
      let newStore

      if (dataExists) {
        newStore = store.filter((data) => data.userId !== id)
        localStorage.setItem("form", JSON.stringify(newStore))
      }

      return newStore
    }

  }
  // create methods to perform operations like save/edit/delete/add data
}
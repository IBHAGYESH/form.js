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
      const index = store.indexOf(formData);

      if (index !== -1) {
        console.log("old entry");
        store[index] = formData;
      } else {
        console.log("new entry");
        store.push(formData)
      }

      localStorage.setItem("form", JSON.stringify(store))
      return store
    }

  }
  // create methods to perform operations like save/edit/delete/add data
}
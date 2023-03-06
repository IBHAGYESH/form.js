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
    this.storeData = (formData) => {
      localStorage.setItem("form", JSON.stringify(formData))
    }
    this.readData = () => {
      return JSON.parse(localStorage.getItem("form"))
    }
  }
  // create methods to perform operations like save/edit/delete/add data
}
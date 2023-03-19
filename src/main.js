// formData is accessible here as we have global variable in formData.js
import formData from './data/formData.js';
import Form from './lib/form.js';
import Storage from './lib/storage.js';
import Table from './lib/table.js';

class Main {
  constructor(formContainerId, tableContainerId, storageId) {

    // formContainerId, storageId, tableContainerId will be in argument of constructor
    // start code to init and link form.js, storage.js, table.js

    const frm = new Form(formContainerId, formData); // form js class to create form and access its methods
    const tbl = new Table(tableContainerId); // table js class to create table and access its methods
    const storage = new Storage(storageId); // storage class to access storage methods
    // console.log(formData, frm, tbl, storage, 'Printed all instance of the class to remove eslint error');


    tbl.on("click", () => {
      event.preventDefault()
      const action = event.target.getAttribute("key")
      const userId = event.target.getAttribute("userId")
      if (action === "edit") {
        this.loadData(userId)
      } else {
        this.deleteData(userId)
      }
    })

    this.renderApp = () => {
      frm.renderFormUI()
      tbl.renderTable(storage.readData())
    }
    this.renderApp()

    frm.container.onsubmit = () => {
      event.preventDefault()
      const formValues = {}

      // getting values from the form refs 
      const notAllowed = ["select", "radio", "checkbox", "submit", "reset"]
      formData.forEach(({ type, key }) => {
        if (!notAllowed.includes(type)) {
          formValues[key] = frm[key].value
        }
      })
      const storedData = storage.storeData(formValues)
      tbl.renderTable(storedData)
      event.target.reset()
    }

    this.loadData = (userId) => {
      const storedData = storage.readData()
      const dataExists = storedData.find((data) => data.userId === userId)
      if (dataExists) {
        frm.loadDataIntoForm(dataExists)
      }
    }

    this.deleteData = (userId) => {
      storage.deleteDataFromStore(userId)
      this.renderApp()
    }

  }
}
//formContainerId: HTML Div element id inside of which you want to create form4
// formContainerId -> #employeeForm of current index.html

// storageId: localStorage key for saving json  string data init
// storageId -> 'employeeData' simple string to selected as key of localStorage

//tableContainerId: HTML Div element id inside of which you want to create table
// tableContainerId -> #tableDiv of current index.html

//pass formContainerId, storageId, tableContainerId to Main(formContainerId, storageId, tableContainerId)
const main = new Main('root', 'root-table', 'form');
// console.log(main);
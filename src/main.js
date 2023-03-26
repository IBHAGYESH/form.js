// formData is accessible here as we have global variable in formData.js
import './styles/reset.css'
import './styles/main.css'
import formData, { multipleData } from './data/formData.js';
import Form from './lib/form.js';
import Storage from './lib/storage.js';
import Table from './lib/table.js';

class Main {
  constructor(formContainerId, tableContainerId, storageId) {

    const frm = new Form(formContainerId, formData); // form js class to create form and access its methods
    const tbl = new Table(tableContainerId); // table js class to create table and access its methods
    const storage = new Storage(storageId); // storage class to access storage methods

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
      const notAllowed = ["radio", "checkbox", "submit", "reset"]
      formData.forEach(({ type, key }) => {
        if (!notAllowed.includes(type)) {
          formValues[key] = frm[key].value
        }
      })
      const storedData = storage.storeData(formValues)
      tbl.renderTable(storedData)
      event.target.reset()
      frm.resetForm()
    }

    frm.container.onreset = () => {
      event.target.reset()
      frm.resetForm()
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

export default function formJs(divId, data) {
  const mainDiv = document.getElementById(divId)
  mainDiv.setAttribute("mainDiv", "")
  mainDiv.classList.add("background")
  if (data.length && Array.isArray(data) && Array.isArray(data[0])) {
    // load multiple forms if data is passed as array

    data.forEach((_, index) => {
      const formDiv = document.createElement("div")
      formDiv.setAttribute("id", `root-form-${index}`)

      const tableDiv = document.createElement("div")
      const table = document.createElement("table")
      table.setAttribute("id", `root-table-${index}`)
      tableDiv.appendChild(table)

      mainDiv.appendChild(formDiv)
      mainDiv.appendChild(tableDiv)

      new Main(`root-form-${index}`, `root-table-${index}`, `form-${index}`);
    })


  } else if (data.length &&
    Array.isArray(data)) {
    // load single form if data is single object

    const formDiv = document.createElement("div")
    formDiv.setAttribute("id", "root-form")

    const tableDiv = document.createElement("div")
    const table = document.createElement("table")
    table.setAttribute("id", "root-table")
    tableDiv.appendChild(table)

    mainDiv.appendChild(formDiv)
    mainDiv.appendChild(tableDiv)

    new Main('root-form', 'root-table', 'form');

  } else {
    const msg = document.createElement("h1")
    msg.innerText = "Data is incorrect"
    mainDiv.appendChild(msg)
  }
}

formJs("root", formData)
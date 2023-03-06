// formData is accessible here as we have global variable in formData.js
import formData from './data/formData.js';
import Form from './lib/form.js';
import Storage from './lib/storage.js';
import Table from './lib/table.js';

class Main {
  constructor(formContainerId, tableContainerId, storageId) {

    // formContainerId, storageId, tableContainerId will be in argument of constructor
    // start code to init and link form.js, storage.js, table.js

    const frm = new Form(formContainerId, formData, this); // form js class to create form and access its methods
    const tbl = new Table(tableContainerId, this); // table js class to create table and access its methods
    const storage = new Storage(storageId, this); // storage class to access storage methods
    // console.log(formData, frm, tbl, storage, 'Printed all instance of the class to remove eslint error');


    this.renderApp = () => {
      frm.renderFormUI()
      tbl.renderTable(storage.readData())
    }
    this.renderApp()

    this.formSubmit = (formData) => {
      storage.storeData(formData)
      tbl.renderTable(formData)
    }

    this.editForm
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
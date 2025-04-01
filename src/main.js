import './styles/main.css';

import Form from './lib/form.js';
import Storage from './lib/storage.js';
import Table from './lib/table.js';

class Main {
  constructor(formData, formContainerId, tableContainerId, storageId) {
    this.frm = new Form(formContainerId, formData); // form js class to create form and access its methods

    // only render table and init store if tableContainerId and storageId is used to init the MAIN class
    if (tableContainerId && storageId) {
      this.tbl = new Table(tableContainerId, formData); // table js class to create table and access its methods
      this.storage = new Storage(storageId); // storage class to access storage methods

      // DEP: Main -> Table
      // sending events to the Table class
      // here sending an event named "click" with the value of a cb function
      this.tbl.on('click', () => {
        event.preventDefault();

        const action = event.target.getAttribute('key');
        const dataId = event.target.getAttribute('dataId');

        if (action === 'edit') {
          this.loadData(dataId);
        } else {
          this.deleteData(dataId);
        }
      });

      this.renderTable();
    }

    // DEP: Form -> Storage
    // DEP: Form -> Table
    this.frm.container.onsubmit = () => {
      event.preventDefault();

      // getting values from the form refs
      this.frm.formData.forEach(({ type, key }) => {
        switch (type) {
          case 'radio':
            {
              this.frm.values[key] = {
                type,
                value: document.querySelector(`input[type='radio'][name=${key}]:checked`).value,
              };
            }
            break;

          case 'checkbox':
            {
              const checkedValues = [];

              document
                .querySelectorAll(`input[type='checkbox'][name=${key}]:checked`)
                .forEach((input) => checkedValues.push(input.value));

              this.frm.values[key] = { type, value: checkedValues.toString() };
            }
            break;

          case 'hidden':
          case 'submit':
          case 'reset':
            {
              // don't process anything on these fields
            }
            break;

          default:
            {
              this.frm.values[key] = { type, value: this.frm[key].value };
            }
            break;
        }
      });

      console.log(this.frm.values, 'onsubmit**<<<');

      if (tableContainerId && storageId) {
        const storedData = this.storage.storeRowDataToStore(this.frm.values);
        this.tbl.loadDataIntoTable(storedData);
      }

      const evt = new Event('form-submit', { bubbles: true, cancelable: false });
      window.dispatchEvent(evt);

      event.target.reset();
    };
  }

  // DEP: Form -> Storage
  // DEP: Form -> Table
  renderTable = () => {
    this.tbl.loadDataIntoTable(this.storage.readStoreData());
  };

  // DEP: Form -> Storage
  loadData = (dataId) => {
    const store = this.storage.readStoreData();
    const dataExists = store.find((data) => data.dataId.value === dataId);
    if (dataExists) {
      this.frm.loadDataIntoForm(dataExists);
    }
  };

  // DEP: Main -> Storage
  deleteData = (dataId) => {
    this.storage.deleteRowDataFromStore(dataId);
    this.renderTable();
  };
}

export function buildForm({ formDivId, tableDivId, formData }) {
  if (formDivId && formData && formData.length > 1 && Array.isArray(formData) && Array.isArray(formData[0])) {
    // load multiple forms if data is passed as array of array

    const mainFormDiv = document.getElementById(formDivId); // get the main div from the DOM
    mainFormDiv.setAttribute('mainFormDiv', ''); // add custom attribute without any value

    formData.forEach((form, index) => {
      // create div for form and assign id
      const formDiv = document.createElement('div');
      formDiv.setAttribute('id', `root-form-${index}`);

      // add form to the main div
      mainFormDiv.appendChild(formDiv);

      if (tableDivId) {
        const mainTableDiv = document.getElementById(tableDivId); // get the main div from the DOM
        mainTableDiv.setAttribute('mainTableDiv', ''); // add custom attribute without any value

        // create table for form and assign id
        const tableDiv = document.createElement('div');
        const table = document.createElement('table');
        table.setAttribute('id', `root-table-${index}`);
        tableDiv.appendChild(table);

        // add table to the main div
        mainTableDiv.appendChild(tableDiv);

        return new Main(formData, `root-form-${index}`, `root-table-${index}`, `form-${index}`);
      } else {
        return new Main(formData, `root-form-${index}`, null, null);
      }
    });
  } else if (formDivId && formData && formData.length && Array.isArray(formData)) {
    // load single form if formData is single array

    const mainFormDiv = document.getElementById(formDivId); // get the main div from the DOM
    mainFormDiv.setAttribute('mainFormDiv', ''); // add custom attribute without any value

    // create div for form and assign id
    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'root-form');

    // add form to the main div
    mainFormDiv.appendChild(formDiv);

    if (tableDivId) {
      const mainTableDiv = document.getElementById(tableDivId); // get the main div from the DOM
      mainTableDiv.setAttribute('mainTableDiv', ''); // add custom attribute without any value

      // create table for form and assign id
      const tableDiv = document.createElement('div');
      const table = document.createElement('table');
      table.setAttribute('id', 'root-table');
      tableDiv.appendChild(table);

      // add table to the main div
      mainTableDiv.appendChild(tableDiv);

      return new Main(formData, 'root-form', 'root-table', 'form');
    } else {
      return new Main(formData, 'root-form', null, null);
    }
  } else {
    const msg = document.createElement('h1');
    if (formDivId) {
      // print error when form data is incorrect
      msg.innerText = 'Data is incorrect';
    } else {
      // print error when form div id is incorrect
      msg.innerText = 'form div id is incorrect';
    }
    document.body.appendChild(msg);
  }
}

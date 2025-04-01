export default class Table {
  constructor(tableContainerId, formData) {
    this.container = document.getElementById(tableContainerId); // get the table div from the DOM
    this.formData = formData;

    if (this.container) {
      this.container.border = '1px'; //TODO:  added CSS here because id of div can be dynamic
      this.renderTableUI();
    }

    this.events = {};
    // storing all the events sent from Main into this.events object
    this.on = (event, cb) => {
      if (!Object.keys(this.events).includes(event)) {
        this.events[event] = [cb];
      } else {
        this.events[event].push(cb);
      }
    };
  }

  renderTableUI = () => {
    if (!this.container) {
      return;
    }

    this.container.innerHTML = '';

    const skipData = ['submit', 'reset'];

    const titlesTr = document.createElement('tr');

    this.formData.forEach(({ label, type }) => {
      if (!skipData.includes(type)) {
        const titleTd = document.createElement('td');
        titleTd.innerText = label;
        titlesTr.appendChild(titleTd);
      }
    });

    // add actions tab in the table title row
    const titleTd = document.createElement('td');
    titleTd.innerText = 'Actions';
    titlesTr.appendChild(titleTd);

    // add title row to the table
    this.container.appendChild(titlesTr);
  };

  loadDataIntoTable = (storeData) => {
    // to render the title row and clean up prev table data
    this.renderTableUI();

    if (storeData.length) {
      storeData.forEach((record) => {
        const fieldTr = document.createElement('tr');

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';

        for (const [key, field] of Object.entries(record)) {
          const fieldTd = document.createElement('td');
          fieldTd.innerText = field.value;
          fieldTr.appendChild(fieldTd);

          if (key === 'dataId') {
            editBtn.setAttribute('dataId', field.value);
            editBtn.setAttribute('key', 'edit');
            this.appendEvents(editBtn);

            deleteBtn.setAttribute('dataId', field.value);
            deleteBtn.setAttribute('key', 'delete');
            this.appendEvents(deleteBtn);
          }
        }

        const fieldActionTd = document.createElement('td');

        fieldActionTd.appendChild(editBtn);
        fieldActionTd.appendChild(deleteBtn);
        fieldTr.appendChild(fieldActionTd);

        this.container.appendChild(fieldTr);
      });
    }
  };

  // adds all the stored events in the this.events to element
  appendEvents = (element) => {
    for (const [event, values] of Object.entries(this.events)) {
      values.forEach((value) => {
        element.addEventListener(event, value);
      });
    }
  };
}

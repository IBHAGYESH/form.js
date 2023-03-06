export default class Table {
  constructor(tableContainerId) {
    this.container = document.getElementById(tableContainerId); // Use this container to create table inside of it
    this.container.border = "1px"
    // Pass tableContainerId to append table inside of HTML DIV element
    // console.log('Table');
    this.initTable = () => {
      const titles = ["Name", "Email", "Phone", "Address", "Street Address", "City", "State", "Pin Code", "Actions"]
      const titlesTr = document.createElement("tr")
      titles.forEach((title) => {
        const titleTd = document.createElement("td")
        titleTd.innerText = title
        titlesTr.appendChild(titleTd)
      })
      this.container.appendChild(titlesTr)
    }
    this.initTable()
    this.renderTable = (formData) => {
      // const notAllowed = ["hidden", "select", "radio", "checkbox"]
      formData.forEach((record) => {
        const fieldTr = document.createElement("tr")

        const editBtn = document.createElement("button")
        editBtn.innerText = "Edit"
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"

        record.forEach((field) => {
          const fieldTd = document.createElement("td")
          fieldTd.innerText = field.value
          fieldTr.appendChild(fieldTd)
        })

        fieldTr.appendChild(editBtn)
        fieldTr.appendChild(deleteBtn)

        this.container.appendChild(fieldTr)
      })
    }
  }
  // create methods/event to refresh table data, add data row, update data row, delete data row, etc
}
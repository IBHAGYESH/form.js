export default class Table {
  constructor(tableContainerId) {
    this.container = document.getElementById(tableContainerId); // Use this container to create table inside of it
    this.container.border = "1px"
    // Pass tableContainerId to append table inside of HTML DIV element
    // console.log('Table');
    this.initTable = () => {
      this.container.innerHTML = ""
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
      this.initTable()
      const notAllowed = ["userId", "createdAt"]
      formData.forEach((record) => {

        const fieldTr = document.createElement("tr")

        const editBtn = document.createElement("button")
        editBtn.innerText = "Edit"
        editBtn.setAttribute("type", "submit")
        this.appendEvents(editBtn, "edit")
        // editBtn.setAttribute("onClick","submit")
        // editBtn.onclick = (e) => e.preventDefault()

        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"
        // deleteBtn.onclick = (e) => e.preventDefault()
        // this.appendEvents(deleteBtn)




        for (const [key, value] of Object.entries(record)) {
          if (!notAllowed.includes(key)) {
            const fieldTd = document.createElement("td")
            fieldTd.innerText = value
            fieldTr.appendChild(fieldTd)
          } else {
            if (key === "userId") {
              editBtn.setAttribute("userId", value)
              editBtn.setAttribute("key", "edit")
              deleteBtn.setAttribute("userId", value)
              deleteBtn.setAttribute("key", "delete")
            }
          }
        }
        const fieldActionTd = document.createElement("td")


        fieldActionTd.appendChild(editBtn)
        fieldActionTd.appendChild(deleteBtn)
        fieldTr.appendChild(fieldActionTd)

        this.container.appendChild(fieldTr)
      })
    }
    this.editRecord = () => {

    }
    const events = {}
    this.on = (event, cb) => {
      if (!Object.keys(events).includes(event)) {
        events[event] = [cb]
      } else {
        events[event].push(cb)
      }
      console.log(events,"+++++");
      
    }
    this.appendEvents = (element, eventName) => {
      for (const [event, values] of Object.entries(events)) {
        if (eventName === event) {
          values.forEach((value) => {
            element.setAttribute(event, value)
          })
        }
      }
    }
  }
  // create methods/event to refresh table data, add data row, update data row, delete data row, etc
}
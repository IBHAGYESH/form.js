export default class Form {
  constructor(formContainerId, formData) {
    this.container = document.getElementById(formContainerId); //Container element from HTML in which you have to add form
    // Pass formContainerId to append form element inside of HTML DIV element
    // use formData to create form
    // console.log('Form', this.container);
    this.formValues = {}

    this.renderFormUI = () => {
      this.container.innerHTML = ""
      const notAllowed = ["select", "radio", "checkbox"]
      const form = document.createElement("form")
      formData.forEach(({ type, key, label, value, unique }) => {
        if (!notAllowed.includes(type)) {
          this[key] = document.createElement("input")
          this[key].setAttribute("type", type)
          if (key) {
            this[key].setAttribute("key", key)
          }
          switch (type) {
            case "hidden":
              if (unique) {
                this[key].setAttribute("value", Math.floor(100000 + Math.random() * 900000))
              } else {
                this[key].setAttribute("value", new Date().getTime())
              }
              break;

            default:
              if (label) {
                const lbl = document.createElement("LABEL");
                lbl.innerHTML = label;
                lbl.setAttribute("for", key)
                form.appendChild(lbl)
              }
              if (value) {
                this[key].setAttribute("value", value)
              }
              break;
          }
          form.appendChild(this[key])
        }
      })
      this.container.appendChild(form)
    }

    this.loadDataIntoForm = (formFieldValues)=>{
      for (const [key, value] of Object.entries(formFieldValues)) {
        this[key].value = value
      }
    }
  }


  // create methods/event to create form/ reset form/ submit form, etc
}
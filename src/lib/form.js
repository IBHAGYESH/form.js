export default class Form {
  constructor(formContainerId, formData, instance) {
    this.container = document.getElementById(formContainerId); //Container element from HTML in which you have to add form
    // Pass formContainerId to append form element inside of HTML DIV element
    // use formData to create form
    // console.log('Form', this.container);
    this.renderForm(formData)
    this.mainInstance = instance
    this.formValues = {}
  }
  renderForm(formData) {
    const notAllowed = ["hidden", "select", "radio", "checkbox"]
    const form = document.createElement("form")
    formData.forEach(({ type, key, label, value }) => {
      if (!notAllowed.includes(type)) {
        this[key] = document.createElement("input")
        this[key].setAttribute("type", type)
        if (key) {
          this[key].setAttribute("key", key)
        }
        if (label) {
          const lbl = document.createElement("LABEL");
          lbl.innerHTML = label;
          lbl.setAttribute("for", key)
          form.appendChild(lbl)
        }
        if (value) {
          this[key].setAttribute("value", value)
        }
        form.appendChild(this[key])
        if (type === "submit") {
          form.onsubmit = this.handleSubmit
        }
      }
    })
    this.container.appendChild(form)
  }
  handleSubmit() {
    event.preventDefault()
    // console.log(event, "::::::");
    // const formData = new FormData(event.target);
    // const formProps = Object.fromEntries(formData);
    // console.log(formProps, "<<<<<<");
    const elements = event.target.elements
    for (let i = 0; i < elements.length; i++) {
      const item = elements.item(i);
      this.formValues[item.getAttribute("key")] = item.value;
    }
    console.log(this.mainInstance, "))))");

    // console.log(obj, "____");
    // this.instance.passFormDataToStorage(obj)
  }
  // create methods/event to create form/ reset form/ submit form, etc
}
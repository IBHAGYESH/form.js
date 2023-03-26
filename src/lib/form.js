export default class Form {
  constructor(formContainerId, formData) {
    this.container = document.getElementById(formContainerId);
    this.formValues = {}

    this.renderFormUI = () => {
      this.container.innerHTML = ""
      const notAllowed = ["checkbox"]
      const oddInputs = ["select", "radio", "checkbox"]
      const form = document.createElement("form")
      formData.forEach(({ type, key, label, value, unique, options }) => {
        if (!notAllowed.includes(type)) {
          if (!oddInputs.includes(type)) {
            this[key] = document.createElement("input")
          }
          switch (type) {
            case "hidden":
              if (unique) {
                this[key].setAttribute("value", Math.floor(100000 + Math.random() * 900000))
              } else {
                this[key].setAttribute("value", new Date().getTime())
              }
              break;

            case "select":
              this[key] = document.createElement("select")
              options.forEach((option, index) => {
                this[`${key}-${index}`] = document.createElement("option")
                this[`${key}-${index}`].innerText = option.innerText
                this[`${key}-${index}`].setAttribute("value", option.value)
                this[key].appendChild(this[`${key}-${index}`])
              })
              break

            case "radio":
              const mainLbl = document.createElement("label");
              mainLbl.innerHTML = label;
              mainLbl.setAttribute("for", key)
              form.appendChild(mainLbl)

              options.forEach((option) => {
                const div = document.createElement("div")

                this[key] = document.createElement("input")
                this[key].setAttribute("type", "radio");
                this[key].setAttribute("name", option.name);
                this[key].setAttribute("value", option.value);
                if (Object.keys(option.attr).length) {
                  this.attribSetter(this[key], option.attr)
                }

                const lbl = document.createElement("label");
                lbl.setAttribute("for", this[key].getAttribute("id"))
                lbl.innerHTML = option.innerText;

                div.appendChild(this[key])
                div.appendChild(lbl)
                form.appendChild(div)
              })

              break;

            default:
              break;
          }

          if (value) {
            this[key].setAttribute("value", value)
          }
          if (this[key]) {
            this[key].setAttribute("type", type)
          }
          if (key) {
            this[key].setAttribute("key", key)
          }

          if (label && type !== "hidden" && type !== "radio") {
            const lbl = document.createElement("label");
            lbl.innerHTML = label;
            lbl.setAttribute("for", key)
            form.appendChild(lbl)
          }
          if (type !== "radio") {

            form.appendChild(this[key])
          }

          if (type !== "hidden") {
            const br = document.createElement("br")
            form.appendChild(br)
          }
        }
      })

      this.container.appendChild(form)
    }

    this.resetForm = () => {
      this["userId"].setAttribute("value", Math.floor(100000 + Math.random() * 900000))
      this["createdAt"].setAttribute("value", new Date().getTime())
    }

    this.loadDataIntoForm = (formFieldValues) => {
      for (const [key, value] of Object.entries(formFieldValues)) {
        this[key].value = value
      }
    }

    this.attribSetter = (element, attribObj) => {
      Object.entries(attribObj).forEach(([attribute, value]) => {
        if (typeof value === "function") {
          element[value] = value
        } else {
          element.setAttribute(attribute, value)
        }
      })
    }
  }
}
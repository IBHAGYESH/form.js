export default class Form {
  constructor(formContainerId, formData) {
    this.container = document.getElementById(formContainerId); // get the form div from the DOM
    this.formData = formData;
    this.values = {};

    this.renderFormUI();

    this.container.onreset = () => {
      this.resetFormValues();
    };
  }

  renderFormUI = () => {
    this.container.innerHTML = '';

    const oddInputs = ['hidden', 'select', 'radio', 'checkbox']; // these inputs have options[] parameter

    const form = document.createElement('form');

    this.formData.forEach(({ type, key, label, value, unique, getValue, attr, options }, index) => {
      if (oddInputs.includes(type)) {
        switch (type) {
          case 'hidden':
            {
              if (value && !unique) {
                this.values[key] = { type, value };
              }

              if (!value && unique) {
                this.values[key] = { type, value: Math.floor(100000 + Math.random() * 900000) };
              }

              if (!value && !unique) {
                this.values[key] = { type, value: null };
              }
            }
            break;

          case 'select':
            {
              const mainLbl = document.createElement('label');
              mainLbl.innerHTML = label;
              mainLbl.setAttribute('for', key);
              form.appendChild(mainLbl);

              this[key] = document.createElement('select');
              options.forEach((option, index) => {
                this[`${key}-${index}`] = document.createElement('option');
                this[`${key}-${index}`].innerText = option.innerText;
                this[`${key}-${index}`].setAttribute('value', option.value);
                // pre select the default values
                if (value && value === option.value) {
                  this[`${key}-${index}`].selected = true;
                }
                this[key].appendChild(this[`${key}-${index}`]);
              });

              // set additional attributes to the input
              if (attr && Object.keys(attr).length) {
                this.attribSetter(this[key], attr);
              }

              form.appendChild(this[key]); // add select div to form
            }

            break;

          case 'radio':
            {
              const mainLbl = document.createElement('label');
              mainLbl.innerHTML = label;
              mainLbl.setAttribute('for', key);
              form.appendChild(mainLbl);

              const radioDiv = document.createElement('div');

              options.forEach((option) => {
                const optionDiv = document.createElement('div');

                this[key] = document.createElement('input');
                this[key].setAttribute('type', 'radio');
                this[key].setAttribute('name', option.name);
                this[key].setAttribute('value', option.value);

                // set additional attributes to the input
                if (option.attr && Object.keys(option.attr).length) {
                  this.attribSetter(this[key], option.attr);
                }

                // pre select the default values
                if (value && value === option.value) {
                  this[key].checked = true;
                }

                const optionLbl = document.createElement('label');
                optionLbl.innerHTML = option.innerText;
                optionLbl.setAttribute('for', this[key].getAttribute('id'));

                optionDiv.appendChild(this[key]); // add input to option div
                optionDiv.appendChild(optionLbl); // add label to option div
                radioDiv.appendChild(optionDiv); // add option div to radio div
              });

              form.appendChild(radioDiv); // add radio div to form
            }

            break;

          case 'checkbox':
            {
              const mainLbl = document.createElement('label');
              mainLbl.innerHTML = label;
              mainLbl.setAttribute('for', key);
              form.appendChild(mainLbl);

              const checkboxDiv = document.createElement('div');

              options.forEach((option) => {
                const optionDiv = document.createElement('div');

                this[key] = document.createElement('input');
                this[key].setAttribute('type', 'checkbox');
                this[key].setAttribute('name', option.name);
                this[key].setAttribute('value', option.value);

                // set additional attributes to the input
                if (option.attr && Object.keys(option.attr).length) {
                  this.attribSetter(this[key], option.attr);
                }

                // pre select the default values
                if (value && value.includes(option.value)) {
                  this[key].checked = true;
                }

                const optionLbl = document.createElement('label');
                optionLbl.innerHTML = option.innerText;
                optionLbl.setAttribute('for', this[key].getAttribute('id'));

                optionDiv.appendChild(this[key]); // add input to option div
                optionDiv.appendChild(optionLbl); // add label to option div
                checkboxDiv.appendChild(optionDiv); // add option div to checkbox div
              });

              form.appendChild(checkboxDiv); // add checkbox div to form
            }

            break;
        }

        if (this[key]) {
          // add line break space after adding an input
          const br = document.createElement('br');
          form.appendChild(br);
        }
      } else {
        /**
         * build form for all inputs except oddInputs
         */
        if (!oddInputs.includes(type)) {
          this[key] = document.createElement('input');
          this[key].setAttribute('key', key);
          this[key].setAttribute('type', type);
        }

        if (label) {
          const lbl = document.createElement('label');
          lbl.innerHTML = label;
          lbl.setAttribute('for', key);
          form.appendChild(lbl);
        }

        if (value) {
          this[key].setAttribute('value', value);
          // don't store values for submit and reset inputs
          if (!['submit', 'reset'].includes(type)) {
            this.values[key] = { type, value };
          }
        } else {
          // don't store values for submit and reset inputs
          if (!['submit', 'reset'].includes(type)) {
            this.values[key] = { type, value: null };
          }
        }

        // set additional attributes to the input
        if (attr && Object.keys(attr).length) {
          this.attribSetter(this[key], attr);
        }

        if (!oddInputs.includes(type)) {
          form.appendChild(this[key]);
        }

        // add line break space after adding an input
        // don't add line break after last input in the form
        if (index !== this.formData.length - 1) {
          const br = document.createElement('br');
          form.appendChild(br);
        }
      }

      // add event listener to all the fields
      // if (this[key]) {
      //   this[key].addEventListener('change', (e) => {
      //     this.values[key] = { type, value: e.target.value };
      //     console.log(this.values, ':::::');
      //   });
      // }
    });

    // add form on the form div
    this.container.appendChild(form);

    console.log(this.values, '+');
  };

  loadDataIntoForm = (formFieldValues) => {
    // for cleaning up form
    this.renderFormUI();

    for (const [key, field] of Object.entries(formFieldValues)) {
      switch (field.type) {
        case 'radio':
          document.querySelector(`input[type='radio'][name=${key}][value=${field.value}]`).checked = true;
          break;
        case 'checkbox':
          const checkedValues = field.value.split(',');

          document.querySelectorAll(`input[type='checkbox'][name=${key}]`).forEach((input) => {
            if (checkedValues.includes(input.value)) {
              input.checked = true;
            }
          });
          break;

        default:
          this[key].value = field.value;
          break;
      }
    }
  };

  resetFormValues = () => {
    this.formData.forEach(({ type, key }) => {
      switch (type) {
        case 'radio':
          {
            this.values[key] = {
              type,
              value: null,
            };
          }
          break;

        case 'checkbox':
          {
            this.values[key] = { type, value: null };
          }
          break;

        case 'hidden':
          {
            if (key === 'dataId') {
              this.values['dataId'] = { type, value: Math.floor(100000 + Math.random() * 900000) };
            } else {
              this.values['createdAt'] = { type, value: Date.now() };
            }
          }
          break;

        case 'submit':
        case 'reset':
          {
            // don't process anything on these fields
          }
          break;

        default:
          {
            this.values[key] = { type, value: null };
          }
          break;
      }
    });
  };

  /**
   * @description sets attributes to the input
   * @param {HTMLElement} element
   * @param {Object} attribObj
   */
  attribSetter = (element, attribObj) => {
    Object.entries(attribObj).forEach(([attribute, attribValue]) => {
      if (typeof attribValue === 'function') {
        // for attaching function attributes
        element[attribute] = attribValue;
      } else {
        // for attaching other types of attributes
        switch (attribute) {
          case 'className':
            element.setAttribute('class', attribValue);
            break;

          default:
            element.setAttribute(attribute, attribValue);
            break;
        }
      }
    });
  };
}

// When user bind any event like click, onChange, onblur all callback will have [e, obj, array, dataObjArray] arguments.

const formData = [
  {
    type: 'hidden',
    key: 'dataId',
    label: 'Data Id',
    unique: true,
    getValue: function (obj) {
      // when user will use type hidden in formData object at that time we don't have to add any input element in form but we should notify or give error to user in console if user has not mentioned getValue function.
      // getValue function will only have current form data in form of object key value pair
      // first condition is to check if dataId is present then use it because we only want to set dataId for new records
      return obj.dataId || Math.floor(100000 + Math.random() * 900000);
    },
  },
  {
    type: 'hidden',
    key: 'createdAt',
    label: 'Created At',
    getValue: function (obj) {
      // first condition is to check if createdAt is present then use it as we only want to set createdAt while creating new records
      return obj.createdAt || new Date().getTime();
    },
  },
  {
    type: 'text',
    label: 'Name',
    key: 'name',
    value: '',
    // attr is option, User can add new html element properties to it or user can remove all properties like empty object  attr: {}
    attr: {
      id: 'txtName1',
      className: 'form-control textInput',
      placeholder: 'Enter name',
      name: 'txtName',
      required: true,
      onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'email',
    label: 'Email',
    key: 'email',
    value: '',
    attr: {
      id: 'txtEmail',
      className: 'form-control textInput',
      placeholder: 'Enter email',
      name: 'txtName',
      required: true,
      onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'tel',
    label: 'Phone',
    key: 'phone',
    value: '',
    attr: {},
  },
  {
    type: 'textarea',
    label: 'Address',
    key: 'address',
    value: '',
    attr: {
      id: 'txtAddress',
      className: 'form-control textInput',
      placeholder: 'Enter Address',
      rows: '5',
      name: 'txtName',
      required: true, //Add validation for required field
      onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'text',
    label: 'Street Address',
    key: 'street_address',
    value: '',
    attr: {
      id: 'txtStreet',
      className: 'form-control textInput',
      placeholder: 'Enter Street Address',
      name: 'txtName',
      required: true,
      onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'text',
    label: 'City',
    key: 'city',
    value: '',
    attr: {
      id: 'txtCity',
      className: 'form-control textInput',
      placeholder: 'Enter City',
      name: 'txtName',
      required: true,
      onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'text',
    label: 'State',
    key: 'state',
    value: '',
    attr: {
      id: 'txtState',
      className: 'form-control textInput',
      placeholder: 'Enter State',
      name: 'txtName',
      required: true,
      onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'number',
    label: 'Pin Code',
    key: 'pin_code',
    value: '',
    attr: {
      id: 'txtPincode',
      className: 'form-control textInput',
      placeholder: 'Enter Pin Code',
      name: 'txtName',
      required: true,
      onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'select',
    label: 'Country',
    key: 'country',
    value: [],
    attr: {
      id: 'txtCountry',
      name: 'country',
      required: true,
      className: 'form-control columns',
      onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
    options: [
      {
        innerText: 'Select Country',
        value: '',
      },
      {
        innerText: 'India',
        value: 'india',
      },
      {
        innerText: 'United States',
        value: 'united-states',
      },
      {
        innerText: 'Sri Lanka',
        value: 'sri-lanka',
      },
    ],
  },
  {
    type: 'radio',
    label: 'Gender',
    key: 'gender',
    value: '',
    options: [
      {
        innerText: 'Male',
        value: 'male',
        name: 'gender',
        attr: {
          id: 'male',
          className: 'form-check-input radioGender',
          required: true,
          onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
        },
      },
      {
        innerText: 'Female',
        value: 'female',
        name: 'gender',
        attr: {
          id: 'female',
          className: 'form-check-input radioGender',
          required: true,
          onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
        },
      },
    ],
  },
  {
    type: 'checkbox',
    label: 'Hobbies',
    key: 'hobbies',
    value: [],
    options: [
      {
        innerText: 'Swimming',
        value: 'swimming',
        name: 'hobbies',
        attr: {
          id: 'swimming',
          className: 'form-check-input radioHobbies',
          onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
        },
      },
      {
        innerText: 'Singing',
        value: 'singing',
        name: 'hobbies',
        attr: {
          id: 'singing',
          className: 'form-check-input radioHobbies',
          onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
        },
      },
      {
        innerText: 'Writing',
        value: 'writing',
        name: 'hobbies',
        attr: {
          id: 'writing',
          className: 'form-check-input radioHobbies',
          onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
        },
      },
    ],
  },
  {
    type: 'submit',
    attr: {
      id: 'btnSubmit',
      name: 'btnSubmit',
      className: 'btn btn-block btn-primary submit',
      value: 'Submit',
      onclick: function () {
        // e, obj, array, dataObjArray you will get in function argument
        // e:  its button native event
        // obj: current form data in object form
        // array: formData array
        // dataObjArray: localstorage all data from storage.js
      },
    },
  },
  {
    type: 'reset',
    attr: {
      id: 'btnReset',
      name: 'btnReset',
      className: 'btn btn-block btn-primary reset',
      value: 'Reset',
      onclick: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
];
export default formData;

export const multipleDatax = [
  [
    {
      type: 'hidden',
      key: 'dataId',
      label: 'Data Id',
      unique: true,
      getValue: function (obj) {
        // when user will use type hidden in formData object at that time we don't have to add any input element in form but we should notify or give error to user in console if user has not mentioned getValue function.
        // getValue function will only have current form data in form of object key value pair
        // first condition is to check if dataId is present then use it because we only want to set dataId for new records
        return obj.dataId || Math.floor(100000 + Math.random() * 900000);
      },
    },
    {
      type: 'hidden',
      key: 'createdAt',
      label: 'Created At',
      getValue: function (obj) {
        // first condition is to check if createdAt is present then use it as we only want to set createdAt while creating new records
        return obj.createdAt || new Date().getTime();
      },
    },
    {
      type: 'text',
      label: 'Name',
      key: 'name',
      value: '',
      // attr is option, User can add new html element properties to it or user can remove all properties like empty object  attr: {}
      attr: {
        id: 'txtName1',
        className: 'form-control textInput',
        placeholder: 'Enter name',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'email',
      label: 'Email',
      key: 'email',
      value: '',
      attr: {
        id: 'txtEmail',
        className: 'form-control textInput',
        placeholder: 'Enter email',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'tel',
      label: 'Phone',
      key: 'phone',
      value: '',
      attr: {},
    },
    {
      type: 'textarea',
      label: 'Address',
      key: 'address',
      value: '',
      attr: {
        id: 'txtAddress',
        className: 'form-control textInput',
        placeholder: 'Enter Address',
        rows: '5',
        name: 'txtName',
        required: true, //Add validation for required field
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      label: 'Street Address',
      key: 'street_address',
      value: '',
      attr: {
        id: 'txtStreet',
        className: 'form-control textInput',
        placeholder: 'Enter Street Address',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      label: 'City',
      key: 'city',
      value: '',
      attr: {
        id: 'txtCity',
        className: 'form-control textInput',
        placeholder: 'Enter City',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      label: 'State',
      key: 'state',
      value: '',
      attr: {
        id: 'txtState',
        className: 'form-control textInput',
        placeholder: 'Enter State',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'number',
      label: 'Pin Code',
      key: 'pin_code',
      value: '',
      attr: {
        id: 'txtPincode',
        className: 'form-control textInput',
        placeholder: 'Enter Pin Code',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'select',
      label: 'Country',
      key: 'country',
      value: [],
      attr: {
        id: 'txtCountry',
        name: 'country',
        required: true,
        className: 'form-control columns',
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
      options: [
        {
          innerText: 'Select Country',
          value: '',
        },
        {
          innerText: 'India',
          value: 'india',
        },
        {
          innerText: 'United States',
          value: 'united-states',
        },
        {
          innerText: 'Sri Lanka',
          value: 'sri-lanka',
        },
      ],
    },
    {
      type: 'radio',
      label: 'Gender',
      key: 'gender',
      value: '',
      options: [
        {
          innerText: 'Male',
          value: 'male',
          name: 'gender',
          attr: {
            id: 'male',
            className: 'form-check-input radioGender',
            required: true,
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Female',
          value: 'female',
          name: 'gender',
          attr: {
            id: 'female',
            className: 'form-check-input radioGender',
            required: true,
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
      ],
    },
    {
      type: 'checkbox',
      label: 'Hobbies',
      key: 'hobbies',
      value: [],
      options: [
        {
          innerText: 'Swimming',
          value: 'swimming',
          name: 'hobbies',
          attr: {
            id: 'swimming',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Singing',
          value: 'singing',
          name: 'hobbies',
          attr: {
            id: 'singing',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Writing',
          value: 'writing',
          name: 'hobbies',
          attr: {
            id: 'writing',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
      ],
    },
    {
      type: 'submit',
      attr: {
        id: 'btnSubmit',
        name: 'btnSubmit',
        className: 'btn btn-block btn-primary submit',
        value: 'Submit',
        onclick: function () {
          // e, obj, array, dataObjArray you will get in function argument
          // e:  its button native event
          // obj: current form data in object form
          // array: formData array
          // dataObjArray: localstorage all data from storage.js
        },
      },
    },
    {
      type: 'reset',
      attr: {
        id: 'btnReset',
        name: 'btnReset',
        className: 'btn btn-block btn-primary reset',
        value: 'Reset',
        onclick: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
  ],
  [
    {
      type: 'hidden',
      key: 'dataId',
      label: 'Data Id',
      unique: true,
      getValue: function (obj) {
        // when user will use type hidden in formData object at that time we don't have to add any input element in form but we should notify or give error to user in console if user has not mentioned getValue function.
        // getValue function will only have current form data in form of object key value pair
        // first condition is to check if dataId is present then use it because we only want to set dataId for new records
        return obj.dataId || Math.floor(100000 + Math.random() * 900000);
      },
    },
    {
      type: 'hidden',
      key: 'createdAt',
      label: 'Created At',
      getValue: function (obj) {
        // first condition is to check if createdAt is present then use it as we only want to set createdAt while creating new records
        return obj.createdAt || new Date().getTime();
      },
    },
    {
      type: 'text',
      label: 'Name',
      key: 'name',
      value: '',
      // attr is option, User can add new html element properties to it or user can remove all properties like empty object  attr: {}
      attr: {
        id: 'txtName1',
        className: 'form-control textInput',
        placeholder: 'Enter name',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'email',
      label: 'Email',
      key: 'email',
      value: '',
      attr: {
        id: 'txtEmail',
        className: 'form-control textInput',
        placeholder: 'Enter email',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'tel',
      label: 'Phone',
      key: 'phone',
      value: '',
      attr: {},
    },
    {
      type: 'textarea',
      label: 'Address',
      key: 'address',
      value: '',
      attr: {
        id: 'txtAddress',
        className: 'form-control textInput',
        placeholder: 'Enter Address',
        rows: '5',
        name: 'txtName',
        required: true, //Add validation for required field
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      label: 'Street Address',
      key: 'street_address',
      value: '',
      attr: {
        id: 'txtStreet',
        className: 'form-control textInput',
        placeholder: 'Enter Street Address',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      label: 'City',
      key: 'city',
      value: '',
      attr: {
        id: 'txtCity',
        className: 'form-control textInput',
        placeholder: 'Enter City',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      label: 'State',
      key: 'state',
      value: '',
      attr: {
        id: 'txtState',
        className: 'form-control textInput',
        placeholder: 'Enter State',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'number',
      label: 'Pin Code',
      key: 'pin_code',
      value: '',
      attr: {
        id: 'txtPincode',
        className: 'form-control textInput',
        placeholder: 'Enter Pin Code',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'select',
      label: 'Country',
      key: 'country',
      value: [],
      attr: {
        id: 'txtCountry',
        name: 'country',
        required: true,
        className: 'form-control columns',
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
      options: [
        {
          innerText: 'Select Country',
          value: '',
        },
        {
          innerText: 'India',
          value: 'india',
        },
        {
          innerText: 'United States',
          value: 'united-states',
        },
        {
          innerText: 'Sri Lanka',
          value: 'sri-lanka',
        },
      ],
    },
    {
      type: 'radio',
      label: 'Gender',
      key: 'gender',
      value: '',
      options: [
        {
          innerText: 'Male',
          value: 'male',
          name: 'gender',
          attr: {
            id: 'male',
            className: 'form-check-input radioGender',
            required: true,
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Female',
          value: 'female',
          name: 'gender',
          attr: {
            id: 'female',
            className: 'form-check-input radioGender',
            required: true,
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
      ],
    },
    {
      type: 'checkbox',
      label: 'Hobbies',
      key: 'hobbies',
      value: [],
      options: [
        {
          innerText: 'Swimming',
          value: 'swimming',
          name: 'hobbies',
          attr: {
            id: 'swimming',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Singing',
          value: 'singing',
          name: 'hobbies',
          attr: {
            id: 'singing',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Writing',
          value: 'writing',
          name: 'hobbies',
          attr: {
            id: 'writing',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
      ],
    },
    {
      type: 'submit',
      attr: {
        id: 'btnSubmit',
        name: 'btnSubmit',
        className: 'btn btn-block btn-primary submit',
        value: 'Submit',
        onclick: function () {
          // e, obj, array, dataObjArray you will get in function argument
          // e:  its button native event
          // obj: current form data in object form
          // array: formData array
          // dataObjArray: localstorage all data from storage.js
        },
      },
    },
    {
      type: 'reset',
      attr: {
        id: 'btnReset',
        name: 'btnReset',
        className: 'btn btn-block btn-primary reset',
        value: 'Reset',
        onclick: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
  ],
];

export const multipleData = [
  [
    {
      type: 'hidden',
      key: 'dataId',
      label: 'Data Id',
      unique: true,
      getValue: function (obj) {
        // when user will use type hidden in formData object at that time we don't have to add any input element in form but we should notify or give error to user in console if user has not mentioned getValue function.
        // getValue function will only have current form data in form of object key value pair
        // first condition is to check if dataId is present then use it because we only want to set dataId for new records
        return obj.dataId || Math.floor(100000 + Math.random() * 900000);
      },
    },
    {
      type: 'hidden',
      key: 'createdAt',
      label: 'Created At',
      getValue: function (obj) {
        // first condition is to check if createdAt is present then use it as we only want to set createdAt while creating new records
        return obj.createdAt || new Date().getTime();
      },
    },
    {
      type: 'text',
      key: 'name',
      label: 'Name',
      value: '',
      // attr is option, User can add new html element properties to it or user can remove all properties like empty object  attr: {}
      attr: {
        id: 'txtName1',
        className: 'form-control textInput',
        placeholder: 'Enter name',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'email',
      key: 'email',
      label: 'Email',
      value: '',
      attr: {
        id: 'txtEmail',
        className: 'form-control textInput',
        placeholder: 'Enter email',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'tel',
      key: 'phone',
      label: 'Phone',
      value: '',
      attr: {},
    },
    {
      type: 'textarea',
      key: 'address',
      label: 'Address',
      value: '',
      attr: {
        id: 'txtAddress',
        className: 'form-control textInput',
        placeholder: 'Enter Address',
        rows: '5',
        name: 'txtName',
        required: true, //Add validation for required field
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      key: 'street_address',
      label: 'Street Address',
      value: '',
      attr: {
        id: 'txtStreet',
        className: 'form-control textInput',
        placeholder: 'Enter Street Address',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      key: 'city',
      label: 'City',
      value: '',
      attr: {
        id: 'txtCity',
        className: 'form-control textInput',
        placeholder: 'Enter City',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      key: 'state',
      label: 'State',
      value: '',
      attr: {
        id: 'txtState',
        className: 'form-control textInput',
        placeholder: 'Enter State',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'number',
      key: 'pin_code',
      label: 'Pin Code',
      value: '',
      attr: {
        id: 'txtPincode',
        className: 'form-control textInput',
        placeholder: 'Enter Pin Code',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'select',
      key: 'country',
      label: 'Country',
      value: [],
      attr: {
        id: 'txtCountry',
        name: 'country',
        required: true,
        className: 'form-control columns',
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
      options: [
        {
          innerText: 'Select Country',
          value: '',
        },
        {
          innerText: 'India',
          value: 'india',
        },
        {
          innerText: 'United States',
          value: 'united-states',
        },
        {
          innerText: 'Sri Lanka',
          value: 'sri-lanka',
        },
      ],
    },
    {
      type: 'radio',
      key: 'gender',
      label: 'Gender',
      value: '',
      options: [
        {
          innerText: 'Male',
          value: 'male',
          name: 'gender',
          attr: {
            id: 'male',
            className: 'form-check-input radioGender',
            required: true,
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Female',
          value: 'female',
          name: 'gender',
          attr: {
            id: 'female',
            className: 'form-check-input radioGender',
            required: true,
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
      ],
    },
    {
      type: 'checkbox',
      key: 'hobbies',
      label: 'Hobbies',
      value: [],
      options: [
        {
          innerText: 'Swimming',
          name: 'hobbies',
          value: 'swimming',
          attr: {
            id: 'swimming',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Singing',
          name: 'hobbies',
          value: 'singing',
          attr: {
            id: 'singing',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Writing',
          name: 'hobbies',
          value: 'writing',
          attr: {
            id: 'writing',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
      ],
    },
    {
      type: 'submit',
      attr: {
        id: 'btnSubmit',
        name: 'btnSubmit',
        className: 'btn btn-block btn-primary submit',
        value: 'Submit',
        onclick: function () {
          // e, obj, array, dataObjArray you will get in function argument
          // e:  its button native event
          // obj: current form data in object form
          // array: formData array
          // dataObjArray: localstorage all data from storage.js
        },
      },
    },
    {
      type: 'reset',
      attr: {
        id: 'btnReset',
        name: 'btnReset',
        className: 'btn btn-block btn-primary reset',
        value: 'Reset',
        onclick: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
  ],
  [
    {
      type: 'hidden',
      key: 'dataId',
      label: 'Data Id',
      unique: true,
      getValue: function (obj) {
        // when user will use type hidden in formData object at that time we don't have to add any input element in form but we should notify or give error to user in console if user has not mentioned getValue function.
        // getValue function will only have current form data in form of object key value pair
        // first condition is to check if dataId is present then use it because we only want to set dataId for new records
        return obj.dataId || Math.floor(100000 + Math.random() * 900000);
      },
    },
    {
      type: 'hidden',
      key: 'createdAt',
      label: 'Created At',
      getValue: function (obj) {
        // first condition is to check if createdAt is present then use it as we only want to set createdAt while creating new records
        return obj.createdAt || new Date().getTime();
      },
    },
    {
      type: 'text',
      key: 'name',
      label: 'Name',
      value: '',
      // attr is option, User can add new html element properties to it or user can remove all properties like empty object  attr: {}
      attr: {
        id: 'txtName1',
        className: 'form-control textInput',
        placeholder: 'Enter name',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'email',
      key: 'email',
      label: 'Email',
      value: '',
      attr: {
        id: 'txtEmail',
        className: 'form-control textInput',
        placeholder: 'Enter email',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'tel',
      key: 'phone',
      label: 'Phone',
      value: '',
      attr: {},
    },
    {
      type: 'textarea',
      key: 'address',
      label: 'Address',
      value: '',
      attr: {
        id: 'txtAddress',
        className: 'form-control textInput',
        placeholder: 'Enter Address',
        rows: '5',
        name: 'txtName',
        required: true, //Add validation for required field
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      key: 'street_address',
      label: 'Street Address',
      value: '',
      attr: {
        id: 'txtStreet',
        className: 'form-control textInput',
        placeholder: 'Enter Street Address',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      key: 'city',
      label: 'City',
      value: '',
      attr: {
        id: 'txtCity',
        className: 'form-control textInput',
        placeholder: 'Enter City',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'text',
      key: 'state',
      label: 'State',
      value: '',
      attr: {
        id: 'txtState',
        className: 'form-control textInput',
        placeholder: 'Enter State',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'number',
      key: 'pin_code',
      label: 'Pin Code',
      value: '',
      attr: {
        id: 'txtPincode',
        className: 'form-control textInput',
        placeholder: 'Enter Pin Code',
        name: 'txtName',
        required: true,
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
    {
      type: 'select',
      key: 'country',
      label: 'Country',
      value: [],
      attr: {
        id: 'txtCountry',
        name: 'country',
        required: true,
        className: 'form-control columns',
        onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
      options: [
        {
          innerText: 'Select Country',
          value: '',
        },
        {
          innerText: 'India',
          value: 'india',
        },
        {
          innerText: 'United States',
          value: 'united-states',
        },
        {
          innerText: 'Sri Lanka',
          value: 'sri-lanka',
        },
      ],
    },
    {
      type: 'radio',
      key: 'gender',
      label: 'Gender',
      value: '',
      options: [
        {
          innerText: 'Male',
          value: 'male',
          name: 'gender',
          attr: {
            id: 'male',
            className: 'form-check-input radioGender',
            required: true,
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Female',
          value: 'female',
          name: 'gender',
          attr: {
            id: 'female',
            className: 'form-check-input radioGender',
            required: true,
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
      ],
    },
    {
      type: 'checkbox',
      key: 'hobbies',
      label: 'Hobbies',
      value: [],
      options: [
        {
          innerText: 'Swimming',
          name: 'hobbies',
          value: 'swimming',
          attr: {
            id: 'swimming',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Singing',
          name: 'hobbies',
          value: 'singing',
          attr: {
            id: 'singing',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
        {
          innerText: 'Writing',
          name: 'hobbies',
          value: 'writing',
          attr: {
            id: 'writing',
            className: 'form-check-input radioHobbies',
            onchange: function () {}, // e, obj, array, dataObjArray you will get in function argument
          },
        },
      ],
    },
    {
      type: 'submit',
      attr: {
        id: 'btnSubmit',
        name: 'btnSubmit',
        className: 'btn btn-block btn-primary submit',
        value: 'Submit',
        onclick: function () {
          // e, obj, array, dataObjArray you will get in function argument
          // e:  its button native event
          // obj: current form data in object form
          // array: formData array
          // dataObjArray: localstorage all data from storage.js
        },
      },
    },
    {
      type: 'reset',
      attr: {
        id: 'btnReset',
        name: 'btnReset',
        className: 'btn btn-block btn-primary reset',
        value: 'Reset',
        onclick: function () {}, // e, obj, array, dataObjArray you will get in function argument
      },
    },
  ],
];

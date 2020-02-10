const fields = [
  {
    fieldType: "input",
    name: "firstName",
    ref: ref => ref({ required: true }),
    placeholder: "First Name",
    error: "First name is required."
  },
  {
    fieldType: "input",
    name: "lastName",
    ref: ref => ref({ required: true }),
    placeholder: "Last Name",
    error: "Last name is required."
  },
  {
    fieldType: "input",
    name: "company",
    ref: ref => ref,
    placeholder: "Company"
  },
  {
    fieldType: "input",
    type: "email",
    name: "email",
    ref: ref => ref,
    placeholder: "Email"
  },
  {
    fieldType: "input",
    name: "phone",
    ref: ref => ref,
    type: "tel",
    placeholder: "Phone"
  },
  {
    fieldType: "input",
    name: "street",
    ref: ref => ref,
    placeholder: "Street"
  },
  {
    fieldType: "input",
    name: "city",
    ref: ref => ref,
    placeholder: "City"
  },
  {
    fieldType: "input",
    name: "state",
    ref: ref => ref,
    placeholder: "State"
  },
  {
    fieldType: "input",
    name: "zipCode",
    ref: ref => ref,
    placeholder: "ZIP Code"
  }
];

export default fields;

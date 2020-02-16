export const schema = [
  {
    fieldType: "input",
    name: "companyName",
    ref: ref => ref({ required: true }),
    error: "This field is required.",
    placeholder: "Company Name"
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
    name: "zip",
    ref: ref => ref,
    placeholder: "Postal Code"
  }
];

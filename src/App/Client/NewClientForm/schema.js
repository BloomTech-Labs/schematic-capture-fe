export const schema = [
  {
    fieldType: "input",
    name: "companyName",
    ref: ref => ref({ required: true }),
    error: "First & Last Name or Company Name is required.",
    type: "text",
    placeholder: "Name"
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
    type: "text",
    placeholder: "Street"
  },
  {
    fieldType: "input",
    name: "city",
    ref: ref => ref,
    type: "text",
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
    placeholder: "ZIP Code"
  }
];

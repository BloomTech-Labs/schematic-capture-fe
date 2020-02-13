export const schema = [
  {
    fieldType: "input",
    name: "name",
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
  }
];

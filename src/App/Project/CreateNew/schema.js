export const schema = [
  {
    fieldType: "input",
    name: "name",
    ref: ref => ref({ required: true }),
    placeholder: "Project Name",
    error: "Project name is required."
  }
];

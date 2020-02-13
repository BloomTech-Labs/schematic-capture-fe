export const schema = [
  {
    fieldType: "input",
    name: "projectName",
    ref: ref => ref({ required: true }),
    placeholder: "Project Name",
    error: "Project name is required."
  }
];

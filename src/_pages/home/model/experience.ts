export const EXPERIENCES: {
  roleKey: string;
  companyKey: string;
  periodKey: string;
  descriptionKey: string;
  tags: string[];
}[] = [];

export const EDUCATION: {
  degreeKey: string;
  schoolKey: string;
  periodKey?: string;
}[] = [
  {
    degreeKey: "experience.degree",
    schoolKey: "experience.school",
  },
];

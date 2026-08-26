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
    periodKey: "experience.school.period",
  },
];

export const CERTIFICATES = [
  {
    titleKey: "experience.cert.toeic",
    periodKey: "experience.cert.toeic.period",
  },
];

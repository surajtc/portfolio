type Basic = {
  name: String;
  phone: String;
  mail: String;
  location: String;
  links: String[];
};
type Education = {
  degree: String;
  university: String;
  from: String;
  to: String;
};
type Experience = {
  position: String;
  company: String;
  from: String;
  to: String;
  description: String;
};
type Project = {
  name: String;
  description: String;
};
type Skill = {
  group: String;
  skills: String[];
};
type Certificate = {
  name: String;
};

export interface Resume {
  basic: Basic;
  summary: String;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  certifications: Certificate[];
}

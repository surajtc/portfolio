import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Resume as ResumeType } from "../types/resume";

interface Props {
  resume: ResumeType;
}

const Title = ({ text }: { text: String }) => (
  <Text fontWeight="bold" fontSize="xl" py={1} borderTop="1px">
    {text}
  </Text>
);

export const Resume = ({ resume }: Props) => {
  return (
    <Box w="100%" p={4}>
      <Text fontWeight="bold" fontSize="4xl" py={1}>
        {resume.basic.name}
      </Text>
      <Text fontSize="lg" pb={1}>
        {[resume.basic.phone, resume.basic.mail, resume.basic.location].join(
          " | "
        )}
      </Text>
      <Text fontSize="lg" pb={1}>
        {resume.basic.links.join(" | ")}
      </Text>
      <Title text={"SUMMARY"} />
      <Text fontSize="lg" pb={1}>
        {resume.summary}
      </Text>
      <Title text={"EDUCATION"} />
      {resume.education.map((value, key) => (
        <Grid key={key} templateColumns="1fr 24ch" gap={1}>
          <GridItem>
            <Text fontSize="lg" fontWeight="bold" pb={1}>
              {value.degree}
            </Text>
            <Text fontSize="lg" pb={1}>
              {value.university}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" textAlign="end" pb={1}>
              {[value.from, value.to].join(" - ")}
            </Text>
          </GridItem>
        </Grid>
      ))}
      <Title text={"EXPERIENCE"} />
      {resume.experience.map((value, key) => (
        <Grid key={key} templateColumns="1fr 24ch" gap={1}>
          <GridItem>
            <Text fontSize="lg" fontWeight="bold" pb={1}>
              {value.position}
            </Text>
            <Text fontSize="lg" pb={1}>
              {value.company}
            </Text>
            <Text fontSize="lg" pb={1}>
              {value.description}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" textAlign="end" pb={1}>
              {[value.from, value.to].join(" - ")}
            </Text>
          </GridItem>
        </Grid>
      ))}
      <Title text={"RELEVANT PROJECTS"} />
      {resume.projects.map((value, key) => (
        <Grid key={key} templateColumns="1fr" gap={1}>
          <GridItem>
            <Text fontSize="lg" fontWeight="bold" pb={1}>
              {value.name}
            </Text>
            <Text fontSize="lg" pb={1}>
              {value.description}
            </Text>
          </GridItem>
        </Grid>
      ))}
      <Title text={"TECHNICAL SKILLS"} />
      {resume.skills.map((value, key) => (
        <Grid key={key} templateColumns="26ch 1fr" gap={1}>
          <GridItem>
            <Text fontSize="lg" fontWeight="bold" pb={1}>
              {value.group}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" pb={1}>
              {value.skills.join(", ")}
            </Text>
          </GridItem>
        </Grid>
      ))}
      <Title text={"CERTIFICATIONS"} />
      <Text fontSize="lg" pb={1}>
        {resume.certifications.map((i) => i.name).join(", ")}
      </Text>
    </Box>
  );
};

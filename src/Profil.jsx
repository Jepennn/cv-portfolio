import { Flex, Box, Image, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LINKEDIN_URL, GITHUB_URL } from "./personalLinks.js";

export function Profil() {
  return (
    <Flex
      justify="center"
      align="center"
      gap={150}
      direction={["column", "row"]}
      justifyContent="center"
      wrap="wrap"
    >
      <Box p={4}>
        <Heading size="6xl">JESPER</Heading>
        <Heading size="6xl">SANDBERG</Heading>
        <Heading size="6xl" mb={5}>
          HESSELGREN
        </Heading>
        <Flex direction="row" align="center" gap={5}>
          <a href="/jesperResume.pdf" download>
            <button>Resume</button>
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <FaGithub size="50px" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="50px" />
          </a>
        </Flex>
      </Box>
      <Box>
        <Image
          src="/profile.jpeg"
          boxSize="400px"
          borderWidth="2px"
          borderColor="grey.700"
          borderStyle="solid"
          borderRadius="full"
          fit="cover"
        />
      </Box>
    </Flex>
  );
}

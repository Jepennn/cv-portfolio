import { Box, Heading, Flex } from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "./personalLinks.js";

export function Contact() {
  return (
    <div>
      <Box
        borderBottomWidth="2px"
        borderColor="grey.700"
        height={75}
        width="100%"
        p={5}
        mb={5}
      ></Box>
      <Flex>
        <Box textAlign="center" mb={10} mt={5} mx="auto" w={["90%", "70%"]}>
          <Heading
            color={"grey.400"}
            size="xl"
            fontWeight="medium"
            marginLeft={10}
          >
            <Flex justifyContent="left" alignItems="center">
              <MdEmail size={25} />
              <a
                href="mailto:jeppehesselgren@gmail.com"
                style={{ marginLeft: "5px" }}
              >
                jeppehesselgren@gmail.com
              </a>
            </Flex>
            <Flex justifyContent="left" alignItems="center">
              <MdPhone size={25} />
              <a href="tel:0727421511" style={{ marginLeft: "5px" }}>
                0727421511
              </a>
            </Flex>
          </Heading>
        </Box>
        <Box textAlign="center" mb={10} mt={5} mx="auto" w={["90%", "70%"]}>
          <Flex direction="row" justifyContent="right" gap={5} mr={20}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

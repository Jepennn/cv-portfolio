import { Box, Heading } from "@chakra-ui/react";

export function AboutMe() {
  return (
    <Box mb={150}>
      <Heading size="6xl" textAlign="center" mt={155}>
        ABOUT ME
      </Heading>
      <Box textAlign="center" mb={10} mt={5} mx="auto" w={["90%", "70%"]}>
        <Heading color={"grey.400"} size="2xl" fontWeight="medium">
          I&apos;m a 24 year old KTH student, currently studying my second year
          at the information technology program. I have a passion for
          programming and tech in general. When I am not studying or playing
          around with code, I like to train, spend time with my friends and
          family and read books.
        </Heading>
      </Box>
    </Box>
  );
}

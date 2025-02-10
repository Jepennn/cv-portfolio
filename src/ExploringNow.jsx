import { Heading, Box } from "@chakra-ui/react";

export function ExploringNow() {
  return (
    <div>
      <Heading size="6xl" textAlign="center">
        What I&apos;m currently exploring
      </Heading>
      <Box textAlign="center" mb={10} mt={5} mx="auto" w={["90%", "70%"]}>
        <Heading color={"grey.400"} size="2xl" fontWeight="medium" mb={5}>
          In addition to what I learn in class, I am actively exploring ways to
          strengthen my web development skills, particularly with TypeScript.I
          am also diving into various backend and database technologies to
          expand my expertise and build more robust applications. I&apos;m
          currently working on a Tinder-inspired application designed to provide
          recipe inspiration. The application is being built with React and
          Redux for a seamless user experience, and it leverages Supabase as a
          backend as a service solution to manage authentication and data
          storage.
        </Heading>
      </Box>
    </div>
  );
}

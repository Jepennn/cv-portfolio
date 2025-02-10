import { Flex, Heading, Box } from "@chakra-ui/react";
// import { WheatherAppCard } from "./wheatherAppCard.jsx";
import { RecipeTinder } from "./recipeTinder.jsx";
import { MernTodoCard } from "./mernTodoCard.jsx";
import { FilmdleCard } from "./filmdle.jsx";

export function Projects() {
  return (
    <Box mb={150}>
      <Heading size="6xl" textAlign="center">
        PROJECTS
      </Heading>
      <Box textAlign="center" mb={10} mt={5} mx="auto" w={["90%", "70%"]}>
        <Heading color={"grey.400"} size="2xl" fontWeight="medium" mb={5}>
          Here are some of the projects I have been working on. Click on the
          buttons to get to the repositories or live app. Be aware that some of
          the live apps are slow to load since free tier.
          <span
            style={{
              display: "block",
              marginTop: "5px",
              fontSize: "0.8rem",
              color: "grey",
            }}
          >
            (Be aware that projects are hosted on free servers which make the
            applications slow. Around 45 sek to start up)
          </span>
        </Heading>
      </Box>
      <Flex
        direction={["column", "row"]}
        justifyContent="center"
        gap={10}
        wrap="wrap"
      >
        {/* <WheatherAppCard /> */}
        <MernTodoCard />
        <FilmdleCard />
        <RecipeTinder />
      </Flex>
    </Box>
  );
}

import { Button, Card, Image, Badge, Stack } from "@chakra-ui/react";
import {
  WHEATHER_APP_TITLE,
  WHEATHER_APP_IMG,
  WHEATHER_APP_DESCRIPTION,
  WHEATHER_APP_LINK,
  WHEATHER_APP_TECH,
  WHEATHER_LIVE_APP,
} from "./projectDescription.js";

export function WheatherAppCard() {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg">
      <Image
        src={WHEATHER_APP_IMG}
        objectFit={["cover", "contain"]}
        maxW={["100%", "450px"]}
        maxH={["200px", "500px"]}
      ></Image>
      <Card.Body gap="2">
        <Card.Title>{WHEATHER_APP_TITLE}</Card.Title>
        <Card.Description mb={5}>{WHEATHER_APP_DESCRIPTION}</Card.Description>
        <Stack direction="row">
          <Badge colorPalette="yellow">{WHEATHER_APP_TECH[2]}</Badge>
          <Badge colorPalette="orange">{WHEATHER_APP_TECH[0]}</Badge>
          <Badge colorPalette="blue">{WHEATHER_APP_TECH[1]}</Badge>
          <Badge colorPalette="gray">{WHEATHER_APP_TECH[3]}</Badge>
        </Stack>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">
          <a href={WHEATHER_APP_LINK} target="_blank" rel="noreferrer">
            Repository
          </a>
        </Button>
        <Button variant="solid">
          <a href={WHEATHER_LIVE_APP} target="_blank" rel="noreferrer">
            Live App
          </a>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

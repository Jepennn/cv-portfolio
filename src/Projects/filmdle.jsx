import { Button, Card, Image, Badge, Flex } from "@chakra-ui/react";
import {
  FILMDLE_TITLE,
  FILMDLE_IMG,
  FILMDLE_DESCRIPTION,
  FILMDLE_LINK,
  FILMDLE_TECH,
  FILMDLE_LIVE_APP,
} from "./projectDescription.js";

export function FilmdleCard() {
  return (
    <Card.Root maxW={375} overflow="hidden" borderWidth="1px" borderRadius="lg">
      <Image objectFit="contain" maxW={450} maxH={500} src={FILMDLE_IMG} />
      <Card.Body borderTopWidth="1px">
        <Card.Title>{FILMDLE_TITLE}</Card.Title>
        <Card.Description mb={5}>{FILMDLE_DESCRIPTION}</Card.Description>
        <Flex direction="row" wrap={"wrap"} gap={2}>
          <Badge colorPalette="cyan">{FILMDLE_TECH[0]}</Badge>
          <Badge colorPalette="green">{FILMDLE_TECH[1]}</Badge>
          <Badge colorPalette="blue">{FILMDLE_TECH[2]}</Badge>
          <Badge colorPalette="orange">{FILMDLE_TECH[3]}</Badge>
        </Flex>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">
          <a href={FILMDLE_LINK} target="_blank" rel="noreferrer">
            Repository
          </a>
        </Button>
        <Button variant="solid">
          <a href={FILMDLE_LIVE_APP} target="_blank" rel="noreferrer">
            Live App
          </a>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

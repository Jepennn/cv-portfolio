import { Button, Card, Image, Badge, Stack } from "@chakra-ui/react";
import {
  MERN_TODOLIST_TITLE,
  MERN_TODOLIST_IMG,
  MERN_TODOLIST_DESCRIPTION,
  MERN_TODOLIST_LINK,
  MERN_TODOLIST_TECH,
  MERN_TODOLIST_LIVE_APP,
} from "./projectDescription.js";

export function MernTodoCard() {
  return (
    <Card.Root maxW={375} overflow="hidden" borderWidth="1px" borderRadius="lg">
      <Image
        objectFit="contain"
        maxW={450}
        maxH={500}
        src={MERN_TODOLIST_IMG}
      />
      <Card.Body borderTopWidth="1px">
        <Card.Title>{MERN_TODOLIST_TITLE}</Card.Title>
        <Card.Description mb={5}>{MERN_TODOLIST_DESCRIPTION}</Card.Description>
        <Stack direction="row" gap={2} mb={2}>
          <Badge colorPalette="cyan">{MERN_TODOLIST_TECH[0]}</Badge>
          <Badge colorPalette="blue">{MERN_TODOLIST_TECH[5]}</Badge>
          <Badge colorPalette="gray">{MERN_TODOLIST_TECH[1]}</Badge>
          <Badge colorPalette="purple">{MERN_TODOLIST_TECH[2]}</Badge>
        </Stack>
        <Stack direction="row" gap={2}>
          <Badge colorPalette="teal">{MERN_TODOLIST_TECH[3]}</Badge>
          <Badge colorPalette="pink">{MERN_TODOLIST_TECH[4]}</Badge>
        </Stack>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">
          <a href={MERN_TODOLIST_LINK} target="_blank" rel="noreferrer">
            Repository
          </a>
        </Button>
        <Button variant="solid">
          <a href={MERN_TODOLIST_LIVE_APP} target="_blank" rel="noreferrer">
            Live App
          </a>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

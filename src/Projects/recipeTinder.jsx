import { Button, Card, Image, Badge, Stack } from "@chakra-ui/react";
import {
  FOODSWIPE_TITLE,
  FOODSWIPE_DESCRIPTION,
  FOODSWIPE_LINK,
  FOODSWIPE_LIVE_APP,
  FOODSWIPE_IMG,
  FOODSWIPE_TECH,
} from "./projectDescription.js";

export function RecipeTinder() {
  return (
    <Card.Root maxW={375} overflow="hidden" borderWidth="1px" borderRadius="lg">
      <Image objectFit="contain" width={375} height={500} src={FOODSWIPE_IMG} />
      <Card.Body borderTopWidth="1px">
        <Card.Title>{FOODSWIPE_TITLE}</Card.Title>
        <Card.Description mb={1}>{FOODSWIPE_DESCRIPTION}</Card.Description>
        <p style={{ fontSize: "0.6rem", color: "red", marginBottom: "1rem" }}>
          (Under development, but fully functional. Try out the application with
          username:guest@guest.com and password:guest123 )
        </p>
        <Stack direction="row" gap={2}>
          <Badge colorPalette="cyan">{FOODSWIPE_TECH[0]}</Badge>
          <Badge colorPalette="blue">{FOODSWIPE_TECH[2]}</Badge>
          <Badge colorPalette="green">{FOODSWIPE_TECH[1]}</Badge>
          <Badge colorPalette="orange">{FOODSWIPE_TECH[3]}</Badge>
        </Stack>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">
          <a href={FOODSWIPE_LINK} target="_blank" rel="noreferrer">
            Repository
          </a>
        </Button>
        <Button variant="solid">
          <a href={FOODSWIPE_LIVE_APP} target="_blank" rel="noreferrer">
            Live App
          </a>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

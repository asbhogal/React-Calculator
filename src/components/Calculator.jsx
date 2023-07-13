import { Button, Box, Flex, SimpleGrid } from "@chakra-ui/react";

export function Calculator() {
  return (
    <Flex justifyContent="center" variant="theme-3" h="100vh">
      <Flex
        flexDirection="column"
        justifyContent="center"
        gap={25}
        maxW={300}
        variant="theme-3"
      >
        <Box borderRadius={5} w="100%" h="60px" bg="grey" />
        <SimpleGrid columns={4} spacing={2} w="250px">
          <Button height="40px">7</Button>
          <Button height="40px">8</Button>
          <Button height="40px">9</Button>
          <Button height="40px">DEL</Button>
          <Button height="40px">4</Button>
          <Button height="40px">5</Button>
          <Button height="40px">6</Button>
          <Button height="40px">+</Button>
          <Button height="40px">1</Button>
          <Button height="40px">2</Button>
          <Button height="40px">3</Button>
          <Button height="40px">-</Button>
          <Button height="40px">.</Button>
          <Button height="40px">0</Button>
          <Button height="40px">/</Button>
          <Button height="40px">x</Button>
          <Button gridColumnStart={1} gridColumnEnd={3} height="40px">
            RESET
          </Button>
          <Button gridColumnStart={3} gridColumnEnd={5} height="40px">
            =
          </Button>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

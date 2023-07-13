import { Button, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { useReducer } from "react";
import { ACTIONS } from "../constants/Actions";
import DigitButton from "./DigitButton";
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
}

function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });
  return (
    <Flex justifyContent="center" variant="theme-3" h="100vh">
      <Flex
        flexDirection="column"
        justifyContent="center"
        gap={25}
        maxW={300}
        variant="theme-3"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          borderRadius={5}
          h={105}
          w="100%"
          padding={15}
          bg="grey"
        >
          <Text fontSize={18}>
            {previousOperand} {operation}
          </Text>
          <Text fontSize={32}>{currentOperand}</Text>
        </Flex>
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
          <DigitButton digit="÷" dispatch={dispatch} />
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

export default Calculator;

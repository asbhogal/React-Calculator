import { Button, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { useReducer, useRef } from "react";
import { ACTIONS } from "../constants/Actions";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "." && state.currentOperand == null) {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }

  function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return "";
    let computedValue = "";
    switch (operation) {
      case "+":
        computedValue = prev + current;
        break;
      case "-":
        computedValue = prev - current;
        break;
      case "*":
        computedValue = prev * current;
        break;
      case "÷":
        computedValue = prev / current;
        break;
    }
    return computedValue.toString();
  }
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  const currentOperandRef = useRef(null);

  // Calculate the scale factor based on the length of the current operand
  const calculateScale = () => {
    if (currentOperandRef.current) {
      const containerWidth = currentOperandRef.current.offsetWidth;
      const textWidth = currentOperandRef.current.scrollWidth;
      const buffer = 10;
      const scale = (containerWidth - buffer) / textWidth;
      return scale;
    }
    return 1;
  };

  // Calculate the scale factor initially and whenever the currentOperand changes
  const scale = calculateScale();

  // Calculate the transform origin based on the scale
  const transformOrigin = scale === 1 ? "right" : "left";

  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });
  return (
    <Flex justifyContent="center" variant="theme-3" h="100vh">
      <Flex
        flexDirection="column"
        justifyContent="center"
        gap={25}
        maxW={250}
        variant="theme-3"
      >
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
          overflow="auto"
          h={85}
          w="100%"
          border="0.5px solid grey"
        >
          <Text fontSize={18}>
            {formatOperand(previousOperand)} {operation}
          </Text>
          <Text
            textAlign="right"
            w={250}
            whiteSpace="nowrap"
            fontSize={32}
            ref={currentOperandRef}
            transform={`scale(${scale})`} // Apply the scale transform
            transformOrigin={transformOrigin}
          >
            {formatOperand(currentOperand)}
          </Text>
        </Flex>
        <SimpleGrid columns={4} spacing={1} w="250px">
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <Button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
            DEL
          </Button>
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch} />
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch} />
          <DigitButton digit="." dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <OperationButton operation="÷" dispatch={dispatch} />
          <OperationButton operation="*" dispatch={dispatch} />
          <Button
            gridColumnStart={1}
            gridColumnEnd={3}
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            RESET
          </Button>
          <Button
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
            gridColumnStart={3}
            gridColumnEnd={5}
          >
            =
          </Button>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Calculator;

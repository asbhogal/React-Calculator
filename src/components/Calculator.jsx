import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import {
  FlexWithVariant,
  BoxWithVariant,
  TextWithVariant,
} from "./customComponents";
import { useReducer, useRef } from "react";
import { ACTIONS } from "../constants/Actions";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import reducer from "../functions/reducer";
import formatOperand from "../functions/formatOperand";
import ThemeToggle from "./ThemeToggle";

function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  const currentOperandRef = useRef(null);

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

  const scale = calculateScale();

  const transformOrigin = scale === 1 ? "right" : "left";

  return (
    <BoxWithVariant variant="theme-1">
      <FlexWithVariant
        variant="theme-1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        gap="15px"
        margin="0 auto"
        w="max-content"
        h="100vh"
      >
        <ThemeToggle />
        <FlexWithVariant
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="10px"
          maxW={250}
          variant="theme-1"
        >
          <Flex
            backgroundColor="#111111"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-end"
            overflow="auto"
            h={85}
            w="100%"
          >
            <TextWithVariant variant="theme-1" fontSize={18}>
              {formatOperand(previousOperand)} {operation}
            </TextWithVariant>
            <TextWithVariant
              variant="theme-1"
              textAlign="right"
              w={250}
              whiteSpace="nowrap"
              fontSize={32}
              ref={currentOperandRef}
              transform={`scale(${scale})`}
              transformOrigin={transformOrigin}
            >
              {formatOperand(currentOperand)}
            </TextWithVariant>
          </Flex>
          <SimpleGrid columns={4} spacing={1} w="250px">
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <Button
              variant="theme-1"
              onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
            >
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
              variant="theme-1"
              gridColumnStart={1}
              gridColumnEnd={3}
              onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            >
              RESET
            </Button>
            <Button
              variant="theme-1"
              onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
              gridColumnStart={3}
              gridColumnEnd={5}
            >
              =
            </Button>
          </SimpleGrid>
        </FlexWithVariant>
      </FlexWithVariant>
    </BoxWithVariant>
  );
}

export default Calculator;

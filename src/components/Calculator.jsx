import { Button, Flex, SimpleGrid, useStyleConfig } from "@chakra-ui/react";
import {
  FlexWithVariant,
  BoxWithVariant,
  TextWithVariant,
} from "./customComponents";
import { useEffect, useReducer, useRef, useState } from "react";
import { ACTIONS } from "../constants/Actions";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import reducer from "../functions/reducer";
import formatOperand from "../functions/formatOperand";
import ThemeToggle from "./ThemeToggle";

function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    { currentOperand: "0" }
  );

  const currentOperandRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (/\d/.test(key)) {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: key } });
      } else if (key === ".") {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: key } });
      } else if (key === "+") {
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "+" },
        });
      } else if (key === "-") {
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "-" },
        });
      } else if (key === "*") {
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "*" },
        });
      } else if (key === "/") {
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "÷" },
        });
      } else if (key === "Enter" || key === "=") {
        dispatch({ type: ACTIONS.EVALUATE });
      } else if (key === "Backspace") {
        dispatch({ type: ACTIONS.DELETE_DIGIT });
      } else if (key === "Delete") {
        dispatch({ type: ACTIONS.CLEAR });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const calculateScale = () => {
    if (currentOperandRef.current) {
      const containerWidth = currentOperandRef.current.offsetWidth;
      const textWidth = currentOperandRef.current.scrollWidth;
      const scale = containerWidth / textWidth;
      return scale;
    }
    return 1;
  };

  const scale = calculateScale();

  const transformOrigin = scale === 1 ? "right" : "left";

  const [activeStep, setActiveStep] = useState(1);

  /*   const handleStepChange = (step) => {
    setActiveStep(step);
  }; */

  /*   const boxStyles = useStyleConfig("Box", { variant: `theme-${activeStep}` });
   */ const buttonStyles = useStyleConfig("Button", {
    variant: `theme-${activeStep}`,
  });
  const textStyles = useStyleConfig("Text", { variant: `theme-${activeStep}` });

  return (
    <BoxWithVariant variant={`theme-${activeStep}`}>
      <FlexWithVariant
        variant={`theme-${activeStep}`}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        gap="15px"
        margin="0 auto"
        w="max-content"
        h="100vh"
      >
        <ThemeToggle activeStep={activeStep} setActiveStep={setActiveStep} />
        <FlexWithVariant
          variant={`theme-${activeStep}`}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="10px"
          maxW={250}
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
            <TextWithVariant
              variant={`theme-${activeStep}`}
              position="relative"
              right="2%"
              fontSize={18}
              __css={textStyles}
            >
              {formatOperand(previousOperand)} {operation}
            </TextWithVariant>
            <TextWithVariant
              variant={`theme-${activeStep}`}
              scale={scale}
              textAlign="right"
              position="relative"
              right="2%"
              w={250}
              whiteSpace="nowrap"
              fontSize={32}
              ref={currentOperandRef}
              transform={`scale(${scale})`}
              transformOrigin={transformOrigin}
              __css={textStyles}
            >
              {formatOperand(currentOperand)}
            </TextWithVariant>
          </Flex>
          <SimpleGrid columns={4} spacing={1} w="250px">
            <DigitButton digit="7" dispatch={dispatch} __css={buttonStyles} />
            <DigitButton digit="8" dispatch={dispatch} __css={buttonStyles} />
            <DigitButton digit="9" dispatch={dispatch} __css={buttonStyles} />
            <Button
              display="flex"
              alignItems="center"
              variant={`theme-${activeStep}`}
              onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              __css={buttonStyles}
            >
              DEL
            </Button>
            <DigitButton digit="4" dispatch={dispatch} __css={buttonStyles} />
            <DigitButton digit="5" dispatch={dispatch} __css={buttonStyles} />
            <DigitButton digit="6" dispatch={dispatch} __css={buttonStyles} />
            <OperationButton
              operation="+"
              dispatch={dispatch}
              __css={buttonStyles}
            />
            <DigitButton digit="1" dispatch={dispatch} __css={buttonStyles} />
            <DigitButton digit="2" dispatch={dispatch} __css={buttonStyles} />
            <DigitButton digit="3" dispatch={dispatch} __css={buttonStyles} />
            <OperationButton
              operation="-"
              dispatch={dispatch}
              __css={buttonStyles}
            />
            <DigitButton digit="." dispatch={dispatch} __css={buttonStyles} />
            <DigitButton digit="0" dispatch={dispatch} __css={buttonStyles} />
            <OperationButton
              operation="÷"
              dispatch={dispatch}
              __css={buttonStyles}
            />
            <OperationButton
              operation="*"
              dispatch={dispatch}
              __css={buttonStyles}
            />
            <Button
              display="flex"
              alignItems="center"
              justifyContent="center"
              variant={`theme-${activeStep}`}
              gridColumnStart={1}
              gridColumnEnd={3}
              onClick={() => dispatch({ type: ACTIONS.CLEAR })}
              __css={buttonStyles}
            >
              RESET
            </Button>
            <Button
              display="flex"
              alignItems="center"
              justifyContent="center"
              variant={`theme-${activeStep}`}
              onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
              gridColumnStart={3}
              gridColumnEnd={5}
              __css={buttonStyles}
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

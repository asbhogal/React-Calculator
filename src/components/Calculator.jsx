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
  const [initialTransform, setInitialTransform] = useState("");
  const [isReset, setIsReset] = useState("");

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

  useEffect(() => {
    const handleChangeTheme = (event) => {
      setActiveStep(event.matches ? 1 : 2);
    };

    if (typeof window !== "undefined") {
      const matchMediaMock = () => ({
        matches: false,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: jest.fn((callback) => callback({ matches: false })),
        removeListener: jest.fn(),
      });

      const matchMediaFn = window.matchMedia || matchMediaMock;
      const prefersDarkMode = matchMediaFn("(prefers-color-scheme: dark)");

      handleChangeTheme(prefersDarkMode);

      prefersDarkMode.addListener(handleChangeTheme);

      return () => {
        prefersDarkMode.removeListener(handleChangeTheme);
      };
    }
  }, []);

  const calculateScale = () => {
    if (currentOperandRef.current && !isReset) {
      // Only calculate the scale when isReset is false
      const containerWidth = currentOperandRef.current.offsetWidth;
      const textWidth = currentOperandRef.current.scrollWidth;
      const scale = containerWidth / textWidth;
      return scale;
    }
    return 1;
  };

  const scale = calculateScale();

  const transformOrigin = scale === 1 ? "right" : "left";

  const resetTransform = () => {
    if (currentOperandRef.current) {
      currentOperandRef.current.style.transform = "";
    }
  };

  const resetCalculator = () => {
    setIsReset(true); // Set isReset to true when RESET button is clicked
    resetTransform();
    setTimeout(() => {
      setIsReset(false); // Set isReset to false after the transform reset
      dispatch({ type: ACTIONS.CLEAR });
    }, 0);
  };

  useEffect(() => {
    if (currentOperandRef.current) {
      const computedStyle = window.getComputedStyle(currentOperandRef.current);
      const transformValue = computedStyle.getPropertyValue("transform");
      setInitialTransform(transformValue);
    }
  }, [scale]);

  const [activeStep, setActiveStep] = useState(1);

  const buttonStyles = useStyleConfig("Button", {
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
            h={75}
            w="100%"
          >
            <TextWithVariant
              variant={`theme-${activeStep}`}
              position="relative"
              right="2%"
              fontSize={18}
              sx={textStyles}
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
              sx={textStyles}
            >
              {formatOperand(currentOperand)}
            </TextWithVariant>
          </Flex>
          <SimpleGrid columns={4} w="250px">
            <DigitButton digit="7" dispatch={dispatch} sx={buttonStyles} />
            <DigitButton digit="8" dispatch={dispatch} sx={buttonStyles} />
            <DigitButton digit="9" dispatch={dispatch} sx={buttonStyles} />
            <Button
              display="flex"
              alignItems="center"
              variant={`theme-${activeStep}`}
              onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              sx={buttonStyles}
            >
              DEL
            </Button>
            <DigitButton digit="4" dispatch={dispatch} sx={buttonStyles} />
            <DigitButton digit="5" dispatch={dispatch} sx={buttonStyles} />
            <DigitButton digit="6" dispatch={dispatch} sx={buttonStyles} />
            <OperationButton
              operation="+"
              dispatch={dispatch}
              sx={buttonStyles}
            />
            <DigitButton digit="1" dispatch={dispatch} sx={buttonStyles} />
            <DigitButton digit="2" dispatch={dispatch} sx={buttonStyles} />
            <DigitButton digit="3" dispatch={dispatch} sx={buttonStyles} />
            <OperationButton
              operation="-"
              dispatch={dispatch}
              sx={buttonStyles}
            />
            <DigitButton digit="." dispatch={dispatch} sx={buttonStyles} />
            <DigitButton digit="0" dispatch={dispatch} sx={buttonStyles} />
            <OperationButton
              operation="÷"
              dispatch={dispatch}
              sx={buttonStyles}
            />
            <OperationButton
              operation="*"
              dispatch={dispatch}
              sx={buttonStyles}
            />
            <Button
              display="flex"
              alignItems="center"
              justifyContent="center"
              variant={`theme-${activeStep}`}
              gridColumnStart={1}
              gridColumnEnd={3}
              onClick={resetCalculator}
              sx={buttonStyles}
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
              sx={buttonStyles}
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

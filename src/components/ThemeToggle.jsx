import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function ThemeToggle() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const switchStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "48px",
    height: "12px",
    backgroundColor: "#eee",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "0.3s all ease",
  };

  const stepStyles = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    transition: "transform 0.2s",
  };

  const activeStepStyles = {
    backgroundColor: "#333",
    transform: `translateX(${
      (activeStep - 1) * 100 - (100 - stepStyles.width) / 2
    }px)`,
    transition: "transform 0.3s",
  };
  return (
    <Flex alignItems="flex-end" gap={3}>
      <Text fontSize={12} fontWeight={700} letterSpacing={1.1} lineHeight={1}>
        THEME
      </Text>
      <Flex flexDirection="column" gap={1}>
        <Flex justifyContent="space-around">
          <Text fontSize={12} fontWeight={500}>
            1
          </Text>
          <Text fontSize={12} fontWeight={500}>
            2
          </Text>
          <Text fontSize={12} fontWeight={500}>
            3
          </Text>
        </Flex>
        <Box style={switchStyles}>
          <Box
            onClick={() => handleStepChange(1)}
            style={{
              ...stepStyles,
              ...(activeStep === 1 && activeStepStyles),
            }}
          ></Box>
          <Box
            onClick={() => handleStepChange(2)}
            style={{
              ...stepStyles,
              ...(activeStep === 2 && activeStepStyles),
            }}
          ></Box>
          <Box
            onClick={() => handleStepChange(3)}
            style={{
              ...stepStyles,
              ...(activeStep === 3 && activeStepStyles),
            }}
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

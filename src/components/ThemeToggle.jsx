import { Box, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

ThemeToggle.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};

export default function ThemeToggle({ activeStep, setActiveStep }) {
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
        <Flex justifyContent="space-between">
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

        <Flex style={switchStyles}>
          <Box
            variant={`theme-${activeStep}`}
            style={{
              ...stepStyles,
              ...(activeStep === 1 && activeStepStyles),
            }}
            onClick={() => {
              handleStepChange(1);
            }}
          />
          <Box
            variant={`theme-${activeStep}`}
            style={{
              ...stepStyles,
              ...(activeStep === 2 && activeStepStyles),
            }}
            onClick={() => {
              handleStepChange(2);
            }}
          />
          <Box
            variant={`theme-${activeStep}`}
            style={{
              ...stepStyles,
              ...(activeStep === 3 && activeStepStyles),
            }}
            onClick={() => {
              handleStepChange(3);
            }}
          />
        </Flex>

        {/* <FlexWithVariant variant={`theme-${activeStep}`} style={switchStyles}>
          {variants.map((variant, index) => (
            <Box
              variant={variants[activeStep - 1]}
              key={index}
              onClick={() => handleStepChange(index + 1)}
              style={{
                ...stepStyles,
                ...(activeStep === index + 1 && activeStepStyles),
              }}
            ></Box>
          ))}
        </FlexWithVariant> */}

        {/* <FlexWithVariant variant="theme-1" style={switchStyles}>
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
        </FlexWithVariant> */}
      </Flex>
    </Flex>
  );
}

import React from "react";
import { useStyleConfig, Box, Button, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const BoxWithVariant = ({ variant, ...props }) => {
  const styles = useStyleConfig("Box", { variant });
  return <Box __css={styles} {...props} />;
};

export const ButtonWithVariant = ({ variant, ...props }) => {
  const styles = useStyleConfig("Button", { variant });
  return <Button __css={styles} {...props} />;
};

export const FlexWithVariant = ({ variant, ...props }) => {
  const styles = useStyleConfig("Flex", { variant });
  return <Flex __css={styles} {...props} />;
};

export const TextWithVariant = React.forwardRef(
  ({ variant, ...props }, ref) => {
    const styles = useStyleConfig("Text", { variant });
    return <Text ref={ref} __css={styles} {...props} />;
  }
);

BoxWithVariant.propTypes = {
  variant: PropTypes.string.isRequired,
};

ButtonWithVariant.propTypes = {
  variant: PropTypes.string.isRequired,
};

FlexWithVariant.propTypes = {
  variant: PropTypes.string.isRequired,
};

TextWithVariant.propTypes = {
  variant: PropTypes.string.isRequired,
};

TextWithVariant.displayName = "TextWithVariant";

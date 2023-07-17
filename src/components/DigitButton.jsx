import { Button } from "@chakra-ui/react";
import { ACTIONS } from "../constants/Actions";
import PropTypes from "prop-types";

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  buttonStyles: PropTypes.object.isRequired,
};

export default function DigitButton({ dispatch, digit, buttonStyles }) {
  return (
    <Button
      variant={`theme-${buttonStyles.variant}`}
      fontWeight={400}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      __css={buttonStyles}
    >
      {digit}
    </Button>
  );
}

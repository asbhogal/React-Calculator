import { Button } from "@chakra-ui/react";
import { ACTIONS } from "../constants/Actions";
import PropTypes from "prop-types";

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  sx: PropTypes.object.isRequired,
};

export default function DigitButton({ dispatch, digit, sx }) {
  return (
    <Button
      variant={`theme-${sx.variant}`}
      fontWeight={400}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      __css={sx}
    >
      {digit}
    </Button>
  );
}

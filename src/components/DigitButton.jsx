import { Button } from "@chakra-ui/react";
import { ACTIONS } from "../constants/Actions";
import PropTypes from "prop-types";

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default function DigitButton({ dispatch, digit }) {
  return (
    <Button
      fontWeight={400}
      variant="theme-2"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
}

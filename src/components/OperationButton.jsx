import { Button } from "@chakra-ui/react";
import { ACTIONS } from "../constants/Actions";
import PropTypes from "prop-types";

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  buttonStyles: PropTypes.object.isRequired,
};

export default function OperationButton({ dispatch, operation, buttonStyles }) {
  return (
    <Button
      variant={buttonStyles.variant}
      height="40px"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      __css={buttonStyles}
    >
      {operation}
    </Button>
  );
}

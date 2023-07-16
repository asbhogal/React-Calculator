import { Button } from "@chakra-ui/react";
import { ACTIONS } from "../constants/Actions";
import PropTypes from "prop-types";

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default function OperationButton({ dispatch, operation }) {
  return (
    <Button
      variant="theme-2"
      height="40px"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </Button>
  );
}

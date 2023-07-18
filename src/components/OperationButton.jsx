import { Button } from "@chakra-ui/react";
import { ACTIONS } from "../constants/Actions";
import PropTypes from "prop-types";

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  sx: PropTypes.object.isRequired,
};

export default function OperationButton({ dispatch, operation, sx }) {
  return (
    <Button
      variant={`theme-${sx.variant}`}
      height="40px"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      __css={sx}
    >
      {operation}
    </Button>
  );
}

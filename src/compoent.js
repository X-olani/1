import { connect } from "react-redux";
import { addingstring, operator, equals, Clear } from "./store";
import { App } from "./App";

const mapStateToProps = state => ({
  numbers: state.numbers,
  current: state.current,
  total: state.total,
  previous: state.previous,
  op: state.op
});

const mapDispatchToProps = dispatch => {
  const moveCurrent = evt => dispatch(addingstring(evt));
  const getoperator = evt => dispatch(operator(evt));
  const getActionequal = evt => dispatch(equals(evt));
  const clear = () => dispatch(Clear());
  return {
    moveCurrent: moveCurrent,
    getoperator: getoperator,
    getActionequal: getActionequal,
    clear: clear
  };
};

export const Compoent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

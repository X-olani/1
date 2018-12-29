import { createStore } from "redux";

const initalState = {
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  previous: "",
  current: "",
  op: "",
  total: ""
};

export const addingstring = evt => {
  return {
    type: "character",
    character: evt
  };
};
export const operator = evt => {
  return {
    type: "operator",
    op: evt
  };
};
export const Subtracting = evt => {
  return {
    type: "subtract",
    subtracting: evt
  };
};
export const Divide = evt => {
  return {
    type: "dividing",
    divide: evt
  };
};
export const Multiplication = evt => {
  return {
    type: "multiplying",
    multiplying: evt
  };
};

export const equals = (evt, sign) => {
  return {
    type: "equals"
  };
};

export const Clear = () => {
  return {
    type: "clear"
  };
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "character":
      return {
        ...state,
        current: state.current + action.character
      };
    case "operator":
      return {
        op: action.op,
        numbers: state.numbers,
        previous: state.current,
        current: ""
      };
    case "clear":
      return {
        op: "",
        numbers: state.numbers,
        previous: "",
        current: ""
      };
    case "equals":
      let firstNumber = state.previous;
      let secondNumber = state.current;
      let poweroparator = state.op;
      console.log(poweroparator);
      let theAnswer;

      if (poweroparator === "+") {
        theAnswer = Number(firstNumber) + Number(secondNumber);
      } else if (poweroparator === "-") {
        theAnswer = Number(firstNumber) - Number(secondNumber);
      } else if (poweroparator === "/") {
        theAnswer = Number(firstNumber) / Number(secondNumber);
      } else if (poweroparator === "*") {
        theAnswer = Number(firstNumber) * Number(secondNumber);
      }

      return {
        current: theAnswer + "",
        previous: theAnswer,
        total: theAnswer,
        numbers: state.numbers
      };
  }

  return state;
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

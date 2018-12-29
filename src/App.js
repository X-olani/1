import React from "react";
import "./App.css";
export const App = props => {
  const moveCurrent = evt => props.moveCurrent(evt);
  const doOperation = sign => props.getoperator(sign);
  const equals = () => props.getActionequal();
  const clearing = () => props.clear();

  const plus = () => doOperation("+");

  const subtract = () => doOperation("-");

  const divide = () => doOperation("/");

  const multiply = () => doOperation("*");

  let newvalue = "";
  return (
    <div className="App">
      <div className="spacingArounddiv">
        <input className="answer" id="sign" value={props.current} />
        <br />
        {props.numbers.map((number, index) => {
          const getnumber = () => moveCurrent(index);

          return (
            <div onClick={getnumber} className="buttons" key={index}>
              {number}
            </div>
          );
        })}
      </div>

      <div className=" constainaction">
        <div id="op" onClick={plus} className="poweraction">
          +
        </div>
        <div id="subtract" onClick={subtract} className="poweraction">
          __
        </div>
        <div className="poweraction" onClick={divide}>
          /
        </div>
        <div className="poweraction" onClick={multiply}>
          X
        </div>
        <div className="poweraction" onClick={equals}>
          =
        </div>
        <div className="poweraction" onClick={clearing}>
          clear
        </div>
      </div>
    </div>
  );
};

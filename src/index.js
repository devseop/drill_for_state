import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { useMachine } from "@xstate/react";
import { counterMachine } from "./counterMachine";
import { temperatureMachine } from "./temperatureMachine";

const Counter = () => {
  // useMachine hook은 현재 상태와 send 함수가 포함된 배열을 반환
  // send 함수를 사용하여 이벤트를 트리거
  const [state, send] = useMachine(counterMachine);

  return (
    <div id="wrapper">
      <h1>Counter</h1>
      <output>{state.context.count}</output>
      <button onClick={() => send("INCREMENT")}>INCREMENT</button>
      <button onClick={() => send("DECREMENT")}>DECREMENT</button>
    </div>
  );
};

const Temp = () => {
  // useMachine hook은 현재 상태와 send 함수가 포함된 배열을 반환
  // send 함수를 사용하여 이벤트를 트리거
  const [state, send] = useMachine(temperatureMachine);

  // context 구조 분해 할당
  const { C, F } = state.context;

  return (
    <div id="wrapper">
      <h1>Temperature</h1>
      <label>
        <input
          type="number"
          id="celsius"
          value={C}
          onChange={(e) => {
            send("CELSIUS", { value: e.target.value });
          }}
          placeholder="e.g., 0"
        />
        <span> ˚C</span>
      </label>
      <div>=</div>
      <label>
        <input
          type="number"
          id="fahrenheit"
          value={F}
          onChange={(e) => {
            send("FAHRENHEIT", { value: e.target.value });
          }}
          placeholder="e.g., 32"
        />
        <span> ˚F</span>
      </label>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Temp />);

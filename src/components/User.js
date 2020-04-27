import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

function User() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))} type="button">+</button>
      <button onClick={() => dispatch(decrement())} type="button">-</button>
    </div>
  );
}

export default User;

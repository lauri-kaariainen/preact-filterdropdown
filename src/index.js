import { Component, render, Fragment } from "preact";
import {
  useReducer,
  useState,
  useCallback,
  useRef,
  useEffect
} from "preact/hooks";
import { FilterDropdown } from "./FilterDropdown.js";

function App() {
  return (
    <Fragment>
      <h1>
        <span>Styled</span> and <span>filterable</span> select dropdown
      </h1>
      <FilterDropdown
        placeHolder={"select state"}
        list={["alabama", "alaska", "arizona"]}
        onselect={evt => console.log(evt)}
      />
    </Fragment>
  );
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}

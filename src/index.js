import { Component, render, Fragment } from "preact";
import {
  useReducer,
  useState,
  useCallback,
  useRef,
  useEffect
} from "preact/hooks";
import { FilterDropdown } from "./FilterDropdown.js";

// import "./style/filterdropdown.scss";

// const FilterDropDown = ({ list, onselect }) => {
//   const [inputStr, setInputStr] = useState("");

//   const [dropDownHidden, setDropDownHidden] = useState(true);

//   const closeDropdown = () => {
//     setDropDownHidden(true);
//     // dropdown.classList.remove("open");
//   };

//   const onFilterInput = str => setInputStr(str);

//   const visibleList = list.filter(item =>
//     item.toLowerCase().includes(inputStr.toLowerCase())
//   );

// document.addEventListener("click", evt => {
//   const isDropdown = dropdown.contains(evt.target);
//   const isInput = inputField.contains(evt.target);
//   if (!isDropdown && !isInput) {
//     dropdown.classList.remove("open");
//   }
// });

// Similar to componentDidMount and componentDidUpdate:

//   return (
//     <div class="dropdown_container">
//       <input
//         className={"chosen-value"}
//         oninput={evt => onFilterInput(evt.target.value)}
//         type="text"
//         value={inputStr}
//         onclick={_ => setDropDownHidden(!dropDownHidden)}
//         placeholder="Type to filter"
//       />
//       <ul className={"value-list" + (!dropDownHidden ? " open" : "")}>
//         {visibleList.map(el => (
//           <li
//             className={"open"}
//             key={el}
//             onclick={_ => (setInputStr(el), setDropDownHidden(true))}
//           >
//             {el}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

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
      {/* <Example /> */}
    </Fragment>
  );
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}

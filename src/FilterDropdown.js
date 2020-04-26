import { useState } from "preact/hooks";

import "./style/filterdropdown.scss";

export const FilterDropdown = ({
  list,
  placeHolder,
  onselect,
  inputClassName,
  ulClassName,
  liClassName
}) => {
  const [inputStr, setInputStr] = useState("");

  const [dropDownHidden, setDropDownHidden] = useState(true);

  const onFilterInput = str => setInputStr(str);

  const visibleList = list.filter(item =>
    item.toLowerCase().includes(inputStr.toLowerCase())
  );

  return (
    <div class="dropdown_container">
      <input
        className={
          "chosen-value" +
          (dropDownHidden ? " notselectable" : "") +
          (inputClassName ? " " + inputClassName : "")
        }
        oninput={evt => onFilterInput(evt.target.value)}
        type="text"
        value={inputStr}
        onclick={evt => {
          dropDownHidden ? false : evt.target.blur();
          setDropDownHidden(!dropDownHidden);
        }}
        placeholder={
          placeHolder === undefined ? "Filter and select" : placeHolder
        }
      />
      <ul
        className={
          "value-list" +
          (!dropDownHidden ? " open" : "") +
          (ulClassName ? " " + ulClassName : "")
        }
      >
        {visibleList.map(el => (
          <li
            className={liClassName ? liClassName : ""}
            key={el}
            onclick={_ => (setInputStr(el), setDropDownHidden(true))}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

import "./Checkbox.style.css";

import { useState } from "react";

type CheckboxType = {
  id: string;
};

function Checkbox({ id }: CheckboxType) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          id={id}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
}

export default Checkbox;

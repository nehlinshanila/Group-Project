import { useState } from "react";
import "./HomeIcon.css";
const HomeIcon = () => {
  const [value, setValue] = useState(0);
  
  return (
    <div className="Counter">
      <button
        onClick={() => {
          if (value !== 0) {
            setValue(value - 1);
          }
        }}
      >
        -
      </button>
      <h3>{value}</h3>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default HomeIcon;

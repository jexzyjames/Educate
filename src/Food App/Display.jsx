import React, { useState } from "react";
import "./display.css";
const Display = ({ id, img, text }) => {
  const [value, setValue] = useState(0);

  return (
    <div className='item'>
      {!value ? (
        <div
          onClick={() => {
            setValue(prev => prev + 1);
          }}
          className="click"
        >
          +
        </div>
      ) : (
        <div className="clicks">
          <button
            onClick={() => {
              setValue(prev => prev + 1);
            }}
          >
            +
          </button>
          <p>{value}</p>
          <button
            onClick={() => {
              setValue(prev => prev - 1);
            }}
          >
            -
          </button>
        </div>
      )}
        </div>
  );
};

export default Display;

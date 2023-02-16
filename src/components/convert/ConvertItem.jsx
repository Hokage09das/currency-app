import React, { useEffect, useState } from "react";

const url = localStorage.getItem("info");

export const ConvertItem = () => {
  const [value, setValue] = useState({ first: "", second: "" });
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(JSON.parse(url));
  }, []);

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  
  console.log(value);
  return (
    <div className='container'>
      <input
        type='text'
        name='first'
        value={value.first}
        onChange={changeHandler}
      />

      <input
        type='text'
        name='second'
        value={value.second}
        onChange={changeHandler}
      />
      {/* <p>
        {CharCode}
        <input type='number' />
      </p>
      <div className='item'>
        <p>Previous:{Previous}</p>
        <p>
          Current:
          <span style={{ color: Value > Previous ? "green" : "red" }}>
            {Value}
            {Value > Previous ? <MoreIcon /> : <LessIcon />}
          </span>
        </p> */}
      {/* </div> */}
    </div>
  );
};

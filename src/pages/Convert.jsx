import { useCallback, useEffect, useState } from "react";

import Dropdown from "react-dropdown";

import { HiSwitchHorizontal } from "react-icons/hi";
import { useGetAllDailyQuery } from "../redux/api/currency-api";

import "./covert.css";
import "react-dropdown/style.css";

export function Convert() {
  const [to, setTo] = useState("USD");
  const [from, setFrom] = useState("KGS");

  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);

  const [options, setOptions] = useState([]);
  const [example, setExample] = useState(null);

  const { data } = useGetAllDailyQuery();

  useEffect(() => {
    setExample(data?.Valute);
  }, [from, data, example]);

  const convert = useCallback(() => {
    const triger = example ? example[from.toUpperCase()] : null;
    const rate = example ? example[to.toUpperCase()] : null;

    const result =
      ((triger?.Nominal / triger?.Value) * rate?.Value) / rate?.Nominal;

    setOutput(input * result);
  }, [input, to, example, from]);

  function flip() {
    const temp = from;

    setFrom(to);
    setTo(temp);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    convert();
    if (example) {
      return setOptions(Object.keys(example));
    }
  }, [convert, example]);

  return (
    <div className='App'>
      <div className='heading'>
        <h1>Currency converter</h1>
      </div>
      <div className='container'>
        <div className='left'>
          <h3>Amount</h3>
          <form onSubmit={submitHandler}>
            <input
              type='number'
              placeholder='Enter the amount'
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
        <div className='middle'>
          <h3>From</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder='To'
          />
        </div>
        <div className='switch'>
          <HiSwitchHorizontal
            size='30px'
            onClick={() => {
              flip();
            }}
          />
        </div>
        <div className='right'>
          <h3>To</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder='From'
          />
        </div>
      </div>
      <div className='result'>
        <h4>Converted Amount:</h4>
        <p className='.p'>
          {input + " " + to + " = " + output.toFixed(2) + " " + from}
        </p>
      </div>
    </div>
  );
}

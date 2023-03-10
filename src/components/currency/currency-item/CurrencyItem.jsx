import React, { useCallback, useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { LessIcon, MoreIcon } from "../../../assets/icons";

import "./currency_item.scss";

export const CurrencyItem = ({ CharCode, Previous, Value, Name, Nominal }) => {
  const [rub, setRub] = useState(Nominal);
  const [charCode, setCharCode] = useState(Value);
  const [isTrue, setIsTrue] = useState(true);

  const convert = useCallback(() => {
    setIsTrue(true);
    setRub(Nominal);
    setCharCode(Value);
  }, [Nominal, Value]);

  const returnback = useCallback(() => {
    setIsTrue(false);
    setCharCode(rub);

    const deleteCurrency = rub / charCode;
    const result = parseFloat(deleteCurrency.toFixed(4) * Nominal).toFixed(4);
    setRub(result);
  }, [rub, Nominal, charCode]);

  return (
    <div className='item_container'>
      <p className='item_charcode'>
        {CharCode} {rub}
        {isTrue ? (
          <HiSwitchHorizontal
            size='15px'
            onClick={returnback}
          />
        ) : (
          <HiSwitchHorizontal
            size='15px'
            onClick={convert}
          />
        )}
        RUB {charCode}
      </p>
      {Name}
      <div className='item'>
        <p>Previous:{Previous}</p>
        <p>
          Current:
          <span style={{ color: Value > Previous ? "green" : "red" }}>
            {Value}
            {Value > Previous ? <MoreIcon /> : <LessIcon />}
          </span>
        </p>
      </div>
    </div>
  );
};

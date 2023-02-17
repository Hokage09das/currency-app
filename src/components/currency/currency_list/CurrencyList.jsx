import React, { useEffect, useState } from "react";

import { useDebounce } from "../../../hook/useDebounce";

import { useGetAllDailyQuery } from "../../../redux/api/currency-api";
import { CurrencyItem } from "../currency-item";

import "./currency_list.scss";

export const CurrencyList = () => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState([]);

  const { data } = useGetAllDailyQuery();

  const debaunce = useDebounce(name.toLowerCase(), 500);

  useEffect(() => {
    const currencyData = [];

    for (const key in data?.Valute) {
      currencyData.push({
        [key]: key,
        ...data?.Valute[key],
      });
    }
    setInfo(currencyData);
  }, [data]);

  const filteredByName = info.filter((data) => {
    if (data.CharCode.toLowerCase().includes(debaunce)) {
      return data.CharCode.toLowerCase().includes(debaunce);
    } else {
      return data.Name.toLowerCase().includes(debaunce);
    }
  });

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);

  return (
    <div className='list_container'>
      <input
        type='text'
        value={name}
        className='input'
        placeholder='Search By Name and By CharCode'
        onChange={(e) => setName(e.target.value)}
      />
      <div className='currency_list'>
        {filteredByName.map((currency) => (
          <CurrencyItem
            {...currency}
            key={currency.ID}
          />
        ))}
      </div>
    </div>
  );
};

import { useState, ChangeEvent, FormEvent } from "react";

import { ISearchFormProps } from "./SearchForm.props";

import "./SearchForm.scss";

export function SearchForm({ onChangeInput }: ISearchFormProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    onChangeInput && onChangeInput(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <search className="searchForm" role="search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Поиск"
          value={value}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </search>
  );
}

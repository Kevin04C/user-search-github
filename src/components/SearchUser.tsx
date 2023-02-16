import { FormEvent, ChangeEvent, useRef } from "react";
import { BiSearch } from "react-icons/bi";

interface Props {
  updateSearch(id: string): void;
  search: string;
  getUser(username: string): void;
}

export const SearchUser = ({ updateSearch, search, getUser }: Props) => {
  const debounceId = useRef<number | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    getUser(search);
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    updateSearch(value);

    debounceId.current && clearTimeout(debounceId.current);
    const id = setTimeout(() => {
      getUser(value);
    }, 500);

    debounceId.current = id;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-search">
        <label htmlFor="search" className="form-label">
          <BiSearch className="form-icon-search" />
        </label>
        <input
          type="text"
          id="search"
          autoComplete="off"
          placeholder="Search GitHub username"
          className="form-input"
          onChange={handleChange}
        />
      </div>
      <button className="form-btn-submit">Search</button>
    </form>
  );
};

import { useState, useRef } from 'react';
import searchCss from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleBtnClick = () => {
    setIsOpen(true);
    inputRef.current.focus();
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setIsOpen(false);
    }
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isOpen && inputValue.trim()) {
      onSubmit(inputValue);
    }
  };

  return (
    <header className={searchCss.header}>
      <form onSubmit={handleSubmit} className={searchCss.form}>
        <label className={`${searchCss.label} ${isOpen ? searchCss.open : ''}`}>
          <button
            className={searchCss.button}
            type="button"
            onClick={handleBtnClick}
          >
            <svg viewBox="0 0 17.7 17.7">
              <path
                fill="currentColor"
                d="M12.6 11.2C13.5 10 14 8.6 14 7c0-3.9-3.1-7-7-7S0 3.1 0 7s3.1 7 7 7c1.6 0 3-.5 4.2-1.4l5.1 5.1 1.4-1.4-5.1-5.1zM2 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"
              />
            </svg>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={searchCss.input}
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleInputBlur}
          />
        </label>
        {isOpen && (
          <button type="submit" className={searchCss.submitButton}>
            Submit
          </button>
        )}
      </form>
    </header>
  );
};

export default SearchBar;

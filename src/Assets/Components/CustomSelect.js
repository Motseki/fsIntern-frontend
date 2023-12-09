import { useState } from 'react';

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState("Select car:");
  const [optionsVisible, setOptionsVisible] = useState(false);
  const options = [
    "Select car:",
    "Audi",
    "BMW",
    "Citroen",
    "Ford",
    "Honda",
    "Jaguar",
    "Land Rover",
    "Mercedes",
    "Mini",
    "Nissan",
    "Toyota",
    "Volvo"
  ];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false);
  }

  const handleToggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  }

  return (
    <div className="custom-select" style={{ width: 200 }}>
      <div className="select-selected" onClick={handleToggleOptions}>
        {selectedOption}
      </div>
      {optionsVisible && (
        <div className="select-items">
          {options.map((option, index) => (
            <div
              key={index}
              className={option === selectedOption ? "same-as-selected" : ""}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

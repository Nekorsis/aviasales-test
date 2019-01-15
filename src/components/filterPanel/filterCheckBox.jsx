import React from 'react';
import checkmark from '../../images/checkmark.png';
import './FilterPanel.css';

const FilterCheckBox = (props) => {
  const {
    text, filterId, filters, setNoStopsFilter, setFilter, deleteFilter,
  } = props;
  const filter = { name: text, id: filterId };
  const isFilterActive = filters.findIndex(k => (k.id === filter.id)) >= 0;

  const handleInputChange = () => {
    if (filters.findIndex(k => (k.id === filterId)) >= 0) {
      deleteFilter(filter);
    } else {
      setFilter(filter);
    }
  };

  const handleNoStopsChange = () => {
    setNoStopsFilter(filter);
  };

  return (
    <div className="filter-container">
      <div onClick={handleInputChange} className={`checkbox-container ${isFilterActive ? 'checkbox-active' : 'checkbox-inactive'}`}>
        {isFilterActive && <img src={checkmark} className="checkmark" />}
      </div>
      <span onClick={handleInputChange} className="checkbox-text">{text}</span>
      {text === 'Без пересадок' && <span className="checkbox-only-text" onClick={handleNoStopsChange}>только</span>}
    </div>
  );
};

export default FilterCheckBox;

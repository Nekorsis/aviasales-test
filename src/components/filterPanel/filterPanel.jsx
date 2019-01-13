import React from 'react';
import FilterCheckBox from './FilterCheckBox';

const FilterPanel = (props) => {
  const {
    setFilter, deleteFilter, filters, setCurrency, currency,
  } = props;
  const filtersText = [
    { name: 'Все', id: 4 },
    { name: 'Без пересадок', id: 0 },
    { name: '1 пересадка', id: 1 },
    { name: '2 пересадки', id: 2 },
    { name: '3 пересадки', id: 3 },
  ];
  const currencies = ['rub', 'usd', 'eur'];
  return (
    <div className="filter-panel-container">
      <div className="currency-panel">
        <p className="currency-panel-text">Валюта</p>
        <div className="currency-btns-panel">
          {currencies.map((k, i) => (
            <button
              key={k}
              type="button"
              className={`filter-btn ${i === 0 ? 'left-btn' : i === 1 ? 'middle-btn' : 'right-btn'} ${i} ${currency === k ? 'active-btn' : 'inactive-btn'}`}
              onClick={() => { setCurrency(k); }}
            >
              {k}
            </button>
          ))}
        </div>
      </div>
      <div className="transitions-filter-panel">
        <p className="transition-filter-text">Количество пересадок</p>
        <div className="filters-checkbox-container">
          {filtersText.map(k => (
            <FilterCheckBox
              text={k.name}
              filterId={k.id}
              key={k.name}
              setFilter={setFilter}
              deleteFilter={deleteFilter}
              filters={filters}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

import React from 'react';
import FilterCheckBox from './filterCheckBox';

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
  return (
    <div className="filter-panel-container">
      <div className="currency-panel">
        <p className="currency-panel-text">Валюта</p>
        <div className="currency-btns-panel">
          <button
            type="button"
            className={`filter-btn left-btn ${currency === 'rub' ? 'active-btn' : 'inactive-btn'}`}
            onClick={() => { setCurrency('rub'); }}
          >
            RUB
          </button>
          <button
            type="button"
            className={`filter-btn middle-btn ${currency === 'usd' ? 'active-btn' : 'inactive-btn'}`}
            onClick={() => { setCurrency('usd'); }}
          >
            USD
          </button>
          <button
            type="button"
            className={`filter-btn right-btn ${currency === 'eur' ? 'active-btn' : 'inactive-btn'}`}
            onClick={() => { setCurrency('eur'); }}
          >
            EUR
          </button>
        </div>
      </div>
      <div className="transitions-filter-panel">
        <p className="transition-filter-text">Количество пересадок</p>
        <div className="filters-checkbox-container">
          {filtersText.map(k => (
            <FilterCheckBox text={k.name} filterId={k.id} key={k.name} setFilter={setFilter} deleteFilter={deleteFilter} filters={filters} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

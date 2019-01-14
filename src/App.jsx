import React, { Component } from 'react';
import collectionMethods from 'lodash/collection';

import TicketInfo from './components/TicketInfo/TicketInfo';
import FilterPanel from './components/FilterPanel/FilterPanel';
import logo from './images/logo.png';
import ticketsFile from './tickets';
import './App.css';
import './Reset.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: collectionMethods.orderBy(ticketsFile.tickets, ['price']),
      filters: [],
      currency: 'rub',
    };
  }

  setFilter = (f) => {
    this.setState(prevState => ({ filters: [...prevState.filters, f] }));
  }

  deleteFilter = (f) => {
    const { filters } = this.state;
    const localFilters = filters;
    const fIndex = localFilters.findIndex(k => (k.name === f.name));
    localFilters.splice(fIndex, 1);
    this.setState({ filters: localFilters });
  }

  setCurrency = (c) => {
    this.setState({ currency: c });
  }

  sortData = () => {
    const { tickets, filters } = this.state;
    const data = [];
    tickets.forEach((k) => {
      if (filters.findIndex(j => (j.id === 4)) >= 0) {
        data.push(k);
        return;
      }
      if (filters.findIndex(j => (j.id === k.stops)) >= 0) {
        data.push(k);
      }
    });
    return data;
  }

  render() {
    const { tickets, filters, currency } = this.state;
    const data = filters.length > 0 ? this.sortData() : tickets;
    return (
      <div className="app">
        <div className="app-header">
          <img alt=" " src={logo} />
        </div>
        <div className="app-content">
          <div className="left-contet">
            <FilterPanel
              setFilter={this.setFilter}
              deleteFilter={this.deleteFilter}
              filters={filters}
              currency={currency}
              setCurrency={this.setCurrency}
            />
          </div>
          <div className="right-content">
            {tickets && data.map((k, i) => (
              <TicketInfo currency={currency} index={i} key={`${k.origin_name} ${k.arrival_date} ${k.arrival_time}`} ticket={k} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

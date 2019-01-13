import React, { Component } from 'react';
import checkmark from '../../images/checkmark.png';
import './FilterPanel.css';

class FilterCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handleInputChange = () => {
    const {
      setFilter, text, filters, deleteFilter, filterId,
    } = this.props;
    const filter = { name: text, id: filterId };
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
    if (filters.findIndex(k => (k.id === filterId)) >= 0) {
      deleteFilter(filter);
    } else {
      setFilter(filter);
    }
  }

  render() {
    const { isChecked } = this.state;
    const { text } = this.props;
    return (
      <div className="filter-container">
        <div onClick={this.handleInputChange} className={`checkbox-container ${isChecked ? 'checkbox-active' : 'checkbox-inactive'}`}>
          {isChecked && <img src={checkmark} className="checkmark" />}
        </div>
        <span onClick={this.handleInputChange} className="checkbox-text">{text}</span>
      </div>
    );
  }
}

export default FilterCheckBox;

import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import transitionLine from '../../images/transition_line.png';
import transitionIcon from '../../images/transition_icon.png';
import turkishLogo from '../../images/turkish-airlines-logo-png.png';
import './TicketInfo.css';

const TicketInfo = (props) => {
  const { ticket, currency, index } = props;

  const renderStops = (s) => {
    if (s <= 0) {
      return null;
    } if (s === 1) {
      return <p className="stops-text">{`${ticket.stops} пересадка`}</p>;
    } if (s >= 5) {
      return <p className="stops-text">{`${ticket.stops} пересадок`}</p>;
    }
    return <p className="stops-text">{`${ticket.stops} пересадки`}</p>;
  };

  const getDateDay = (d) => {
    const date = new Date(d);
    const ru = moment();
    ru.locale('ru');
    return `${moment(date).format('D MMM YYYY, ddd').replace(/\./g, '')}`;
  };

  const parsePrice = (p) => {
    let price = p;
    let currencyIcon = '₽';
    if (currency === 'usd') {
      price = (p / 65).toFixed(0);
      currencyIcon = '$';
    } else if (currency === 'eur') {
      price = (p / 75).toFixed(0);
      currencyIcon = '€';
    } else {
      price = p;
      currencyIcon = '₽';
    }
    const strP = price.toString();
    if (price <= 999) {
      return `${price} ${currencyIcon}`;
    } if (price >= 1000 && price <= 9999) {
      return `${strP[0]} ${strP.slice(1)} ${currencyIcon}`;
    }
    return `${strP.slice(0, 2)} ${strP.slice(2)} ${currencyIcon}`;
  };

  return (
    <div className={`ticket-info-container ${index > 0 ? 'margin-ticket' : ''}`}>
      <div className="ticket-info-buy">
        <img className="airlines-logo" alt="" src={turkishLogo} />
        <button type="button" className="buy-ticket-btn">
          <p className="buy-ticket-btn-text">Купить</p>
          <p className="buy-ticket-btn-text">{`за ${parsePrice(ticket.price)}`}</p>
        </button>
      </div>
      <div className="ticket-info-date">
        <div className="origin-info">
          <p className="ticket-time-text">{ticket.departure_time}</p>
          <p className="ticket-origin-text">{`${ticket.origin}, ${ticket.origin_name}`}</p>
          <p className="ticket-date-text">{`${getDateDay(ticket.departure_date)}`}</p>
        </div>
        <div className="transition-info">
          {renderStops(ticket.stops)}
          <div className="transition-icons">
            <img alt="" className="transition-line-icon" src={transitionLine} />
            <img alt="" className="transition-flight-icon" src={transitionIcon} />
          </div>
        </div>
        <div className="destination-info">
          <p className="ticket-time-text">{ticket.arrival_time}</p>
          <p className="ticket-origin-text">{`${ticket.destination}, ${ticket.destination_name}`}</p>
          <p className="ticket-date-text">{`${getDateDay(ticket.arrival_date)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;

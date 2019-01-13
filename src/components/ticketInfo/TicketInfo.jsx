import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import transitionLine from '../../transition_line.png';
import transitionIcon from '../../transition_icon.png';
import turkishLogo from '../../turkish-airlines-logo-png.png';

const TicketInfo = (props) => {
  const renderStops = (s) => {
    if (s <= 0) {
      return null;
    } if (s === 1) {
      return <p className="stops-text">{`${props.ticket.stops} ПЕРЕСАДКА`}</p>;
    } if (s >= 5) {
      return <p className="stops-text">{`${props.ticket.stops} ПЕРЕСАДОК`}</p>;
    }
    return <p className="stops-text">{`${props.ticket.stops} ПЕРЕСАДКИ`}</p>;
  };

  const getDateDay = (d) => {
    const date = new Date(d);
    const ru = moment();
    ru.locale('ru');
    return `${moment(date).format('D MMM YYYY, ddd').replace(/\./g, '')}`;
  };

  const parsePrice = (p) => {
    const { currency } = props;
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
    <div className={`ticket-info-container ${props.index > 0 ? 'margin-ticket' : ''}`}>
      <div className="ticket-info-buy">
        <img className="airlines-logo" alt="" src={turkishLogo} />
        <button type="button" className="buy-ticket-btn">
          <p className="buy-ticket-btn-text">Купить</p>
          <p className="buy-ticket-btn-text">{`за ${parsePrice(props.ticket.price)}`}</p>
        </button>
      </div>
      <div className="ticket-info-date">
        <div className="origin-info">
          <p className="ticket-time-text">{props.ticket.departure_time}</p>
          <p className="ticket-origin-text">{`${props.ticket.origin}, ${props.ticket.origin_name}`}</p>
          <p className="ticket-date-text">{`${getDateDay(props.ticket.departure_date)}`}</p>
        </div>
        <div className="transition-info">
          {renderStops(props.ticket.stops)}
          <div className="transition-icons">
            <img className="transition-line-icon" src={transitionLine} />
            <img className="transition-flight-icon" src={transitionIcon} />
          </div>
        </div>
        <div className="destination-info">
          <p className="ticket-time-text">{props.ticket.arrival_time}</p>
          <p className="ticket-origin-text">{`${props.ticket.destination}, ${props.ticket.destination_name}`}</p>
          <p className="ticket-date-text">{`${getDateDay(props.ticket.arrival_date)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;

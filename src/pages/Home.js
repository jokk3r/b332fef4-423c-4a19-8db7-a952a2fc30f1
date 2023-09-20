import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EventsMain } from '../components/EventsMain/EventsMain';

const Home = ({ searchValue, setSearchValue }) => {
  const baseURL = 'https://teclead-ventures.github.io/data/london-events.json';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data);
      setLoading(false);
      console.log(response.data);
    });
  }, []);

  const dateConversion = items.map((obj) => {
    return { ...obj, date: new Date(obj.date) };
  });

  const arrSortedOnDate = dateConversion.sort(
    (obj1, obj2) => Number(obj1.date) - Number(obj2.date),
  );

  const eventsSortedOnDate = arrSortedOnDate.reduce((groups, item) => {
    const date = item.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);

    return groups;
  }, {});

  const eventsObjGroup = Object.keys(eventsSortedOnDate).map((date) => {
    return {
      date,
      events: eventsSortedOnDate[date],
    };
  });

  return (
    <div className="container">
      <div className="dates">
        <p>{}</p>
      </div>
      <h2 className="content__title">Public Events</h2>
      {loading === true ? (
        <p>loading...</p>
      ) : (
        <div className="content__items">
          {eventsObjGroup.map((obj, i) => (
            <EventsMain
              key={i}
              {...obj}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

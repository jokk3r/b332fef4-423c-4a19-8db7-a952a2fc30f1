import React, { useState, useEffect } from 'react';

import { EventsMain } from '../components/EventsMain/EventsMain';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/slices/eventSlice';

const Home = ({ searchValue, setSearchValue }) => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.event);
  const [firstDate, setFirstDate] = useState(0);
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    dispatch(fetchEvents());
  };

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
      <h2 className="content__title">Public Events</h2>
      {status === 'error' ? (
        <div>
          <h2>error on server side</h2>
          <p>try again later</p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? (
            <p>loading...</p>
          ) : (
            <>
              {eventsObjGroup.map((obj, i) => (
                <EventsMain
                  key={i}
                  {...obj}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              ))}
            </>
          )}
        </div>
      )}
      {/* {status === 'loading' ? (
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
      )} */}
    </div>
  );
};

export default Home;

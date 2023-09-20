import React, { useEffect, useState } from 'react';
import styles from './EventsMain.module.scss';
import EventBlock from '../EventBlock/EventBlock';

export const EventsMain = ({ date, events, searchValue, setSearchValue }) => {
  let dateMain = new Date(date);
  let dateConvert = dateMain.toLocaleDateString();

  const eventsSearch = events
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj, i) => <EventBlock key={i} {...obj} />);
  return (
    <div className={styles.events__main}>
      <h3 className={styles.events__date}>{dateConvert}</h3>
      {eventsSearch}
    </div>
  );
};

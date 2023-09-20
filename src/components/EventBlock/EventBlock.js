import React from 'react';
import styles from './EventBlock.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

function EventBlock({ _id, startTime, endTime, flyerFront, title, venue }) {
  const clubName = title;
  console.log(venue.name);
  const dispatch = useDispatch();
  const dateStart = new Date(startTime);
  const dateStartConvert = dateStart.toLocaleDateString();
  const timeStart = dateStart.toLocaleTimeString().slice(0, -3);

  const dateFinish = new Date(endTime);
  const dateFinishConvert = dateFinish.toLocaleDateString();
  const timeFinish = dateFinish.toLocaleTimeString().slice(0, -3);

  const onClickAdd = () => {
    const item = {
      _id,
      title,
      img: flyerFront,
      clubName: title,
      date: dateStartConvert,
    };
    dispatch(addItem(item));
    console.log(item);
  };
  return (
    <div className={styles.event__wrapper}>
      <div className={styles.event__block}>
        <h4 className={styles.event__title}>{title}</h4>
        <div className={styles.event__bottom}>
          <div className={styles.event__club}>{clubName}</div>
          <div className={styles.event__date}>
            <p> {startTime ? `Start: ${dateStartConvert} ${timeStart}` : 'Better Call Saul'}</p>
            <p>
              {endTime ? `Finish: ${dateFinishConvert} ${timeFinish}` : `he'll get the details`}
            </p>
          </div>
          <button onClick={onClickAdd}>add</button>
        </div>
      </div>
    </div>
  );
}

export default EventBlock;

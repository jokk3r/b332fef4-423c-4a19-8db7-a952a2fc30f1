import React from 'react';
import styles from './EventBlock.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import imgSmall from '../../assets/img/eventImgSmall.svg';
import place from '../../assets/img/place.svg';
import plus from '../../assets/img/plus.svg';
import { Link } from 'react-router-dom';

function EventBlock({ _id, startTime, endTime, flyerFront, title, venue }) {
  const clubName = venue.name;
  const direction = venue.direction;

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
      clubName,
      date: dateStartConvert,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={styles.event__wrapper}>
      <div className={styles.event__top}>
        <img src={imgSmall} alt="small preview" />
        <h4 className={styles.event__title}>{title}</h4>
      </div>
      <div className={styles.event__imgBlock}>
        <img className={styles.event__img} src={flyerFront} alt="event" />
      </div>
      <div className={styles.event__info}>
        <Link to={direction} target="_blank">
          <div className={styles.event__club}>
            <img src={place} alt="place" />
            <p className={styles.event__clubName}>{clubName}</p>
          </div>
        </Link>
        <div className={styles.event__date}>
          <p> {startTime ? `Start: ${dateStartConvert} ${timeStart}` : 'Better Call Saul'}</p>
          <p>{endTime ? `Finish: ${dateFinishConvert} ${timeFinish}` : `he'll get the details`}</p>
        </div>
      </div>
      <div className={styles.event__bottom}>
        <div className={styles.event__add} onClick={onClickAdd}>
          <img className={styles.event__addImg} src={plus} alt="add to basket" />
        </div>
      </div>
    </div>
  );
}

export default EventBlock;

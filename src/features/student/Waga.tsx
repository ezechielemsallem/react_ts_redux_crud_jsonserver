import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Counter.module.css';
import {selectStudnts} from './studentSlice';

const Waga = () => {
    const students = useAppSelector(selectStudnts);
  return (
    <div>College
        <h1>We have {students.length} students</h1>
    </div>
  )
}

export default Waga
import { Fragment } from 'react';
import Box from '@mui/material/Box';

import styles from '../styles/components.module.css';

const Floor = ({ direction = 'vertical', number, apartmentsSequence = [] }) => {
  return (
    <Box className={`${styles.floor} ${styles[direction]}`}>
      <Box className={styles.floor_number}>етаж {number}</Box>
      <Box
        className={styles.floor_content}
        style={{ flexDirection: direction === 'vertical' ? 'column' : 'row' }}
      >
        {apartmentsSequence.map((aps, index) => (
          <Box className={styles.floor_row} key={index}>
            {aps.map((app, index) => <Fragment key={`${number}_${index}`}>{app}</Fragment>)}
          </Box>
        ))}
      </Box>
    </Box>
  )
};

export default Floor;

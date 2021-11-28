import { useState } from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';

import styles from '../styles/components.module.css';

const Apartment = ({ number, status = 'unactive', power }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        className={`
        ${styles.apartment}
        ${styles[status]}
        ${styles[power]}
        ${!number && styles.invisible}
        `}
        style={{ cursor: number ? 'help' : ''}}
        onMouseEnter={number && handlePopoverOpen}
        onMouseLeave={number && handlePopoverClose}
        >
        {number || 0}
      </Box>
      <Popover
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box className={styles.popover}>
          <p>Пералня: <strong>1</strong></p>
          <p>Климатик: <strong>2</strong></p>
        </Box>
      </Popover>
    </>
  );
};

export default Apartment;

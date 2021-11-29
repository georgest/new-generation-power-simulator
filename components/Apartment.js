import { useState } from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';

import { usageMappings, usageLabelsMappings } from '../helpers/mappings';

import styles from '../styles/components.module.css';

const calculateStatus = (usage, normal, apartments) => {
  const mediumUsagePerApp = normal / apartments;
  const highUsagePerApp = 2 * mediumUsagePerApp;

  if (usage > highUsagePerApp) {
    return 'high';
  } else if (usage > mediumUsagePerApp) {
    return 'medium';
  } else {
    return 'low';
  }
};

const calculateUsage = (items) => {
  let total = 0;

  if (!items) return total;

  total += Object.keys(items).reduce((acc, key) => {
    const appliance = items[key];

    if (!appliance.checked) {
      return acc;
    }

    if (appliance.value) {
      acc += appliance.value * usageMappings[key];
    } else {
      acc += usageMappings[key];
    }

    return acc;
  }, 0);

  return total;
};

const Apartment = ({ number, status = 'unactive', usage, normalUsage, apartments }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const totalUsage = calculateUsage(usage);
  const totalStatus = calculateStatus(totalUsage, normalUsage, apartments);

  return (
    <>
      <Box
        className={`
        ${styles.apartment}
        ${styles[status]}
        ${styles[totalStatus]}
        ${!number && styles.invisible}
        `}
        style={{ cursor: number && usage ? 'help' : ''}}
        onMouseEnter={number && handlePopoverOpen}
        onMouseLeave={number && handlePopoverClose}
        >
        {number || 0}
      </Box>
      {usage && (
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
            {Object.keys(usage).map((key) => usage[key].checked && (
              <p key={key}>
                {`${usageLabelsMappings[key]}${usage[key].value ? `: ${usage[key].value}` : ''}`}
              </p>
            ))}
            <Box sx={{ mt: 1 }}>
              <strong>Общо: {totalUsage}</strong>
            </Box>
          </Box>
        </Popover>
      )}
    </>
  );
};

export default Apartment;

import { useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { usageLabelsMappings } from '../helpers/mappings';

import styles from '../styles/containers.module.css';

const getAppartmentsCount = (block) => {
  switch (block) {
    case 'a':
      return 18;
    case 'b': 
      return 28;
    case 'c': 
      return 22
    default: 
    return 0;
  }
}

const initialState = {
  ac: { checked: false, value: '0' },
  warmer: { checked: false, value: '0' },
  convector: { checked: false, value: '0' },
  tv: { checked: false, value: '0' },
  lamps: { checked: false, value: '0' },
  refrigerator: { checked: false },
  cooker: { checked: false },
  plot: { checked: false },
  aspirator: { checked: false },
  dishWasher: { checked: false },
  washingMachine: { checked: false },
  dryer: { checked: false },
  boiler: { checked: false },
};

const Usage = ({ user, info, open, handleClose }) => {
  const [usage, setUsage] = useState(initialState);

  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection('usage')
        .doc(`${info.block}-${info.app}`)
        .onSnapshot((doc) => {
          doc.data() && setUsage(doc.data());
        })
    } catch (error) {
      console.log(error);
    }
  }, [])  ;

  const handleSave = () => {
    try {
      firebase
        .firestore()
        .collection('usage')
        .doc(`${info.block}-${info.app}`)
        .set(Object.keys(usage).reduce((acc, key) => ({
          ...acc,
          [key]: {
            checked: usage[key].checked,
            ...(usage[key].value && { value: usage[key].value}),
          }
        }), {}), { merge: true });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const onCheckboxChange = (key) => {
    setUsage((currentUsage) => ({
      ...currentUsage,
      [key]: {
        ...currentUsage[key],
        checked: !currentUsage[key].checked,
      }
    }));
  }

  const onInputChange = (event, key) => {
    const value = event.target.value;

    setUsage((currentUsage) => ({
      ...currentUsage,
      [key]: {
        ...currentUsage[key],
        value: value,
      }
    }));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-usage"
      aria-describedby="modal-what-do-you-use"
    >
      <Box className={styles.modal2}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5">Какво използвате в момента?</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
          {usage && Object.keys(usage).map((key) => {
            const item = usage[key];
            return (
              <FormGroup key={key} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '33%' }}>
                <FormControlLabel control={<Checkbox checked={item.checked} onChange={() => onCheckboxChange(key)} />} label={usageLabelsMappings[key]} />
                {item.value !== undefined && item.checked && (
                  <TextField
                    id={key}
                    size="small"
                    label=""
                    variant="outlined"
                    value={item.value}
                    onChange={(event) => onInputChange(event, key)}
                    sx={{ width: 50 }}
                  />
                )}
              </FormGroup>
            );
          })}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="info" onClick={handleSave} sx={{ mr: 1 }}>Приложи</Button>
          <Button variant="outlined" color="inherit" onClick={handleClose}>Затвори</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Usage;

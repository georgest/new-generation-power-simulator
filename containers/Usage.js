import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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

const Usage = ({ open, handleClose }) => {
  const [block, setBlock] = useState(null);
  const [app, setApp] = useState(null);

  const handleSave = () => {
    console.log(block);
    console.log(app);
  };

  const onBlockChange = useCallback((block) => {
    setBlock(block);
    setApp(null);
  }, [block]);

  const onAppChange = useCallback((app) => {
    setApp(app);
  }, [app]);

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: !block ? '100%' : '50%' }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Пералня" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Хладилник" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Климатик" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Печка" />
          </FormGroup>
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

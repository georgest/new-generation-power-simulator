import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import firebase from 'firebase/app';
import 'firebase/firestore';

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

const Questionaire = ({ user, open, handleClose }) => {
  const [block, setBlock] = useState(null);
  const [app, setApp] = useState(null);

  const handleSave = () => {
    try {
      firebase
        .firestore()
        .collection('users')
        .doc(user.id)
        .set({
          block,
          app,
        });
    } catch (error) {
      console.log(error);
    }
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
      aria-labelledby="modal-questionaire"
      aria-describedby="modal-where-do-you-live"
    >
      <Box className={styles.modal}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5">В кой апартамент сте?</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="caption">Вход</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: !block ? '100%' : '50%' }}>
          <Button
            variant={block === 'a' ? 'contained' : 'outlined'}
            color={block === 'a' ? 'success' : 'inherit'}
            onClick={() => onBlockChange('a')}
          >
            A
          </Button>
          <Button
            variant={block === 'b' ? 'contained' : 'outlined'}
            color={block === 'b' ? 'success' : 'inherit'}
            onClick={() => onBlockChange('b')}
          >
            Б
          </Button>
          <Button
            variant={block === 'c' ? 'contained' : 'outlined'}
            color={block === 'c' ? 'success' : 'inherit'}
            onClick={() => onBlockChange('c')}
          >
            В
          </Button>
        </Box>
        <Box sx={{ my: 2 }}>
          <Box sx={{ my: 1 }}>
            <Typography variant="caption">Апартамент</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {[...Array(getAppartmentsCount(block)).keys()].map((item) => (
              <Button
                key={item}
                variant={app === item + 1 ? 'contained' : 'outlined'}
                color={app === item + 1 ? 'success' : 'inherit'}
                sx={{ mr: 2, mb: 2 }}
                onClick={() => onAppChange(item + 1)}
                disabled={false}
              >
                {item + 1}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="info" onClick={handleSave} sx={{ mr: 1 }}>Приложи</Button>
          <Button variant="outlined" color="inherit" onClick={handleClose}>Затвори</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Questionaire;

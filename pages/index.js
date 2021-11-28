import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import BlockA from '../containers/BlockA';
import BlockB from '../containers/BlockB';
import BlockC from '../containers/BlockC';
import Questionaire from '../containers/Questionaire';
import Usage from '../containers/Usage';

import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';

import styles from '../styles/Home.module.css';

const Home = ({ status = 'low' }) => {
  const [info, setInfo] = useState(null);

  const { user, logout } = useUser();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!user) return null;

  console.log(user);

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Button
          variant="contained"
          color="info"
          onClick={handleOpen}
        >
          какво ползвам?
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={logout}
        >
          изход
        </Button>
      </Box>
      <Box className={`${styles.status} ${styles[status]}`}>
        500 kwh
      </Box>
      <Box className={styles.block_a}>
        <BlockA />
      </Box>
      <Box className={styles.block_b}>
        <BlockB />
      </Box>
      <Box className={styles.block_c}>
        <BlockC />
      </Box>
      { !info && <Questionaire open={open} handleClose={handleClose} onSuccess={ (block, app) => setInfo({ block, app }) } /> }
      { info && info.block && info.app && <Usage open={open} handleClose={handleClose} /> }
    </Box>
  );
};

export default withAuth(Home);

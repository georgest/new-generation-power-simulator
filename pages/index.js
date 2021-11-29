import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import firebase from 'firebase/app';
import 'firebase/firestore';

import initFirebase from '../config';

import BlockA from '../containers/BlockA';
import BlockB from '../containers/BlockB';
import BlockC from '../containers/BlockC';
import Questionaire from '../containers/Questionaire';
import Usage from '../containers/Usage';

import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';

import { usageMappings } from '../helpers/mappings';

import styles from '../styles/Home.module.css';

initFirebase();

const filterItems = (items, block) => items.filter((item) => item.block === block)

const filterUsage = (items, block) => Object.keys(items)
  .filter((key) => {
    const currentBlock = key.split('-')[0];

    return currentBlock === block;
  })
  .reduce((acc, key) => ({
    ...acc,
    [key.split('-')[1]]: items[key],
  }), {});

const blockMapping = {
  a: 'А',
  b: 'Б',
  c: 'В',
};

const getUserInfo = (info) => {
  if (!info) return '';

  return `${blockMapping[info.block]} - ${info.app}`;
}

const calculateStatus = (usage) => {
  if (usage > 50) {
    return 'high';
  } else if (usage > 25) {
    return 'medium';
  } else {
    return 'low';
  }
};

const calculateUsage = (items) => {
  let total = 0;

  Object.keys(items).map((item) => {
    const app = items[item];
    
    total += Object.keys(app).reduce((acc, key) => {
      const appliance = app[key];

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
  });

  return total;
};

const Home = () => {
  const [items, setItems] = useState([]);
  const [usage, setUsage] = useState({});
  const [info, setInfo] = useState(null);

  const { user, logout } = useUser();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection('users')
        .onSnapshot((doc) => {
          doc.forEach((d) => {
            const { app, block } = d.data();
            let duplicate = false;

            items.map((item) => {
              if (item.block === block && item.app === app) {
                duplicate = true;
              }
            });

            !duplicate && setItems((array) => [...array, { block, app }]);
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection('usage')
        .onSnapshot((doc) => {
          doc.forEach((u) => setUsage((obj) => ({...obj, [u.id]: u.data()})));
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (user) {
      try {
        firebase
          .firestore()
          .collection('users')
          .doc(user.id)
          .onSnapshot((doc) => {
            const data = doc.data();

            if (!data) {
              try {
                firebase
                  .firestore()
                  .collection('users')
                  .doc(user.id)
                  .set({
                    block: null,
                    app: null,
                  });
              } catch (error) {
                console.log(error);
              }
            } else {
              const { block, app } = data;

              setInfo({ block, app });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  if (!user) return null;

  const totalUsage = calculateUsage(usage);
  const totalStatus = calculateStatus(totalUsage);

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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 2 }}>
            {info && info.block && info.app && getUserInfo(info)}
          </Box>
          <Button
            variant="outlined"
            color="inherit"
            onClick={logout}
          >
            изход
          </Button>
        </Box>
      </Box>
      <Box className={`${styles.status} ${styles[totalStatus]}`}>
        {totalUsage.toFixed(2)} kwh
        <Box className={`${styles.totals}`}>
          {items.length} / 68 ап.
        </Box>
      </Box>
      <Box className={styles.block_a}>
        <BlockA
          usage={filterUsage(usage, 'a')}
          items={filterItems(items, 'a')}
        />
      </Box>
      <Box className={styles.block_b}>
        <BlockB
          usage={filterUsage(usage, 'b')}
          items={filterItems(items, 'b')}
        />
      </Box>
      <Box className={styles.block_c}>
        <BlockC
          usage={filterUsage(usage, 'c')}
          items={filterItems(items, 'c')}
        />
      </Box>
      { !(info && (info.block || info.app)) && <Questionaire user={user} open={open} handleClose={handleClose} /> }
      { info && info.block && info.app && <Usage user={user} info={info} open={open} handleClose={handleClose} /> }
    </Box>
  );
};

export default withAuth(Home);

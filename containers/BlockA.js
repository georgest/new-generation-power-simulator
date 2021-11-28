import Box from '@mui/material/Box';

import Floor from '../components/Floor';
import Apartment from '../components/Apartment';

import styles from '../styles/containers.module.css';

const BlockA = () => {
  return (
    <Box className={`${styles.block} ${styles.vertical}`}>
      <Box className={styles.block_name}>A</Box>
      <Floor
        number={4}
        direction='vertical'
        apartmentsSequence={[
          [
            <Apartment />,
            <Apartment
              number={22}
            />
          ],
          [
            <Apartment
              number={21}
            />,
            <Apartment
              number={18}
            />
          ],
          [
            <Apartment
              number={20}
            />,
            <Apartment
              number={19}
            />
          ],
        ]}
      />
      <Floor
        number={3}
        direction='vertical'
        apartmentsSequence={[
          [
            <Apartment
              number={16}
            />,
            <Apartment
              number={17}
            />
          ],
          [
            <Apartment
              number={15}
            />,
            <Apartment
              number={12}
            />
          ],
          [
            <Apartment
              number={14}
            />,
            <Apartment
              number={13}
            />
          ],
        ]}
      />
      <Floor
        number={2}
        direction='vertical'
        apartmentsSequence={[
          [
            <Apartment
              number={10}
            />,
            <Apartment
              number={11}
            />
          ],
          [
            <Apartment
              number={9}
            />,
            <Apartment
              number={6}
            />
          ],
          [
            <Apartment
              number={8}
            />,
            <Apartment
              number={7}
            />
          ],
        ]}
      />
      <Floor
        number={1}
        direction='vertical'
        apartmentsSequence={[
          [
            <Apartment />,
            <Apartment
              number={5}
            />
          ],
          [
            <Apartment
              number={4}
            />,
            <Apartment
              number={1}
            />
          ],
          [
            <Apartment
              number={3}
            />,
            <Apartment
              number={2}
            />
          ],
        ]}
      />
    </Box>
  );
};

export default BlockA;

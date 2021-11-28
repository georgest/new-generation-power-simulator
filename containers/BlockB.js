import Box from '@mui/material/Box';

import Floor from '../components/Floor';
import Apartment from '../components/Apartment';

import styles from '../styles/containers.module.css';

const BlockA = () => {
  return (
    <Box className={`${styles.block} ${styles.horizontal}`}>
      <Box className={styles.block_name}>Б</Box>
      <Floor
        number={4}
        direction='horizontal'
        apartmentsSequence={[
          [
            <Apartment
              number={28}
            />,
            <Apartment
              number={27}
            />,
          ],
          [
            <Apartment />,
            <Apartment
              number={26}
            />,
          ],
          [
            <Apartment
            number={22}
            />,
            <Apartment />,
          ],
          [
            <Apartment />,
            <Apartment
              number={25}
            />,
          ],
          [
            <Apartment
              number={23}
            />,
            <Apartment
              number={24}
            />,
          ]
        ]}
      />
      <Floor
        number={3}
        direction='horizontal'
        apartmentsSequence={[
          [
            <Apartment
              number={21}
            />,
            <Apartment
              number={20}
            />,
          ],
          [
            <Apartment />,
            <Apartment
              number={19}
            />,
          ],
          [
            <Apartment
            number={15}
            />,
            <Apartment />,
          ],
          [
            <Apartment />,
            <Apartment
              number={18}
            />,
          ],
          [
            <Apartment
              number={16}
            />,
            <Apartment
              number={17}
            />,
          ]
        ]}
      />
      <Floor
        number={2}
        direction='horizontal'
        apartmentsSequence={[
          [
            <Apartment
              number={14}
            />,
            <Apartment
              number={13}
            />,
          ],
          [
            <Apartment />,
            <Apartment
              number={12}
            />,
          ],
          [
            <Apartment
            number={8}
            />,
            <Apartment />,
          ],
          [
            <Apartment />,
            <Apartment
              number={11}
            />,
          ],
          [
            <Apartment
              number={9}
            />,
            <Apartment
              number={10}
            />,
          ]
        ]}
      />
      <Floor
        number={1}
        direction='horizontal'
        apartmentsSequence={[
          [
            <Apartment
              number={7}
            />,
            <Apartment
              number={6}
              status="active"
              power="medium"
            />,
          ],
          [
            <Apartment />,
            <Apartment
              number={5}
            />,
          ],
          [
            <Apartment
            number={1}
            />,
            <Apartment />,
          ],
          [
            <Apartment />,
            <Apartment
              number={4}
            />,
          ],
          [
            <Apartment
              number={2}
            />,
            <Apartment
              number={3}
            />,
          ]
        ]}
      />
    </Box>
  );
};

export default BlockA;

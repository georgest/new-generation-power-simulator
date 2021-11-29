import Box from '@mui/material/Box';

import Floor from '../components/Floor';
import Apartment from '../components/Apartment';

import styles from '../styles/containers.module.css';

const BlockA = ({ items, usage }) => {
  const availableApartments = items.map((item) => item.app);
  const normalUsage = 10;

  return (
    <Box className={`${styles.block} ${styles.horizontal}`}>
      <Box className={styles.block_name}>Б</Box>
      <Floor
        number={4}
        direction='horizontal'
        apartmentsSequence={[
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={28}
              status={availableApartments.includes(28) ? 'active' : 'unactive'}
              usage={usage[28]}
            />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={27}
              status={availableApartments.includes(27) ? 'active' : 'unactive'}
              usage={usage[27]}
            />,
          ],
          [
            <Apartment />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={26}
              status={availableApartments.includes(26) ? 'active' : 'unactive'}
              usage={usage[26]}
            />,
          ],
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={22}
              status={availableApartments.includes(22) ? 'active' : 'unactive'}
              usage={usage[22]}
            />,
            <Apartment />,
          ],
          [
            <Apartment />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={25}
              status={availableApartments.includes(25) ? 'active' : 'unactive'}
              usage={usage[25]}
            />,
          ],
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={23}
              status={availableApartments.includes(23) ? 'active' : 'unactive'}
              usage={usage[23]}
            />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={24}
              status={availableApartments.includes(24) ? 'active' : 'unactive'}
              usage={usage[24]}
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
              apartments={items.length}
              normalUsage={normalUsage}
              number={21}
              status={availableApartments.includes(21) ? 'active' : 'unactive'}
              usage={usage[21]}
            />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={20}
              status={availableApartments.includes(20) ? 'active' : 'unactive'}
              usage={usage[20]}
            />,
          ],
          [
            <Apartment />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={19}
              status={availableApartments.includes(19) ? 'active' : 'unactive'}
              usage={usage[19]}
            />,
          ],
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={15}
              status={availableApartments.includes(15) ? 'active' : 'unactive'}
              usage={usage[15]}
            />,
            <Apartment />,
          ],
          [
            <Apartment />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={18}
              status={availableApartments.includes(18) ? 'active' : 'unactive'}
              usage={usage[18]}
            />,
          ],
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={16}
              status={availableApartments.includes(16) ? 'active' : 'unactive'}
              usage={usage[16]}
            />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={17}
              status={availableApartments.includes(17) ? 'active' : 'unactive'}
              usage={usage[17]}
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
              apartments={items.length}
              normalUsage={normalUsage}
              number={14}
              status={availableApartments.includes(14) ? 'active' : 'unactive'}
              usage={usage[14]}
            />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={13}
              status={availableApartments.includes(13) ? 'active' : 'unactive'}
              usage={usage[13]}
            />,
          ],
          [
            <Apartment />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={12}
              status={availableApartments.includes(12) ? 'active' : 'unactive'}
              usage={usage[12]}
            />,
          ],
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={8}
              status={availableApartments.includes(8) ? 'active' : 'unactive'}
              usage={usage[8]}
            />,
            <Apartment />,
          ],
          [
            <Apartment />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={11}
              status={availableApartments.includes(11) ? 'active' : 'unactive'}
              usage={usage[11]}
            />,
          ],
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={9}
              status={availableApartments.includes(9) ? 'active' : 'unactive'}
              usage={usage[9]}
            />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={10}
              status={availableApartments.includes(10) ? 'active' : 'unactive'}
              usage={usage[10]}
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
              apartments={items.length}
              normalUsage={normalUsage}
              number={7}
              status={availableApartments.includes(7) ? 'active' : 'unactive'}
              usage={usage[7]}
            />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={6}
              status={availableApartments.includes(6) ? 'active' : 'unactive'}
              usage={usage[6]}
            />,
          ],
          [
            <Apartment />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={5}
              status={availableApartments.includes(5) ? 'active' : 'unactive'}
              usage={usage[5]}
            />,
          ],
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={1}
              status={availableApartments.includes(1) ? 'active' : 'unactive'}
              usage={usage[1]}
            />,
            <Apartment />,
          ],
          [
            <Apartment />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={4}
              status={availableApartments.includes(4) ? 'active' : 'unactive'}
              usage={usage[4]}
            />,
          ],
          [
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={2}
              status={availableApartments.includes(2) ? 'active' : 'unactive'}
              usage={usage[2]}
            />,
            <Apartment
              apartments={items.length}
              normalUsage={normalUsage}
              number={3}
              status={availableApartments.includes(3) ? 'active' : 'unactive'}
              usage={usage[3]}
            />,
          ]
        ]}
      />
    </Box>
  );
};

export default BlockA;

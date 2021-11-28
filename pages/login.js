import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../config';
import { setUserCookie } from '../auth/userCookie';
import { mapUserData } from '../auth/useUser';

import Box from '@mui/material/Box';

import styles from '../styles/Login.module.css';

initFirebase();

const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
    }
  }
});

const Login = () => {
  const signInSuccessUrl = "/";

  return (
    <Box className={styles.login}>
      <Box className={styles.content}>
        <h1>New Generation</h1>
        <h2></h2>
        <Box className={styles.button}>
          <StyledFirebaseAuth
            uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
            firebaseAuth={firebase.auth()}
            signInSuccessUrl={signInSuccessUrl}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

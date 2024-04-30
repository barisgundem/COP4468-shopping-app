import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import useAuth from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Back ikonunu ekleyin

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth(); 
  const handleExitApp = async () => {
    await signOut(auth);
  };

  const handleGoBack = () => {
    navigation.navigate('Products'); // ProductListingScreen'e dön
  };

  if (!user) {
    return <Text>Loading...</Text>; 
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleExitApp} style={styles.exitButton}>
        <Text style={styles.exitButtonText}>Exit App</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}> {/* Back düğmesini ekleyin */}
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
      </TouchableOpacity>
      {user && (
        <View style={styles.userInfoContainer}>
          <Text style={styles.userEmail}>
            Email: {user.email}
          </Text>
        </View>
      )}
      <Text style={styles.userType}>User Type: {user?.isAnonymous ? 'Anonymous' : 'Registered'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  exitButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  backButton: { // Back düğmesi stilleri
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  userInfoContainer: {
    marginBottom: 10,
  },
  userEmail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfileScreen;

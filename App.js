import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Auth/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // Verify credentials or perform login logic here
    if (username.trim() !== '' && password.trim() !== '') {
      setUser(username);
    } else {
      alert('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
          >
            {props => <HomeScreen {...props} username={user} onLogout={handleLogout} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {/* Wrap LoginScreen with its props */}
            {props => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

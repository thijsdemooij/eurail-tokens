import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Switch, View } from 'react-native';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './theme.js'; // Import themes

export default function App() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(() =>
    colorScheme === 'light' ? false : true
  );

  const preferredTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: preferredTheme.bgPrimary },
      ]}
    >
      <View
        style={{
          padding: 40,
          backgroundColor: preferredTheme.bgSecondary,
          margin: 24,
          borderRadius: 24,
        }}
      >
        <Text
          style={{
            color: preferredTheme.fgPrimary,
            fontSize: 40,
          }}
        >
          Eurail tokens
        </Text>
        <Text
          style={{ color: preferredTheme.fgSecondary, fontSize: 18 }}
        >
          This is an example that uses Eurail color tokens with a
          light and dark mode
        </Text>
        <View style={{ paddingTop: 24 }}>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{
              false: preferredTheme.bgSecondary,
              true: preferredTheme.bgBrand,
            }}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

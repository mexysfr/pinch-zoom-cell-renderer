import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { List } from './components';
import { StyleSheet} from 'react-native';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider style={styles.container}>
      <List />
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

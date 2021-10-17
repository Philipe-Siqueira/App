import Reactotron,{ networking, openInEditor } from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron
.configure({
  name: 'App',
  host: '10.0.2.2',
})
  .useReactNative({
    asyncStorage : false,
  })
  .use(openInEditor())
  .use(networking())
  .setAsyncStorageHandler!(AsyncStorage)
  .connect()

export default reactotron

Reactotron.onCustomCommand({
  command: 'Clear AsyncStorage',
  handler: () => {
    AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => {
        console.log('AsyncStorage cleared.');
      });
  },

  title: 'Clear AsyncStorage',
  description: 'Clears all data from AsyncStorage.',
});

Reactotron.onCustomCommand({
  command: 'Fake Token',
  handler: () => {
    AsyncStorage.getAllKeys()
      .then(() => AsyncStorage.setItem('@app/token', 'token1234'))
      .then(() => {
        console.log('AsyncStorage new token.');
      });
  },

  title: 'Fake AsyncStorage token',
  description: 'Create fake token in AsyncStorage.',
});

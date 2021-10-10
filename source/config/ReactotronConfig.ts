import Reactotron from 'reactotron-react-native'

const reactotron = Reactotron.configure({
  name: 'App',
  host: '10.0.2.2',
})
  .useReactNative()
  .connect()

export default reactotron

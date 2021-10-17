import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import config from '../config/EnvironmentVariables';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create();

api.defaults.baseURL = config.API_URL;
api.defaults.headers = {
  'Content-type': 'aplication/json',
  Accept: 'aplication/json',
  'User-Agent' : 'App',
}
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@storage/token');
  }
);

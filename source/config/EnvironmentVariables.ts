import { Platform } from 'react-native';
import { API_URL, ANDROID_KEY, IOS_KEY, MAPS_KEY, SECRET } from '@env';


export default { 
  API_URL, 
  PLATFORM_KEY: Platform.select({
    ios: ANDROID_KEY, 
    android: IOS_KEY
  }),
  MAPS_KEY,
  SECRET,
}

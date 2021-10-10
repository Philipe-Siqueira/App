import { PixelRatio, Dimensions } from 'react-native';

export default {
  theme: {
    sizes: {
      xs: Math.round(PixelRatio.getFontScale()) > 1 ? 4 : 8,
      sm: Math.round(PixelRatio.getFontScale()) > 1 ? 6 : 10,
      md: Math.round(PixelRatio.getFontScale()) > 1 ? 8 : 12,
      lg: Math.round(PixelRatio.getFontScale()) > 1 ? 10 : 14,
      xl: Math.round(PixelRatio.getFontScale()) > 1 ? 12 : 16,
      xxl: Math.round(PixelRatio.getFontScale()) > 1 ? 14 : 18,
    },
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    fonts: {
      light: 'Rubik_300Light',
      regular: 'Rubik_400Regular',
      bold: 'Rubik_700Bold',
      black: 'Rubik_900Black',
    },
    light: {
      text: {
        primary: 'rgba(0, 0, 0, 0.77)',
        secundary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
      background: {
        primary: 'rgb(220, 240, 220)',
        secundary: '#fff',
      },
      success: 'rgb(18, 164, 84, 1)',
      successFocus: 'rgb(18, 164, 84, 0.1)',
      error: 'rgba(232, 63, 91, 1)',
      errorFocus: 'rgba(232, 63, 91, 0.1)',
      warn: 'rgba(244, 81, 30, 1)',
      warnFocus: 'rgba(244, 81, 30, 0.1)',
      main: 'rgba(17, 142, 183, 1)',
      mainFocus: 'rgba(17, 142, 183, 0.1)',
    },
    dark: {
      text: {
        primary: '#fff',
        secundary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
      },
      background: {
        primary: '#303030',
        secundary: '#424242',
      },
      success: 'rgb(18, 164, 84, 1)',
      successFocus: 'rgb(18, 164, 84, 0.1)',
      error: 'rgba(232, 63, 91, 1)',
      errorFocus: 'rgba(232, 63, 91, 0.1)',
      warn: 'rgba(244, 81, 30, 1)',
      warnFocus: 'rgba(244, 81, 30, 0.1)',
      main: 'rgba(17, 142, 183, 1)',
      mainFocus: 'rgba(17, 142, 183, 0.1)',
    }
  }
}


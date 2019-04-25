const black = '#000';
const white = '#fff';
const cyan = '#0ad4fa';
const orange = '#ff6e05';
const red = 'red';
const green = 'green';

const bgLight = '#e9ebf1';
const bgDark = '#212531';
const secondaryBgLigth = 'rgba(0, 0, 0, 0.1)';
const secondaryBgDark = 'rgba(255, 255, 255, 0.1)';
const containerBgLight = '#fff';
const containerBgDark = '#000';
const boxShadowLight = '0px 0px 3px 0px rgba(0, 0, 0, 0.1)';
const boxShadowDark = 'rgba(31, 31, 31, 0.1)';
const productShadowLight = '1px 4px 5px 1px rgba(0, 0, 0, 0.1)';
const productShadowDark = '1px 4px 5px 1px rgba(255, 255, 255, 0.1)';

const primaryLight = '#616161';
const primaryDark = '#f8f8f8';

const secondaryLight = black;
const secondaryDark = white;
const greyLight = '#e0e0e0';
const greyDark = '#a3a3a3';

const theme = {
  light: {
    black,
    white,
    cyan,
    orange,
    red,
    green,
    grey: greyLight,
    bg: bgLight,
    secondaryBg: secondaryBgLigth,
    containerBg: containerBgLight,
    boxShadow: boxShadowLight,
    productShadow: productShadowLight,
    primary: primaryLight,
    secondary: secondaryLight
  },
  dark: {
    black,
    white,
    cyan,
    orange,
    red,
    green,
    grey: greyDark,
    bg: bgDark,
    secondaryBg: secondaryBgDark,
    containerBg: containerBgDark,
    boxShadow: boxShadowDark,
    productShadow: productShadowDark,
    primary: primaryDark,
    secondary: secondaryDark
  }
};

export default theme;

const black = '#000';
const white = '#fff';
const cyan = '#0ad4fa';
const orange = '#ff6e05';
const red = 'red';
const green = 'green';

const bgLight = '#e9ebf1';
const bgDark = '#212531';
const boxShadowLight = '0px 0px 3px 0px rgba(0, 0, 0, 0.1)';
const boxShadowDark = 'rgba(31, 31, 31, 0.1)';

const primaryDark = '#f8f8f8';
const primaryLight = '#616161';
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
    boxShadow: boxShadowLight,
    primary: primaryLight
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
    boxShadow: boxShadowDark,
    primary: primaryDark
  }
};

export default theme;

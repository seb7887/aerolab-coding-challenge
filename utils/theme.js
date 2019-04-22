const black = '#000';
const white = '#fff';
const cyan = '#0ad4fa';
const orange = '#ff6e05';

const bgLight = '#e9ebf1';
const bgDark = '#212531';
const boxShadowLight = '0px 0px 2px 0px rgba(0, 0, 0, 0.1)';
const boxShadowDark = 'rgba(31, 31, 31, 0.1)';
const greyLight = '#e0e0e0';
const greyDark = '#a3a3a3';

const theme = {
  light: {
    black,
    white,
    cyan,
    orange,
    grey: greyLight,
    bg: bgLight,
    boxShadow: boxShadowLight
  },
  dark: {
    black,
    white,
    cyan,
    orange,
    grey: greyDark,
    bg: bgDark,
    boxShadow: boxShadowDark
  }
};

export default theme;

import { grey, red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const darkGrey = grey['900'];
const lightGrey = grey['600'];
const lightRed = red['400'];
const colorBackground = grey['50'];

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: darkGrey,
    },
    secondary: {
      main: lightGrey,
    },
    error: {
      main: lightRed,
    },
    background: {
      default: colorBackground,
    },
  },
});

export default theme;

import { grey, red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const darkGrey = grey['900'];
const lightGrey = grey['600'];
const lightRed = red['400'];
const colorBackground = grey['50'];

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
  typography: {
    h4: { fontWeight: 'bold', fontSize: '20px', textTransform: 'uppercase' },
    h6: {
      fontSize: '15px',
    },
  },
});

export default theme;

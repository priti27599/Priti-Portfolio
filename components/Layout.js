import Footer from './Footer';
import Navbar from './Navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useContext } from 'react';
import { Store } from '../utils/Store';

const Layout = ({ children }) => {
  // const theme = createMuiTheme({
  //   palette: {
  //     type: darkMode ? 'dark' : 'light',
  //     primary: {
  //       main: '#f0c000',
  //     },
  //     secondary: {
  //       main: '#208080',
  //     },
  //   },
  // });
  return (
    <div className="content">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

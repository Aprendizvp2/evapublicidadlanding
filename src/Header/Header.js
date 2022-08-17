import React from 'react';
import './Header.css';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Hidden, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import TransitionAppBar from '../components/TransitionAppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import evaestereologonegro from '../img/evaestereologonegro.png';
import evaestereologoazul from '../img/evaestereologoazul.png';
import Menu from '../Menu/Menu';

const Root = styled('div')(({ theme }) => ({
  '& .header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  '& .menu': {
    display: 'flex',
    flexDirection: 'row',
  },
  '& .logo': {
    width: 70,
    height: 70,
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
  const { window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const toggleDrawerMenu = () => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <div>
      <Root>
        <Hidden mdDown>
          <CssBaseline />
          <ElevationScroll {...props}>
            {trigger ? (
              <TransitionAppBar>
                <AppBar>
                  <Toolbar>
                    <div className="header">
                      <a href="/">
                        <img
                          className="logo"
                          src={evaestereologonegro}
                          alt="logo"
                        />
                      </a>
                      <div>
                        <a className="buttons-after" href="#Home" variant="h6">
                          Home
                        </a>
                        <a className="buttons-after" href="#Services">
                          Servicios
                        </a>
                        <a className="buttons-after" href="#AboutUs">
                          About Us
                        </a>
                        <a className="contactus-button-after" href='#ContactUs'>Contact Us</a>
                      </div>
                    </div>
                  </Toolbar>
                </AppBar>
              </TransitionAppBar>
            ) : (
              <TransitionAppBar>
                <AppBar position="absolute">
                  <Toolbar>
                    <div className="header">
                      <a href="/">
                        <img
                          className="logo"
                          src={evaestereologoazul}
                          alt="logo"
                        />
                      </a>
                      <div>
                        <a className="buttons-before" href="#Home" variant="h6">
                          Home
                        </a>
                        <a className="buttons-before" href="#Services">
                          Servicios
                        </a>
                        <a className="buttons-before" href="#AboutUs">
                          About Us
                        </a>
                        <a className="contactus-button-before" href='#ContactUs'>Contact Us</a>
                      </div>
                    </div>
                  </Toolbar>
                </AppBar>
              </TransitionAppBar>
            )}
          </ElevationScroll>
        </Hidden>
        <Hidden mdUp>
          <ElevationScroll {...props}>
            {trigger ? (
              <TransitionAppBar>
                <AppBar>
                  <Toolbar>
                    <div className="header">
                    <a href="/">
                          <img
                            className="logo"
                            src={evaestereologonegro}
                            alt="logo"
                          />
                        </a>
                      <div className="menu">
                        <a className="contactus-button-after" href='#ContactUs'>Contact Us</a>
                        <Button className="button-menu-after">
                        <MenuIcon onClick={toggleDrawerMenu} />
                      </Button>
                      <Menu
                        open={openMenuDrawer}
                        toggleDrawer={toggleDrawerMenu}
                      />
                      </div>
                    </div>
                  </Toolbar>
                </AppBar>
              </TransitionAppBar>
            ) : (
              <TransitionAppBar>
                <AppBar position="absolute">
                  <Toolbar>
                    <div className="header">
                      <a href="/">
                        <img
                          className="logo"
                          src={evaestereologoazul}
                          alt="logo"
                        />
                      </a>
                      <div className="menu">
                        <a className="contactus-button-before" href='#ContactUs'>Contact Us</a>
                        <Button className="button-menu-before">
                          <MenuIcon onClick={toggleDrawerMenu} />
                        </Button>
                        <Menu
                          open={openMenuDrawer}
                          toggleDrawer={toggleDrawerMenu}
                        />
                      </div>
                    </div>
                  </Toolbar>
                </AppBar>
              </TransitionAppBar>
            )}
          </ElevationScroll>
        </Hidden>
      </Root>
    </div>
  );
}

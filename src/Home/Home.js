import React from 'react';
import './Home.css';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import plataformamovil from '../img/plataformamovil.png';
import AOS from 'aos';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '& .title': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 55,
    paddingTop: 40,
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
      paddingTop: 50,
    },
  },
  '& .mobilePlatform': {
    width: '45%',
    paddingTop: 50,
    [theme.breakpoints.down('md')]: {
      width: '50%',
      paddingTop: 10,
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      paddingTop: 10,
    },
  },
  '& .info': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 90,
    width: '50%',
  },
}));

function Home() {
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 2000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });

  return (
    <div id="Home" className="background-home">
      <Root>
        <div className="info">
          <Typography className="title" data-aos="fade-right">
            Bienvenido a EvaPuclicidad
          </Typography>
        </div>
        <div className="info">
          <img
            data-aos="fade-left"
            className="mobilePlatform"
            src={plataformamovil}
            alt="imagenplataformamovil"
          />
        </div>
      </Root>
    </div>
  );
}

export default Home;

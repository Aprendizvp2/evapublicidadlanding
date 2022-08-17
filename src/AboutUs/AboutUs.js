import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import plataforma from '../img/plataforma.png';
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
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
    },
  },
  '& .platform': {
    width: '90%',
    paddingTop: 50,
    [theme.breakpoints.down('md')]: {
      width: '50%',
      paddingTop: 10,
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      paddingTop: 10,
    },
  },
  '& .info': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '50%',
    padding: 100,
    [theme.breakpoints.down('md')]: {
      padding: 10,
    },
  },
  '& .text': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'justify',
  },
}));

function AboutUs() {
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
    <div id="AboutUs">
      <Root>
        <div className="info">
          <Typography className="title" data-aos="fade-right">
            Sobre nosotros
          </Typography>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
        <div className="info">
          <img
            data-aos="fade-left"
            className="platform"
            src={plataforma}
            alt="imagenplataforma"
          />
        </div>
      </Root>
    </div>
  );
}

export default AboutUs;

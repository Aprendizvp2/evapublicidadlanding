import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Typography, TextField } from '@mui/material';
import AOS from 'aos';
import contactusimg from '../img/contactusimg.png';

const Root = styled('div')(({ theme }) => ({
  '& .form': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 120,
    paddingBottom: 50,
  },
  '& .title': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 55,
    paddingTop: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      paddingTop: 50,
    },
  },
  '& .formContent': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#29A4CD',
    boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.2)',
    margin: 30,
    padding: 20,
    width: '50%',
    borderRadius: 30,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '70%',
    },
  },
  '& .fields': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  '& .img': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 20,
      width: '100%',
    },
  },
  '& .sendButton': {
    color: '#29A4CD',
    backgroundColor: 'white',
    fontSize: 15,
    width: '50%',
    borderRadius: 90,
    margin: 20,
    padding: 10,
    '&:hover': {
      backgroundColor: '#29A4CD',
      color: 'white',
      borderColor: 'white',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 10,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 9,
    },
  },
}));

const TextFields = styled(TextField)({
  width: '100%',
  padding: 10,
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
  },
});

function ContactUs() {
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
    <div id="ContactUs">
      <Root>
        <div className="form">
          <Typography
            className="title"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Contactanos
          </Typography>
          <div
            className="formContent"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="fields">
              <TextFields
                data-aos="fade-right"
                data-aos-duration="7000"
                placeholder="Nombre"
              />
              <TextFields
                data-aos="fade-left"
                data-aos-duration="8000"
                placeholder="Telefono"
              />
              <TextFields
                data-aos="fade-right"
                data-aos-duration="9000"
                placeholder="Email"
              />
              <Button className="sendButton" variant="outlined">
                Enviar
              </Button>
            </div>
            <div className="fields">
              <img
                className='img'
                data-aos="fade-up"
                data-aos-duration="4000"
                src={contactusimg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </Root>
    </div>
  );
}

export default ContactUs;

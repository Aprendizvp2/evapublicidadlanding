import { styled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import evadomicilioslogoblanco from '../img/evadomicilioslogoblanco.png';
import evaestereologoblanco from '../img/evaestereologoblanco.png';
import evatvlogoblanco from '../img/evatvlogoblanco.png';
import AOS from 'aos';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: 100,
  '& .title': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
    fontSize: 60,
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
      paddingTop: 10,
    },
  },
  '& .services': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 90,
    paddingBottom: 90,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
  '& .serviceType': {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#29A4CD',
    borderRadius: 50,
    padding: 40,
    margin: 10,
    width: '29%',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
  },
  '& .logo': {
    width: '60%',
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      width: '75%',
      margin: 20,
    },
  },
  '& .serviceNameButton': {
    color: '#29A4CD',
    backgroundColor: 'white',
    fontSize: 20,
    width: '100%',
    borderRadius: 90,
    margin: 20,
    padding: 15,
    '&:hover': {
      backgroundColor: '#29A4CD',
      color: 'white',
      borderColor: 'white',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      fontSize: 17,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 15,
    },
  },
}));

function Licences() {
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
    <div id="Services">
      <Root>
        <Typography
          className="title"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          Escoge tu servicio
        </Typography>
        <div className="services">
          <div
            className="serviceType"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img className="logo" src={evadomicilioslogoblanco} alt="logo" />
            <Button className="serviceNameButton" variant="outlined">
              EvaDomicilios
            </Button>
          </div>
          <div
            className="serviceType"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img className="logo" src={evaestereologoblanco} alt="logo" />
            <Button className="serviceNameButton" variant="outlined">
              EvaEstereo
            </Button>
          </div>
          <div
            className="serviceType"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img className="logo" src={evatvlogoblanco} alt="logo" />
            <Button className="serviceNameButton" variant="outlined">
              EvaTV
            </Button>
          </div>
        </div>
      </Root>
    </div>
  );
}

export default Licences;

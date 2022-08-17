import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import evaestereologoblanco from '../img/evaestereologoblanco.png';
import facebookicono from '../img/facebookicono.png';
import whatsappicono from '../img/whatsappicono.png';
import instagramicono from '../img/instagramicono.png';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: '#29A4CD',
  width: '100%',
  '& .content': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
  '& .email': {
    margin: 20,
  },
  '& .logoPosition': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  '& .logo': {
    width: '13%',
    [theme.breakpoints.down('sm')]: {
      width: '25%',
    },
  },
  '& .brandName': {
    fontSize: 23,
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },
  },
  '& .socialNetworks': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  '& .apps': {
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      width: '20%',
    },
  },
}));

function Footer() {
  return (
    <Root>
      <div className="content">
        <div className="email">
          <Typography className="brandName" variant="h6">
            evapublicidad@gmail.com
          </Typography>
        </div>
        <div className="logoPosition">
          <img className="logo" src={evaestereologoblanco} alt="logo" />
          <Typography className="brandName" variant="h5">
            Eva Publicidad
          </Typography>
        </div>
        <div className="socialNetworks">
          <img className="apps" src={facebookicono} alt="icon" />
          <img className="apps" src={whatsappicono} alt="icon" />
          <img className="apps" src={instagramicono} alt="icon" />
        </div>
      </div>
    </Root>
  );
}

export default Footer;

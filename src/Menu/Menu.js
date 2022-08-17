import './Menu.css';
import { makeStyles } from '@mui/styles';
import { Button, Drawer, List, Typography } from '@mui/material';
import evaestereologoazul from '../img/evaestereologoazul.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles({
  drawer: {
    width: 300,
  },
  logoAndBackButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  logoAndBrandName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: '20%',
  },
  brandName: {
    color: '#29A4CD',
    fontSize: 20,
  },
  arrowbackicon: {
    padding: 20,
    color: '#29A4CD',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20
  },
});

function Menu({ open, toggleDrawer }) {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <div className={classes.drawer}>
        <div className={classes.logoAndBackButton}>
          <div className={classes.logoAndBrandName}>
            <img className={classes.logo} src={evaestereologoazul} alt="logo" />
            <Typography className={classes.brandName} variant="h5">
              Eva Publicidad
            </Typography>
          </div>
          <Button className={classes.arrowbackicon} onClick={toggleDrawer}>
            <ArrowBackIcon />
          </Button>
        </div>
        <List onClick={toggleDrawer} className={classes.menu}>
          <a className="buttons-menu" href="#Home" variant="h6">
            Home
          </a>
          <a className="buttons-menu" href="#Services" variant="h6">
            Servicios
          </a>
          <a className="buttons-menu" href="#AboutUs" variant="h6">
            AboutUs
          </a>
        </List>
      </div>
    </Drawer>
  );
}

export default Menu;

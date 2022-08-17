import { cloneElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function TransitionAppBar(props) {
  const {
    threshold,
    bgColorBefore,
    bgColorAfter,
    textColorBefore,
    textColorAfter,
    fadeIn,
    fadeOut,
    paddingBefore,
    paddingAfter,
    children,
    fontSizeBefore,
    fontSizeAfter,
    buttonBefore,
    buttonAfter,
    imageBefore,
    ...other
  } = {
    threshold: 0,
    bgColorBefore: 'transparent',
    bgColorAfter: 'white',
    textColorBefore: '#29A4CD',
    textColorAfter: 'white',
    fadeIn: '0.3s ease-in',
    fadeOut: '0.3s ease-out',
    paddingBefore: '8px',
    paddingAfter: '0px',
    fontSizeBefore: '40px',
    fontSizeAfter: '7px',
    ...props,
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined,
  });

  return cloneElement(children, {
    style: {
      boxShadow: trigger ? '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' : 'none',
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut,
      fontSizeAfter: trigger ? fontSizeAfter : fontSizeBefore,
    },
    ...other,
  });
}

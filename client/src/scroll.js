import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  toTop: {
      zIndex: 2,
      position: 'fixed',
      bottom: '2vh',
      backgroundColor: '#DCDCDC',
      color: 'black',
      "&:hover, &.Mui-focusVisible": {
          transition: '0.3s',
          color: '#f57c00',
          backgroundColor: '#e0e0e0'
      },
      [theme.breakpoints.up('xs')]: {
          right: '2%',
          backgroundColor: 'rgb(220,220,220,0.7)',
      },
      [theme.breakpoints.up('lg')]: {
          right: '3.5%',
      },
  }
})
)

const Scroll = ({
  showBelow,
}) => {

  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
          if (!show) setShow(true)
      } else {
          if (show) setShow(false)
      }
  }

  const handleClick = () => {
      window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
      if (showBelow) {
          window.addEventListener(`scroll`, handleScroll)
          return () => window.removeEventListener(`scroll`, handleScroll)
      }
  })

  return (
      <div>
          {show &&
              <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                  <ExpandLessIcon />
              </IconButton>
          }
      </div>
  )
}
export default Scroll
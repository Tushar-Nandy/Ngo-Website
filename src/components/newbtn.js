import React from 'react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import './Styles/newbtn.css'

const Newbtn = (props) => {
  console.log(props)
  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };
  
  return (
    <div  className={`newbtn-container ${props.rootClassName} `}>
      <button onClick={()=>handleRedirect(props.onClick)} type={props.buttonType} className="newbtn-button button">
        {props.button1}
      </button>
    </div>
  )
}

Newbtn.defaultProps = {
  rootClassName: '',
  buttonType: 'button',
  button1: 'About',
}

Newbtn.propTypes = {
  rootClassName: PropTypes.string,
  buttonType: PropTypes.string,
  button1: PropTypes.string,
}

export default Newbtn

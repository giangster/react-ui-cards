import React from 'react';

import './styles.scss';

class AvatarCardButton extends React.Component{
  render(){
    let{
      buttonText,
      buttonColor,
      buttonLikeCallback
    } = this.props;
    return(
      <div className='avatar-button'>
        <button type='button'
                onClick={buttonLikeCallback}
                style={{backgroundColor: `${buttonColor}`}}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default AvatarCardButton;

import React from 'react';

import Card from '../Card';
import AvatarCardAvatar from './AvatarCardAvatar';
import AvatarCardButton from './AvatarCardButton';
import AvatarCardUName from './AvatarCardUName';

import './styles.scss';

class AvatarCard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let {
      placeholder,
      background,
      buttonText,
      buttonColor,
      buttonLikeCallback,
      userName
    } = this.props;

    return(
      <Card
        className='avatar-card'
        style={{ backgroundImage: `url(${ background })` }}
      >
        <AvatarCardAvatar
          placeholder={ placeholder }
        />
        <AvatarCardButton
          buttonText={ buttonText }
          buttonColor={ buttonColor }
          buttonLikeCallback={ buttonLikeCallback }
        />
        <AvatarCardUName
          userName={ userName }
        />
      </Card>
    );
  }
}

export default AvatarCard;

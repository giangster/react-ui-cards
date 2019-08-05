import React from 'react';

import './styles.scss';

class AvatarCardAvatar extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    let {
      placeholder
    } = this.props;

    return (
      <div className='avatar'
           style={{ backgroundImage: `url(${ placeholder })` }}
      />
    );
  }
}

export default AvatarCardAvatar;

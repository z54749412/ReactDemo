import React from 'react';

class OtherComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {console.log('OtherComponent')}
        OtherComponent
      </div>
    );
  }
}

export default OtherComponent;
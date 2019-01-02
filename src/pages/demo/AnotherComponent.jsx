import React from 'react';

class AnotherComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {console.log('AnotherComponent')}
        AnotherComponent
      </div>
    );
  }
}

export default AnotherComponent;
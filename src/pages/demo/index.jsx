import React, { lazy, Suspense } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));
// const AnotherComponent = lazy(() => import('./AnotherComponent'));
// import OtherComponent from './OtherComponent';
import AnotherComponent from './AnotherComponent';
// import s from './index.scss';

class IndexPage extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {console.log('1111111-' + (new Date()).getTime())}
        <section>
          <OtherComponent />
          <AnotherComponent />
          {console.log('2222222-' + (new Date()).getTime())}
        </section>
      </Suspense>
    );
  }
}

export default IndexPage;
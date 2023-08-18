import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './counter.jsx';

const App = () => {
  return (
    <div>
      <SecondsCounter seconds={0} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));


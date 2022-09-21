import React from 'react';
import Paragraph from './Paragraph';

const DemoOutput = (props) => {
  console.log('[DemoOutput] executing!');

  return (
     <Paragraph>{props.showMsg ? 'here is a message!' : ''}</Paragraph>
  );
}

export default React.memo(DemoOutput);
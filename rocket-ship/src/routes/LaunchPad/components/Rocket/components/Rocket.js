import React, { useState, Component, useEffect } from 'react';
import RocketCore from './RocketCore';


const checkForEquality = (prevProps, NextProps)=>{
  return prevProps!==NextProps;
}

export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());
  
 
  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}

export const MemoizedFunctionalRocket = React.memo(FunctionalRocket,checkForEquality);



export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };

  }

  shouldComponentUpdate(nextProps) {
    return this.props===nextProps;
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}

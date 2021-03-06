import React, { useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';
import { MemoizedFunctionalRocket } from './Rocket/components/Rocket';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);

  return (
    <div className="launchpad">
      <ClassRocket />
      {/* <MemoizedFunctionalRocket /> */}
      {/* <FunctionalRocket /> */}
    </div>
  );
}

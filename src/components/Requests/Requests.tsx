import React from 'react';
import styles from './Requests.module.css'
import SplitPane from 'react-split-pane';
import { Map } from '../Map';
import { RequestTable } from '../RequestTable';
import { Route } from '../../types';

const Requests: React.FC = () => {
  const data: Route = {
    pointA: [55.753886, 37.622919],
    pointB: [55.752888, 37.622915],
  }

  return (
    <div className={styles.requests}>
      <SplitPane
        split="vertical"
        minSize={300}
        maxSize={1100}
        allowResize={true}
        resizerClassName={styles.splitter}
        defaultSize={"50%"}
      >
        <RequestTable />
        <Map {...data}/>
      </SplitPane>
    </div>
  );
}

export { Requests };
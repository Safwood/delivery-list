import React from 'react';
import styles from './Requests.module.css'
import SplitPane from 'react-split-pane';
import { Map } from '../Map';
import { RequestTable } from '../RequestTable';

const Requests: React.FC = () => {

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
        <Map/>
      </SplitPane>
    </div>
  );
}

export { Requests };
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Feedback.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Feedback {

  render() {
    return (
      <div className="Feedback">
        <div className="Feedback-container">
          <a className="Feedback-link" href="mailto:dev@henriksen.is">Contact me</a>
        </div>
      </div>
    );
  }

}

export default Feedback;

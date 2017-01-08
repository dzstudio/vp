import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

import style from './style.less';
import img from '!file!./assets/me.jpg';

class SiteDesc extends React.PureComponent {
  constructor(props) {
    super(props);
    let me = this;
  }

  render() {
    const me = this;

    return <div className={style.container}>
      <QueueAnim
        delay={500}
        type={'bottom'}
        ease={['easeOutQuart', 'easeInOutQuart']}
        className={style.container}>

        <div key="a1" className={style.subBoxWidth}>
          <h3>
            Did you ever try to figure out the mood behind the colors ?
          </h3>
        </div>
        <div key="a2" className={style.subBoxWidth}>
          <h3>
            I Did.
          </h3>
        </div>
        <div key="a3" className={style.subBoxWidth}>
          <h3>
            ColorPK.com is designed sincerely to keep track of your mood by capturing the colors.
          </h3>
        </div>
        <div key="a4" className={style.subBoxWidth}>
          <h3>
            Feel free to fiddle out whatever palette in your mind, and share with others.
          </h3>
        </div>
        <div key="a5" className={style.subBoxWidth}>
          <h3>
            It is a SOCIAL PLATFORM after all :)
          </h3>
        </div>

        <div key="a6" className={style.subBoxWidth}>
          <h3>
            And, more functions will be available.
          </h3>
        </div>

        <div key="b1" className={style.subBoxWidth}>
          <a href="http://www.zjgallo.com" target="_blank">
            <img src={img} alt=""/>
          </a>
        </div>
        <div key="b2" className={style.subBoxWidth}>
          <h3>
            I'm Zijian Guo, a software engineer in New York City.
          </h3>
        </div>

      </QueueAnim>
    </div>
  }
}

export default SiteDesc;
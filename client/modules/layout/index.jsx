import React, { PropTypes } from 'react';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import { Affix } from 'antd';
import EventListener, {withOptions} from 'react-event-listener';

//import '!style!css!font-awesome/css/font-awesome.min.css';

import styles from './style.less';
import img from '!file!./assets/gradient.jpg';
import HeaderCenter from './components/HeaderCenter/index.jsx';

const Layout = ({children, user, dispatch}) => {
  let isloading = false;

  const logout = (v) => {
    const ac = createAction('user/logoff');
    dispatch(ac());
  };

  const resizeHandler = (ev) => {

  };

  const scrollHandler = (ev) => {
    if(isloading){
      return false;
    }

    let elem = ev.target.scrollingElement;
    let scrollProgress = elem.scrollTop / (elem.scrollHeight - elem.clientHeight);
    if(scrollProgress > 0.96){
      isloading = true;

      let actcr = createAction('color/loadMore');
      dispatch(actcr());

      setTimeout(function(){
        isloading = false;
      }, 1800);
    }

  };


  var result = <div className={styles.layoutBox} >
    <EventListener
      target="window"
      onResize={resizeHandler}
      onScroll={scrollHandler}
      />

    <Affix>
      <HeaderCenter logout={logout} userInfo={user}/>
    </Affix>


    <div className={styles.main} style={{background: `#f5f6f7 url(${img}) repeat-x 0 0`}} >
      {children}
    </div>
  </div>;
  return result;
};


Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

function mapStateToProps({user}){
  return {
    user
  }
}

export default connect(mapStateToProps)(Layout);

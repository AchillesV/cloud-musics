import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import styled from 'styled-components';


const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();
  const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;
  const { pullUp, pullDown, onScroll } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      mouseWheel: true,
      click: click,
      bounceTop: {
        top: bounceTop,
        bottom: bounceBottom,
      }
    });

    setBScroll(scroll);
    return () => {
      setBScroll(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**给实例绑定scroll事件 */
  useEffect(() => {
    if(!bScroll && !onScroll) return;
    bScroll.on('srcoll', () => {
      onScroll && onScroll()
    })
    return () => {
      bScroll.off('scroll');
    }
  },[onScroll, bScroll])

  /**上拉到底 */
  useEffect(() => {
    if(!bScroll && !pullUp) return;
    bScroll.on('scrollEnd', () => {
      if(bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp && pullUp()
      }
    });
    return () => {
      bScroll.off('scrollEnd')
    }
  },[pullUp, bScroll])

  /**下拉刷新 */
  useEffect(() => {
    if(!bScroll && !pullDown) return;
    bScroll.on('touchEnd', (pos) => {
      if(pos.y > 50) {
        pullDown && pullDown()
      }
    })
    return () => {
      bScroll.off('touchEnd')
    }
  },[pullDown, bScroll])

  useImperativeHandle(
    ref,
    () => ({
      refresh() {
        if(bScroll) {
          bScroll.fresh();
          bScroll.scrollTo(0,0);
        }
      },
      getBScroll() {
        if(bScroll) {
          return bScroll;
        }
      }
    })
  )

  useEffect(() => {
    if(refresh && bScroll) {
      bScroll.refresh()
    }
  })

  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
    </ScrollContainer>
  )

})

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  click: true,  // 是否支持点击
  refresh: PropTypes.bool, // 是否刷新
  onScroll: PropTypes.func, // 滑动触发的回调函数
  pullUp: PropTypes.func, // 上拉加载逻辑
  pullDown: PropTypes.func, // 下拉加载逻辑
  pullUpLoading: PropTypes.bool, // 是否显示上拉动画
  pullDownLoading: PropTypes.bool, // 是否显示上拉动画
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool, // 是否支持向下吸顶
}

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: false,
  bounceDown: false,
}

export default Scroll;


const ScrollContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`
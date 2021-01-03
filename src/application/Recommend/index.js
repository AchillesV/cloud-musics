import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Slider from '../../components/slider';
import RecommendList from '../../components/RecommendList';
import Scroll from '../../components/Scroll';
import * as actionTypes from './store/actionCreators';
import Loading from '../../baseUI/loading';


function Recommend(props) {
  const { bannerList, recommendList, enterLoading } = props;
  const { getBannerDataDispatch, getRecommendDataDispatch } = props;
  useEffect(() => {
    !bannerList.size && getBannerDataDispatch();
    !recommendList.size && getRecommendDataDispatch();
  }, [])
/* 
  const bannerList = [1,2,3,4].map(() => {
    return (
      {imgUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"}
    )
  })

  const recommendList = [1,2,3,4,5,6,7,8,9,10,11].map((item,index) => {
    return {
      id: index + 1,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: parseInt(Math.random()*(10000000-1000000+1)+1000000,10),
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  }) */
  
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
      { enterLoading ? <Loading /> : null}
    </Content>
  )
}

const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
`

const mapStateToProps = (state) => ({
  bannerList: state.getIn([ 'recommend', 'bannerList' ]),
  recommendList: state.getIn([ 'recommend', 'recommendList' ]),
  enterLoading: state.getIn([ 'recommend', 'enterLoading' ])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
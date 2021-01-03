import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then((data) => {
      dispatch(changeBannerList(data.banners))
    }).catch(() => { console.log('轮播图数据错误！') })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then((data) => {
      dispatch(changeRecommendList(data.result))
      setTimeout(() => {
        dispatch(changeEnterLoading(false))
      }, 2000); 
    }).catch(() => { console.log('推荐数据错误！') })
  }
}
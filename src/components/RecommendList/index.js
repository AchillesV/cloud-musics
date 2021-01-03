import React from 'react';
import { LazyLoad } from 'react-lazyload';
import { getCount } from './../../utils/tools';
import imageConst from '../../consts/imageConst';
import {
  ListWrapper,
  List,
  ListItem
} from './style';

function RecommendList (props) {
  console.log(props.recommendList, imageConst)
  return (
    <ListWrapper>
      <h1 className="title"> 歌单</h1>
      <List>
        {
          props.recommendList.map((item,index) => {
            return (
              <ListItem key={item.id}>
                <div className="img_wrapper">
                  <div className="decorate" />
                    <img src={`${item.picUrl}?param=300*300`} width='100%' height='100%' alt='music' />
                  <div className="play_count">
                    <i className="iconfont play" style={{ fontSize: 12 }}>▶</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                </div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}

export default RecommendList;
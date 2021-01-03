import React, { useState, useEffect, useRef, memo } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Scroll from '../../components/Scroll';
import style from '../../assets/global-style';

function Horizen(props) {
  const { list, oldVal, title, handleClick } = props;
  return (
    <Scroll direction='horizental'>
      <div>
        <List>
          {
            list.map((item) => {
              return (
                <ListItem
                  key={item.key}
                  className={`${ oldVal === item.key ? 'selected' : '' }`}
                  onClick={() => handleClick(item.key)}
                >
                  {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>

    </Scroll>
  )
}

Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
}

Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
}

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: gray;
    font-size: ${style['font-size-m']};
    vertical-align: middle;
  }
`
const ListItem = styled.div`
  flex: 0 0 auto;
  font-size: ${style['font-size-m']};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    border: 1px solid ${style['theme-color']};
    color: ${style['theme-color']};
    opacity: 0.8;

  }
`


export default Horizen;


import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1597569178721'); /* IE9 */
  src: url('iconfont.eot?t=1597569178721#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1597569178721') format('woff'),
  url('iconfont.ttf?t=1597569178721') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1597569178721#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .icon-aixin:before {
  content: "\e8ab";
  }

  .icon-bianji:before {
  content: "\e8ac";
  }

  .icon-bangzhu:before {
  content: "\e8ad";
  }

  .icon-chuangzuo:before {
  content: "\e8ae";
  }

  .icon-chenggong:before {
  content: "\e8af";
  }

  .icon-dianzan:before {
  content: "\e8b0";
  }

  .icon-gengduo:before {
  content: "\e8b1";
  }

  .icon-fanbei:before {
  content: "\e8b2";
  }

  .icon-faxian:before {
  content: "\e8b3";
  }

  .icon-fenxiang:before {
  content: "\e8b4";
  }

  .icon-huatifuhao:before {
  content: "\e8b5";
  }

  .icon-jianshao:before {
  content: "\e8b6";
  }

  .icon-huati:before {
  content: "\e8b7";
  }

  .icon-guanzhu:before {
  content: "\e8b8";
  }

  .icon-mima:before {
  content: "\e8b9";
  }

  .icon-nan:before {
  content: "\e8ba";
  }

  .icon-nv:before {
  content: "\e8bb";
  }

  .icon-saoyisao:before {
  content: "\e8bc";
  }

  .icon-pinglun:before {
  content: "\e8bd";
  }

  .icon-shaixuan:before {
  content: "\e8be";
  }

  .icon-shanchu:before {
  content: "\e8bf";
  }

  .icon-shezhi:before {
  content: "\e8c0";
  }

  .icon-shibai:before {
  content: "\e8c1";
  }

  .icon-shengyin:before {
  content: "\e8c2";
  }

  .icon-shoucang:before {
  content: "\e8c3";
  }

  .icon-sousuo:before {
  content: "\e8c4";
  }

  .icon-tishi:before {
  content: "\e8c5";
  }

  .icon-tupian:before {
  content: "\e8c6";
  }

  .icon-wode:before {
  content: "\e8c7";
  }

  .icon-wodeguanzhu:before {
  content: "\e8c8";
  }

  .icon-xiangkan:before {
  content: "\e8c9";
  }

  .icon-xiaoxi:before {
  content: "\e8ca";
  }

  .icon-xiaoxizhongxin:before {
  content: "\e8cb";
  }

  .icon-yanjing:before {
  content: "\e8cc";
  }

  .icon-yanchu:before {
  content: "\e8cd";
  }

  .icon-zengjia:before {
  content: "\e8ce";
  }


`


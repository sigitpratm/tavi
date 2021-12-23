
import '../scss/app.scss';
// import '../assets/less/light-theme.less';

/* Demo JS */
import './demo.js';

// import "../../node_modules/aos/dist/aos.css";

import Utils from './utils';
import AntdSupport from './modules/AntdSupport';
import PopMotionControll from './modules/PopMotionControll';
import FetchController from './modules/FetchController';
import AOSController from './modules/AOSController'
import EmkalabAnimation from './modules/EmkalabAnimation';

window.Emkalab = {
  React: import('react'),
  AOS: AOSController,
  Utils: Utils,
  Animation:EmkalabAnimation,
  PopMotion: PopMotionControll,
  antd: AntdSupport,
  _fetch:{
    baseURL :"https://localhost:8000",
    render:FetchController,
  }
}

new Emkalab.Animation({}).AppLoading()
// document.getElementById('btn-header-profiles').addEventListener('click', (e)=> {
//   new Emkalab.antd().message('success',e.target.getAttribute('emk-message'))
// })



window.addEventListener('load', ()=> {
  new Emkalab.antd({}).Skeleton('#emk-skeleton-list')
  new Emkalab.antd({}).Skeleton('#emk-skeleton-id')
  new Emkalab.antd({}).Skeleton('#emk-skeleton-image')
  // new Emkalab.PopMotion({})
  new Emkalab.AOS()
})


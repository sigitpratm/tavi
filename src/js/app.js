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
  Animation: EmkalabAnimation,
  PopMotion: PopMotionControll,
  antd: AntdSupport,
  _fetch: {
    baseURL: "https://localhost:8000",
    render: FetchController,
  }
}

new Emkalab.Animation({}).AppLoading()
// document.getElementById('btn-header-profiles').addEventListener('click', (e)=> {
//   new Emkalab.antd().message('success',e.target.getAttribute('emk-message'))
// })


window.addEventListener('load', () => {
  new Emkalab.antd({}).Skeleton('#emk-skeleton-list')
  new Emkalab.antd({}).Skeleton('#emk-skeleton-id')
  new Emkalab.antd({}).Skeleton('#emk-skeleton-image')
  // new Emkalab.PopMotion({})
  new Emkalab.AOS()
})


/**
 * Animated Hover Infografis
 */
let infL = document.getElementById('inf-left')
let infR = document.getElementById('inf-right')
let infografis = document.getElementById('infografis')
let retinol = document.getElementById('retinol')
let retinolBlur = document.getElementById('retinol-blur')
let lineL = document.getElementById('line-left')
let bakuchiol = document.getElementById('bakuchiol')
let bakuchiolSm = document.getElementById('bakuchiol-sm')
let bakuchiolBlur = document.getElementById('bakuchiol-blur')
let lineR = document.getElementById('line-right')
let textOut = document.getElementById('text-outside')
let halfTop = document.getElementById('half-top-tavi')
let halfBot = document.getElementById('half-bot-tavi')


// event on mouse hover
infografis.addEventListener("mouseover", function () {
  halfTop.style.transform = "translateY(-20px)";
  halfBot.style.transform = "translateY(20px)";

  retinol.style.transform = "translate(-60%, 90%)";
  retinolBlur.style.transform = "translate(-150%, -150%)";
  lineR.classList.remove("opacity-0")
  lineR.classList.add("opacity-100")

  bakuchiol.style.transform = "translate(90%, -30%)";
  bakuchiolBlur.style.transform = "translate(350%, 150%)";
  bakuchiolSm.classList.add("opacity-0")

  lineL.classList.remove("opacity-0")
  lineL.classList.add("opacity-100")

  textOut.classList.add("opacity-100")

  infL.style.backgroundColor = "transparent"
  infR.style.backgroundColor = "transparent"
})


// event on mouse leave
infografis.addEventListener("mouseleave", function () {
  halfTop.style.transform = "translateY(0px)";
  halfBot.style.transform = "translateY(0px)";

  retinolBlur.style.transform = "translateY(0px)";
  retinol.style.transform = "translatex(0%)";
  lineR.classList.add("opacity-0")
  lineR.classList.remove("opacity-100")

  bakuchiol.style.transform = "translate(0px, 0px)";
  bakuchiolBlur.style.transform = "translate(0px, 0px)";
  bakuchiolSm.classList.remove("opacity-0")
  lineL.classList.add("opacity-0")
  lineL.classList.remove("opacity-100")

  textOut.classList.remove("opacity-100")

  infL.style.backgroundColor = "#b0dbd4"
  infR.style.backgroundColor = "#d2d0f4"
})
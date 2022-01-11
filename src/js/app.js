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
import Alpine from "alpinejs";
import {number} from "tailwindcss/lib/util/dataTypes";

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
    },
    Alpine
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
 * PRODUCT SCRIPT
 */
// let add_qty = document.getElementById("add-qty");
// let min_qty = document.getElementById("min-qty");
// let tmp_qty = document.getElementById("total-qty");
// let tot_qty = Number(tmp_qty.innerText)
//
// add_qty.addEventListener("click", () => {
//     tmp_qty.innerText = tot_qty += 1
// })
//
//
// min_qty.addEventListener("click", () => {
//     tmp_qty.innerText = tot_qty -= 1
// })

//
// /**
//  * HOMEPAGE
//  */
//
// // animated infografis
// let infL = document.getElementById('inf-left')
// let infR = document.getElementById('inf-right')
// let infografis = document.getElementById('infografis')
// let retinol = document.getElementById('retinol')
// let retinolBlur = document.getElementById('retinol-blur')
// let lineL = document.getElementById('line-left')
// let bakuchiol = document.getElementById('bakuchiol')
// let bakuchiolSm = document.getElementById('bakuchiol-sm')
// let bakuchiolBlur = document.getElementById('bakuchiol-blur')
// let lineR = document.getElementById('line-right')
// let halfTop = document.getElementById('half-top-tavi')
// let halfBot = document.getElementById('half-bot-tavi')
// let textOut = document.getElementById("text-outside")
//
// let titleA = document.getElementById("title-a")
// let subTitleA1 = document.getElementById("sub-title-a1")
// let subTitleA2 = document.getElementById("sub-title-a2")
//
// let titleB = document.getElementById("title-b")
// let titleBSm = document.getElementById("title-b-sm")
// let subTitleB1 = document.getElementById("sub-title-b1")
// let subTitleB2 = document.getElementById("sub-title-b2")
// let subTitleSmB1 = document.getElementById("sub-title-b1sm")
//
// let textInL = document.getElementById("text-inside-left")
// let textInR = document.getElementById("text-inside-right")
//
// let imageSmL = document.getElementById("image-left-sm")
// let imageSmR = document.getElementById("image-right-sm")
//
// let imageHvrL = document.getElementById("hover-left-img")
// let imageHvrR = document.getElementById("hover-right-img")
//
//
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         infografis.addEventListener("mouseover", () => {
//             textInL.style.opacity = "100";
//             textInR.style.opacity = "100";
//             imageSmL.style.opacity = "0";
//             imageSmR.style.opacity = "0";
//             imageHvrR.style.opacity = "100";
//             imageHvrL.style.opacity = "100";
//         })
//
//         infografis.addEventListener("mouseleave", () => {
//             textInL.style.opacity = "0";
//             textInR.style.opacity = "0";
//             imageSmL.style.opacity = "100";
//             imageSmR.style.opacity = "100";
//             imageHvrR.style.opacity = "0";
//             imageHvrL.style.opacity = "0";
//         })
//     }
// }
//
// let x = window.matchMedia("(max-width: 425px)")
// myFunction(x)
// x.addListener(myFunction)
//
// // event on mouse hover
// infografis.addEventListener("mouseover", function () {
//     halfTop.style.transform = "translateY(-20px)";
//     halfBot.style.transform = "translateY(20px)";
//
//     retinol.style.transform = "translate(-60%, 100%)";
//     retinolBlur.style.transform = "translate(-150%, -150%)";
//     lineR.classList.remove("opacity-0")
//     lineR.classList.add("opacity-100")
//
//     bakuchiol.style.transform = "translate(120%, -20%)";
//     bakuchiolBlur.style.transform = "translate(390%, 180%)";
//     bakuchiolSm.classList.add("opacity-0")
//
//     lineL.classList.remove("opacity-0")
//     lineL.classList.add("opacity-100")
//
//     textOut.classList.remove("opacity-0")
//     textOut.classList.add("opacity-100")
//
//     infL.style.backgroundColor = "transparent"
//     infR.style.backgroundColor = "transparent"
//
//     titleA.innerHTML = "E"
//     subTitleA1.innerHTML = "Efective"
//     subTitleA2.style.display = "none"
//
//     titleB.innerHTML = "G"
//     titleBSm.innerHTML = "G"
//     subTitleB1.innerHTML = "Gentle"
//     subTitleSmB1.innerHTML = "Gentle"
//     subTitleB2.style.display = "none"
//
// })
//
// // event on mouse leave
// infografis.addEventListener("mouseleave", function () {
//     halfTop.style.transform = "translateY(0px)";
//     halfBot.style.transform = "translateY(0px)";
//
//     retinolBlur.style.transform = "translateY(0px)";
//     retinol.style.transform = "translatex(0%)";
//     lineR.classList.add("opacity-0")
//     lineR.classList.remove("opacity-100")
//
//     bakuchiol.style.transform = "translate(0px, 0px)";
//     bakuchiolBlur.style.transform = "translate(0px, 0px)";
//     bakuchiolSm.classList.remove("opacity-0")
//     lineL.classList.add("opacity-0")
//     lineL.classList.remove("opacity-100")
//
//     textOut.classList.remove("opacity-100")
//     textOut.classList.add("opacity-0")
//
//     infL.style.backgroundColor = "#b0dbd4"
//     infR.style.backgroundColor = "#d2d0f4"
//
//     titleA.innerHTML = "A"
//     subTitleA1.innerHTML = "Encapsulated"
//     subTitleA2.style.display = "none"
//     subTitleA2.style.display = "block"
//
//     titleB.innerHTML = "B"
//     titleBSm.innerHTML = "B"
//     subTitleB1.innerHTML = "Bakuchiol"
//     subTitleSmB1.innerHTML = "Bakuchiol"
//     subTitleB2.style.display = "block"
// })
//
//
// /**
//  * HEADER
//  */
// let btn_sm_nav = document.getElementById("btn-show-nav")
// btn_sm_nav.onclick = show_nav_sm
//
// function show_nav_sm() {
//     let element = document.getElementById("nav-sm");
//     element.classList.toggle("hidden");
// }

//
// // main tab
// let tabContainer = document.querySelector("#tabs");
// let tabToggle = tabContainer.querySelectorAll(".btn-tab");
//
// tabToggle.forEach(function (toggler) {
//     toggler.addEventListener("click", function (e) {
//         e.preventDefault();
//
//         let tabName = this.getAttribute("data-tab");
//         let tabContent = document.querySelector("#tab-content");
//
//         for (let i = 0; i < tabContent.children.length; i++) {
//             tabToggle[i].classList.remove("bg-scheme-dusk-blue");
//             tabToggle[i].classList.add("bg-scheme-darkish-pink-two");
//             tabContent.children[i].classList.remove("hidden");
//
//             if (tabContent.children[i].id === tabName) {
//                 continue;
//             }
//
//             tabContent.children[i].classList.add("hidden");
//         }
//         e.target.classList.remove("bg-scheme-darkish-pink-two");
//         e.target.classList.add("bg-scheme-dusk-blue")
//     });
// });
// document.querySelector(".default-tab").click();
//
//
// // tutorial tab
// let tabContainerTut = document.querySelector("#tabs-tutorial");
// let tabToggleTut = tabContainerTut.querySelectorAll(".btn-tab-tut");
//
// tabToggleTut.forEach(function (toggler) {
//     toggler.addEventListener("click", function (e) {
//         e.preventDefault();
//
//         let tabNameTut = this.getAttribute("data-tab");
//         let tabContentTut = document.querySelector("#tab-content-tutorial");
//
//         for (let i = 0; i < tabContentTut.children.length; i++) {
//             // tabToggleTut[i].classList.remove("bg-scheme-dusk-blue");
//             // tabToggleTut[i].classList.add("bg-scheme-darkish-pink-two");
//             tabContentTut.children[i].classList.remove("hidden");
//
//             if (tabContentTut.children[i].id === tabNameTut) {
//                 continue;
//             }
//
//             tabContentTut.children[i].classList.add("hidden");
//         }
//         e.target.classList.add("bg-scheme-dusk-blue");
//     });
// });
// document.querySelector(".default-tab").click();


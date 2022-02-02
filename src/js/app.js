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
import Alpine from 'alpinejs';
import jquery from 'jquery';


import {number} from "tailwindcss/lib/util/dataTypes";
import axios from "axios";

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

window.Alpine = Alpine;
queueMicrotask(() => {
    Alpine.start()
});

window.jquery = jquery;
queueMicrotask(() => {
    jquery
});


new Emkalab.Animation({}).AppLoading()
// document.getElementById('btn-header-profiles').addEventListener('click', (e)=> {
//   new Emkalab.antd().message('success',e.target.getAttribute('emk-message'))
// })

window.addEventListener('load', () => {
    new Emkalab.antd({}).Skeleton('#emk-skeleton-list')
    new Emkalab.antd({}).Skeleton('#emk-skeleton-id')
    new Emkalab.antd({}).Skeleton('#emk-skeleton-image')
    new Emkalab.AOS()
})

/**
 * SEARCH
 */
function searchProduct(elem) {
    let query = window.location.search
    let q = query.toString().replace('?q=', '')
    if (q && q.length > 0) {
        elem.innerHTML = ""
        axios.get('/assets/json/data-product.json')
            .then((res) => {
                if (res.status === 200) {
                    let data = res.data.filter((item) => item.title.toString().indexOf(q.toLowerCase()) > -1)
                    if (data.length > 0) {
                        let elemcard = document.createElement('div')
                        for (let i = 0; i < data.length; i++) {
                            elem.innerHTML += `
                        <!-- card product -->
<div class="col-span-1 md:col-span-3 bg-white transition duration-200"
     data-aos="fade-up">
<div class="h-52 md:h-72 w-full bg-gray-100 relative overflow-hidden relative"
     id="emk-skeleton-image"
     data-time="500">

<!-- badge image -->
<img src="./images/products/png/icDiscount.png" alt="" class="w-1/5 absolute top-4 left-4">
<img src="./images/products/png/icAward.png" alt="" class="w-1/5 absolute top-4 right-4">

<!-- card image -->
<a href="">
<img src="${data[i].images}" alt="" class="w-full h-full object-cover">
<img src="${data[i].images}" alt=""
     class="hover-image w-full h-full upper-image object-cover">
</a>
</div>

<div class=" bg-white flex flex-col p-2 md:p-4 bg-scheme-light-gray">
<div class="w-full block relative" id="emk-skeleton-list" data-time="1000">
<div class="hidden font-walsh space-y-2">
<div>
<p class="text-sm md:text-base font-bold hover:text-scheme-dusk-blue duration-300">
<a href="">
${data[i].title}
</a>
</p>
<p class="text-gray-400 text-sm font-medium">Overnight Serum</p>
<div class="font-bold text-sm flex gap-4">
<p>Rp 159.000</p>
<!--<p class="font-walsh text-sm font-semibold line-through decoration-2 decoration-scheme-darkish-pink">-->
<!--Rp 159.000-->
<!--</p>-->
</div>
</div>

<div>
<button class="flex items-center justify-center gap-2 w-full py-2 text-xs bg-white hover:bg-scheme-dusk-blue text-black hover:text-white duration-200 border-2 hover:border-scheme-dusk-blue border-gray-400 font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
     viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
</svg>
<span>Add to Cart</span>
</button>
</div>
</div>
</div>
</div>
</div>
                        
                        `
                        }
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

searchProduct(document.getElementById('js-section-product'))


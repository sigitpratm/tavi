import '../scss/app.scss';

import './demo.js';

import Utils from './utils';
import AntdSupport from './modules/AntdSupport';
import PopMotionControll from './modules/PopMotionControll';
import FetchController from './modules/FetchController';
import AOSController from './modules/AOSController'
import EmkalabAnimation from './modules/EmkalabAnimation';
import Alpine from 'alpinejs';
import  'jquery';

import axios from "axios";

window.Emkalab = {
    JQuery: import("jquery"),
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


new Emkalab.Animation({}).AppLoading()

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
                        <div class="col-span-1 md:col-span-3 bg-white transition duration-200"
                             data-aos="fade-up">
                        <div class="h-52 md:h-72 w-full bg-gray-100 relative overflow-hidden relative"
                             id="emk-skeleton-image"
                             data-time="500">
                        
                        <a href="">
                        <img src="${data[i].images}" alt="" class="w-full h-full object-cover">
                        <img src="${data[i].hover}" alt=""
                             class="hover-image w-full h-full upper-image object-cover">
                        </a>
                        </div>
                        
                        <div class=" bg-white flex flex-col p-2 md:p-4 bg-scheme-light-gray">
                        <div class="w-full block relative" id="emk-skeleton-list" data-time="1000">
                        <div class="hidden font-walsh space-y-2">
                        <div>
                        <p class="text-sm md:text-base font-bold hover:text-scheme-dusk-blue duration-300 capitalize">
                        <a href="">
                        ${data[i].title}
                        </a>
                        </p>
                        <p class="text-gray-400 text-sm font-medium">${data[i].category}</p>
                        <div class="font-bold text-sm flex gap-4">
                        <p>Rp 159.000</p>
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
                    } else {
                        elem.classList.remove('grid')
                        elem.classList.remove('grid-cols-2')
                        elem.classList.remove('md:grid-cols-12')
                        elem.classList.add('flex')
                        elem.classList.add('justify-center')
                        elem.classList.add('py-10')
                        elem.innerHTML = `
                        <div class="col-span-1 md:col-span-3 mx-auto flex flex-col justify-center space-y-4">
                                <svg
                                    class="w-full h-full"  viewBox="0 0 184 152"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <g transform="translate(24 31.67)">
                                            <ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797"
                                                     ry="12.668"></ellipse>
                                            <path class="ant-empty-img-default-path-1"
                                                  d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"></path>
                                            <path class="ant-empty-img-default-path-2"
                                                  d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                                                  transform="translate(13.56)"></path>
                                            <path class="ant-empty-img-default-path-3"
                                                  d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
                                            <path class="ant-empty-img-default-path-4"
                                                  d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"></path>
                                        </g>
                                        <path class="ant-empty-img-default-path-5"
                                              d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"></path>
                                        <g class="ant-empty-img-default-g" transform="translate(149.65 15.383)">
                                            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse>
                                            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
                                        </g>
                                    </g>
                                </svg>
                                
                                <p class="text-center font-walsh text-xl">Product not found</p>
                        </div>
                      
                        `
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

searchProduct(document.getElementById('js-search-results'))



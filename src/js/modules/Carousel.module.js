import $ from 'jquery'
// export default class CarouselModule{
//     constructor(props = {element: '', options: {}}) {
//         return CarouselModule.getInstance(props?.element, props?.options)
//     }
//
//     static async getInstance(element, options = {}){
//         if (element){
//             if (typeof($(element)) !== "undefined" && typeof(options) !== "undefined"){
//                 $(element).slick({
//                     ...options,
//                     infinite: options?.infinite ?? false,
//                     slidesToShow: options?.slideToShow ?? 1,
//                     slidesToScroll: options?.slidesToScroll ?? 1,
//                     dots: options?.dots ?? false,
//                     arrows: options?.arrows ?? true
//                 })
//             }
//
//         }
//
//     }
//
// }

export default function Carousel({element, options = {}}){
    if (element){
        if (typeof($(element)) !== "undefined" && typeof(options) !== "undefined"){
            $(element).slick({
                ...options,
                infinite: options?.infinite ?? false,
                slidesToShow: options?.slideToShow ?? 1,
                slidesToScroll: options?.slidesToScroll ?? 1,
                dots: options?.dots ?? false,
                arrows: options?.arrows ?? true
            })
        }

    }
}
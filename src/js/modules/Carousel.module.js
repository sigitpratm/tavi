import $ from 'jquery'
export default class CarouselModule{
    constructor(props = {element: '', options: {}}) {

        return this.getInstance(props?.element, props?.options)
    }

    async getInstance(element, options = {}){
        if (element){
            console.log(element)
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

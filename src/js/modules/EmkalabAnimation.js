import Utils from '../utils';

class EmkalabAnimation {

  constructor(props = {}) {
    this.state = {
      ...props,
      Dropdown: {
        trigger: 'click',
        selectorAll: '#emk-animation-dropdown',
        attribute: {
          value: {
            'dropdown': 'false',
            'dropdown-trigger': 'click',
            'dropdown-delay': '100',
            'dropdown-position': 'bottom-center',
            'duration': 200,
            'collapse': true

          },
          name: {
            'dropdown': 'emk-dropdown',
            'dropdown-trigger': 'emk-dropdown-trigger',
            'dropdown-delay': 'emk-dropdown-delay',
            'dropdown-position': 'emk-dropdown-position',
            'collapse': 'emk-dropdown-collapse',
            'duration': 'emk-dropdown-duration',
          },
          default: `[emk-dropdown]`,
          duration: '[emk-dropdown-duration',
          position: '[emk-dropdown-position]',
          trigger: `[emk-dropdown-trigger="click"]`,
        },
        style: {
          opacity: 0,
          transition: 0,
          transform: `translateY(-50px) translateX(-50%)`,
        },
        targetEl: '#emk-target-dropdown'
      } // state dropdown
    };
    this.Dropdown();
  }

  Dropdown() {
    try {
      let data = document.querySelectorAll(this.state.Dropdown?.attribute?.default);

      data.forEach((el) => {

        let translateX = '-50%';
        let translateY = '-50px';
        switch (Emkalab.Utils.Attributes(el, 'get', this.state.Dropdown?.attribute.name['dropdown-position'])) {
          case 'bottom-center':
            translateX = '-50%';
            translateY = `-${el.firstElementChild.clientHeight + 100}px`;
            break;
          case 'bottom-right':
            translateX = `-${(100 - (el.firstElementChild.clientWidth / 2))}%`;
            translateY = `-${el.firstElementChild.clientHeight + 100}px`;
            break;
          case 'bottom-left':
            translateX = '0';
            translateY = `-${el.firstElementChild.clientHeight + 100}px`;
            break;
          default:
            translateX = '0';
            translateY = `-${el.firstElementChild.clientHeight + 100}px`;

        }

        if (!Emkalab.Utils.Attributes(el, 'get', this.state.Dropdown?.attribute.name.duration)) {
          this.state.Dropdown.style = {
            ...this.state.Dropdown.style,
            transform: `translateY(${translateY}) translateX(${translateX})`,
            transition: `${(this.state.Dropdown?.attribute.value.duration / 1000)}s`
          };
          Emkalab.Utils.AddStylesObject(el.lastElementChild, this.state.Dropdown.style);
          Emkalab.Utils.Attributes(el, 'set', this.state.Dropdown?.attribute.name.duration, this.state.Dropdown?.attribute.value.duration);

        } else {
          this.state.Dropdown.style = {
            ...this.state.Dropdown.style,
            transform: `translateY(${translateY}) translateX(${translateX})`,
            transition: `${(parseInt(Emkalab.Utils.Attributes(el, 'get', this.state.Dropdown?.attribute.name.duration)) / 1000)}s`
          };

          Emkalab.Utils.AddStylesObject(el.lastElementChild, this.state.Dropdown.style);
        }
        Emkalab.Utils.Attributes(el, 'set', this.state.Dropdown?.attribute.name.dropdown, this.state.Dropdown?.attribute.value.dropdown);
        Emkalab.Utils.Attributes(el, 'set', this.state.Dropdown?.attribute.name.collapse, this.state.Dropdown?.attribute.value.collapse);
        Emkalab.Utils.AddStylesObject(el.lastElementChild, this.state.Dropdown.style);

        if (Emkalab.Utils.Attributes(el, 'get', this.state.Dropdown?.attribute.name['dropdown-trigger']) !== 'click') {

          el.addEventListener('mouseenter', () => {
            this.state.Dropdown.attribute.value.collapse = true;

            Emkalab.Utils.Attributes(el, 'set', this.state.Dropdown?.attribute.name.collapse, true);
            Emkalab.Utils.Classes(el.lastElementChild, 'remove', 'hidden');
            setTimeout(() => {
              this.state.Dropdown.style = {
                opacity: 1,
                transform: `translateY(0) translateX(${translateX})`,
              };
              Emkalab.Utils.AddStylesObject(el.lastElementChild, this.state.Dropdown.style);
            }, parseInt(Emkalab.Utils.Attributes(el, 'get', this.state.Dropdown?.attribute.name.duration)));

          });

          el.addEventListener('mouseleave', () => {

            this.state.Dropdown.attribute.value.collapse = false;

            Emkalab.Utils.Attributes(el, 'set', this.state.Dropdown?.attribute.name.collapse, this.state.Dropdown?.attribute.value.collapse);
            this.state.Dropdown.style = {
              opacity: 0,
              transform: `translateY(-${el.firstElementChild.clientHeight}px) translateX(${translateX})`
            };
            Emkalab.Utils.AddStylesObject(el.lastElementChild, this.state.Dropdown.style);
            setTimeout(() => {
              Emkalab.Utils.Classes(el.lastElementChild, 'add', 'hidden');
            }, parseInt(Emkalab.Utils.Attributes(el, 'get', this.state.Dropdown?.attribute.name.duration)));
          });
        } else {

          el.firstElementChild.addEventListener(this.state.Dropdown.trigger, () => {

            this.state.Dropdown.attribute.value.collapse = !this.state.Dropdown.attribute.value.collapse;

            console.log(this.state.Dropdown?.attribute.value.collapse);
            Emkalab.Utils.Attributes(el, 'set', this.state.Dropdown?.attribute.name.collapse, this.state.Dropdown?.attribute.value.collapse);

            if (!this.state.Dropdown.attribute.value.collapse) {
              Emkalab.Utils.Classes(el.lastElementChild, 'remove', 'hidden');
              setTimeout(() => {
                this.state.Dropdown.style = {
                  opacity: 1,

                  transform: `translateY(${el.firstElementChild.clientHeight }px) translateX(${translateX})`
                };

                Emkalab.Utils.AddStylesObject(el.lastElementChild, this.state.Dropdown.style);
              }, parseInt(Emkalab.Utils.Attributes(el, 'get', this.state.Dropdown?.attribute.name.duration)));
              el.blur()
            } else {
              this.state.Dropdown.style = {
                opacity: 0,
                transform: `translateY(-${el.firstElementChild.clientHeight + 20}px) translateX(${translateX})`
              };
              el.blur()
              Emkalab.Utils.AddStylesObject(el.lastElementChild, this.state.Dropdown.style);
              setTimeout(() => {
                Emkalab.Utils.Classes(el.lastElementChild, 'add', 'hidden');
              }, parseInt(Emkalab.Utils.Attributes(el, 'get', this.state.Dropdown?.attribute.name.duration)));
            }
          });
        }
      });
    } catch (e) {
      Emkalab.Utils.message('error', e.message);
    }
  }

  HoverImages(src, src2){
    // onmouseover = 
  }


  AppLoading() {
    try {
      let data = document.querySelectorAll(this.state.Dropdown?.attribute?.default);

      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          data[i].setAttribute('emk-dropdown-delay', '100');
          data[i].setAttribute('emk-dropdown', 'false');
          data[i].setAttribute('emk-dropdown-collapse', 'true');
        }
      }

      data.forEach((el) => {
        el.addEventListener(this.state.Dropdown.trigger, function () {

        });
      });
    } catch (e) {
      Emkalab.Utils.message('error', e.message);
    }

  }

  appLoading() {
  }
}

export default EmkalabAnimation;

import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import {assert} from 'chai'
Vue.component('m-button', Button)
Vue.component('m-icon',Icon)
Vue.component('m-button-group',ButtonGroup)

new Vue({
  el: '#app',
})

const buttonConstructor = Vue.extend(Button)
const button = new buttonConstructor({
  
})
button.$mount()
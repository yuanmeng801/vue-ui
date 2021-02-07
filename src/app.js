import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import { assert, expect } from "chai";
Vue.component("m-button", Button);
Vue.component("m-icon", Icon);
Vue.component("m-button-group", ButtonGroup);

new Vue({
  el: "#app",
});

{
  // 测试icon参数
  const buttonConstructor = Vue.extend(Button);
  const button = new buttonConstructor({
    propsData: {
      icon: "plus",
    },
  });
  button.$mount();
  const useElement = button.$el.querySelector("i");
  const href = useElement.getAttribute("class");
  expect(href).to.include("i-plus");
}
{
  // 测试icon参数，和loading同时存在时，是否优先展示 loading
  const buttonConstructor = Vue.extend(Button);
  const button = new buttonConstructor({
    propsData: {
      icon: "plus",
      loading: true,
    },
  });
  button.$mount();
  const useElement = button.$el.querySelector("i");
  const href = useElement.getAttribute("class");
  expect(href).to.eq("loading icon iconfont i-loading");
}
{
  // 测试type参数
  const buttonConstructor = Vue.extend(Button);
  const button = new buttonConstructor({
    propsData: {
      type: "primary",
    },
  });
  button.$mount();
  const buttonClass = button.$el.getAttribute("class");
  expect(buttonClass).to.eq("m-button m-button-primary icon-left");
}
{
  // 测试type参数
  const buttonConstructor = Vue.extend(Button);
  const button = new buttonConstructor({
    propsData: {
      iconPosition: "right",
    },
  });
  button.$mount();
  const buttonClass = button.$el.getAttribute("class");
  expect(buttonClass).to.eq("m-button m-button-default icon-right");
}
{
}

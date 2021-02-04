<template>
  <button class="m-button" :class="{ [`icon-${iconPosition}`]: true }">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script>
export default {
  props: ["icon", "iconPosition"],
  props:{
    icon:{},
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return value==='left'||value==='right'
      }
    }
  }
};
</script>
<style lang="scss">
.m-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  vertical-align: middle;
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  .icon {
    order: 1;
    margin-right: .3em;
  }
  .content {
    order: 2;
    line-height: var(--font-size);
  }
}
.icon-right {
  .icon {
    margin-left: .3em;
    margin-right: 0;
    order: 2;
  }
  .content {
    order: 1;
  }
}
</style>

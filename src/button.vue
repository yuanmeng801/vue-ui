<template>
  <button class="m-button" :class="{ [`icon-${iconPosition}`]: true }">
    <m-icon :class="icon" :iconName="icon"></m-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>
<style lang="scss">
@keyframes loading{
  from{transform: rotate(0deg);}
  to{transform: rotate(360deg);}
}
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
    margin-right: 0.3em;
  }
  .content {
    order: 2;
    line-height: var(--font-size);
  }
  .loading{
    animation: loading 1.5s infinite linear;
  }
}
.icon-right {
  .icon {
    margin-left: 0.3em;
    margin-right: 0;
    order: 2;
  }
  .content {
    order: 1;
  }
}
</style>

<template>
  <button
    :class="[
      'm-button',
      type ? `m-button-${type}` : '',
      `icon-${iconPosition}`,
    ]"
    @click="$emit('click')"
  >
    <m-icon v-if="loading" iconName="loading" class="loading"></m-icon>
    <m-icon v-if="icon && !loading" :class="icon" :iconName="icon"></m-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
    icon: String,
    loading: {
      type: Boolean,
      default: false,
    },
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
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.m-button {
  position: relative;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  vertical-align: middle;
  padding: 0 1em;
  border-radius: var(--border-radius);
  .icon {
    order: 1;
    margin-right: 0.3em;
  }
  .content {
    order: 2;
    line-height: var(--font-size);
  }
  .loading {
    animation: loading 1.5s infinite linear;
  }
  &:after {
    border-radius: var(--border-radius);
    border: 0.3em solid var(--border-ripple);
    content: "";
    display: block;
    position: absolute;
    top: -0.45em;
    left: -0.45em;
    right: -0.45em;
    bottom: -0.45em;
    pointer-events: none;
    background-color: transparent;
    background-repeat: no-repeat;
    opacity: 0;
    transition: all 0.3s linear;
  }
  &:active:after {
    border: 0.1em;
    opacity: 1;
    top: -0em;
    left: -0em;
    right: -0em;
    bottom: -0em;
    transition: 0.3s;
  }
  &:after {
    border-color: var(--primary-bg);
  }
  &:focus {
    outline: none;
  }
}
.m-button-default {
  position: relative;
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  &:hover {
    color: var(--button-hover-color);
    border-color: var(--border-hover-color);
  }
  &:active {
    color: var(--active-color);
    border-color: var(--active-color);
  }
}
.m-button-primary {
  position: relative;
  background-color: var(--primary-bg);
  color: #fff;
  border: 0;
  &:hover {
    background: var(--primary-hover-bg);
  }
  &:active {
    background-color: var(--primary-active-bg);
  }
}
.m-button-dashed {
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  border-style: dashed;
  &:hover {
    color: var(--button-hover-color);
    border-color: var(--border-hover-color);
  }
}
.m-button-text {
  border: 0;
  background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.018);
  }
  &:after {
    display: none;
  }
  &:active:after {
    display: none;
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

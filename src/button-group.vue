<template>
  <div class="m-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn("m-button-group组件必须直接使用m-button组件");
      }
    }
  },
};
</script>
<style lang="scss">
.m-button-group {
  display: inline-flex;
  .m-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-right: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      z-index: 1;
    }
  }
}
</style>
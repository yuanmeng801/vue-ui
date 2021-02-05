<template>
  <i :class="['icon', 'iconfont', `i-${iconName}`]"></i>
</template>
<script>
export default {
  props: ["iconName"],
};
</script>
<template>
  <svg v-if="iconName" class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${iconName}`"></use>
  </svg>
</template>
<script>
export default {
  props:['iconName']
}
</script>
<template>
  <div>
    vuePress vue组件使用
    <br>
    <input type="text" v-model="value">
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  mounted() {},
  watch: {
    value: function(newVal, oldVal) {
      console.log(`newVal: ${newVal}, oldVal:${oldVal}`)
    }
  }
};
</script>
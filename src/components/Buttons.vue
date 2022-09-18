<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick() {
      this.$emit('btn-click');
    },
  }
}
</script>

<template>
  <button @click="onClick()" :style="{background: color}" class="btn"> {{text}} </button>
</template>

<style scoped>
button{
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}
</style>
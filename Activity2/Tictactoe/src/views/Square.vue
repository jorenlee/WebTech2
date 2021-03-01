<template>
  <button
    class="square"
    :class="[value, { winner: winner }]"
    :disabled="disabled"
    @click="click"
  >
    {{ value }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Square',
  props: {
    value: String,
    winner: Boolean,
    disabled: Boolean
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
})
</script>

<style scoped>
.square {
  background: #fff;
  border: 1px solid #999;
  float: center;
  font-size: 70px;
  font-weight: bold;
  line-height: 34px;
  height: 100vm;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  box-shadow: inset 0 0 0 #0004;
  text-shadow: -1px -1px 1px #000b, -1px 1px 1px #000b, 1px -1px 1px #000b,
    1px 1px 1px #000b;
  transition: all 0.25s ease;
  outline: none;
}
.square.winner {
  background: #8885;
}
.square:not([disabled]):empty:hover,
.square:not([disabled]):empty:focus {
  box-shadow: inset 0 2px 25px #0006;
  cursor: pointer;
}
.square:not([disabled]):empty:active {
  box-shadow: inset 0 2px 50px #0008;
}
.square.X {
  color: #ff5722;
}
.square.O {
  color: #ffeb3b;
}
</style>

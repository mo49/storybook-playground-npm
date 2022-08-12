<template>
  <button
    :class="className"
    :disabled="disabled"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@nuxtjs/composition-api'
const Button = defineComponent({
  props: {
    className: { type: String, default: '' },
    text: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  },
  setup (_, context: SetupContext) {
    // method
    const onClick = (e) => {
      context.emit('on-click', e)
    }
    return {
      onClick
    }
  }
})
export default Button
</script>

<style lang="scss" scoped>
$color-active: orange;
.normal {
  background-color: $color-active;
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 70px;
  height: 22px;
}
.large {
  //
}
.small {
  //
}
</style>

<template>
  <ActionButton
    :to="to"
    :xlarge="true"
    text="EXIT"
    icon="mdi-door"
    class="ml-5"
  />
</template>

<script>
export default {
  components: {
    ActionButton: () => import('@/components/atoms/ActionButton')
  },
  props: {
    to: {
      type: String,
      default: null
    }
  }
}
</script>

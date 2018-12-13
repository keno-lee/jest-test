<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="num">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      num: 0
    }
  }
}
</script>

<template lang="html">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title is-bold is-size-4">
        Is Everyone Hanging Out Without Me?
      </h1>
      <div v-bind:class="{'control is-loading is-size-5': loading}">
        <input v-model="searcher" maxlength="25" class="input is-white is-rounded is-size-5"  type="text" placeholder="Type something....">
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'navbar',
  data: function () {
    return {
      isActive: true,
      error: null,
      loading: false,
      searcher: ''
    }
  },
  watch: {
    searcher: function (val) {
      if (this.searcher.length !== 0) {
        this.loading = true
        this.debouncedGetAnswer()
      } else {
        this.loading = false
      }
    },
    deep: true
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function () {
      this.loading = false
    }}

}
</script>

<style scoped>
  .button.is-loading::after, .select.is-loading::after, .control.is-loading::after, .loader{
    border: 2px solid #4cc8a4;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }

</style>

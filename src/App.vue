<template>
  <div>
    <div id="app">
      <appHeader/>
      <router-view/>
    </div>
      <appFooter/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
html,body {
  margin: 0;
  padding: 0;
  background: #f7f9fc;
  height: 100%;

  #app {
    width: 952px;
    margin: 0 auto;
    min-height: 100%;
  }
}

@media screen and (max-width: 1024px) {
  #app {
    width: 100% !important;
  }
}

</style>

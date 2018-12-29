<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <app-HelloWorld msg="Welcome to Your Vue.js + TypeScript App"></app-HelloWorld>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    appHelloWorld: HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

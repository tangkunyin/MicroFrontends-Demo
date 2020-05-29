<template>
  <div id="app">
    <!-- loading -->
    <div v-if="loading" class="subapp-loading">Loading subapp...</div>
    <!-- 子应用盒子 -->
    <div id="subapp-viewport"></div>
    <div v-html="content" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
// import HelloWorld from "./components/HelloWorld.vue";

// @Component({
//   components: {
//     HelloWorld
//   }
// })

export default class App extends Vue {
  @Prop(String)
  content = "";

  @Prop(Boolean)
  loading = true;
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  text-align: center;
}
</style>

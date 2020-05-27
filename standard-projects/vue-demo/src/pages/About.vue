<template>
  <div id="about">
    <HelloWorld msg="vue about" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "About",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#about {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
  text-align: center;
  background-color: darkslateblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

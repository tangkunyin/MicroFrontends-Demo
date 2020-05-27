<template>
  <div id="index">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style>
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
  text-align: center;
  background-color: darkorange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-top: 15px;
}
</style>

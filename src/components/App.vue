<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
</style>
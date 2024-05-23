<template>
  <section class="todo">
    <div class="todo__wrapper">
      <Nav />
      <Loader v-if="loadingStatus" />
      <!-- <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav> -->

      <div class="todo__content">
        <router-view />
      </div>
    </div>
  </section>
</template>
<script>
import Nav from "./Nav.vue";
import Loader from "./Loader.vue";
import { onMounted, ref } from "vue";

export default {
  name: "todo-component",
  components: {
    Nav,
    Loader,
  },
  setup() {
    const loadingStatus = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loadingStatus.value = false;
      }, 1500);
    });
    return {
      loadingStatus,
    };
  },
};
</script>
<style lang=""></style>

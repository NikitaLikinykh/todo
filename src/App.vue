<template>
  <div id="app">
    <div class="container">
      <div class="app-wrapper">
        <Todo />
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<template>
  <div>
    <div class="home" v-if="getTodoList && getTodoList.length > 0">
      <TodoItem v-for="item in getTodoList" :key="item.id" :todoItem="item" />
    </div>
    <div class="empty-todos" v-else>No Todos</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import TodoItem from "../components/TodoItem.vue";

export default {
  name: "home-page",
  components: { TodoItem },
  computed: {
    ...mapGetters(["getTodoList"]),
  },
};
</script>

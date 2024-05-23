<template>
  <div class="favorite">
    <div v-if="favoriteList && favoriteList.length > 0">
      <TodoItem v-for="item in favoriteList" :key="item.id" :todoItem="item" />
    </div>
    <div class="empty-todos" v-else>No Todos</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoItem from "../components/TodoItem.vue";

const store = useStore();

const favoriteList = computed(() => store.getters.getFavoriteList);
</script>

<template>
  <div class="add-note">
    <input
      type="text"
      class="input"
      placeholder="Title"
      v-model="todo.title"
      required
    />
    <SelectButton @update:category="handleCategoryUpdate" />
    <textarea
      class="textarea"
      placeholder="text"
      v-model="todo.text"
      required
    ></textarea>
    <button class="btn" @click="editTodoItem">Edit</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import SelectButton from "../components/ui/SelectButton";
const store = useStore();
const route = useRoute();
const router = useRouter();
const id = computed(() => parseInt(route.params.id, 10));

const todo = computed(() => {
  return store.state.todoList.find((todo) => todo.id === id.value);
});

const editTodoItem = () => {
  console.log("edit");
  store.commit(
    "updateTodoItem",
    todo.value.id,
    todo.value.title,
    todo.value.text,
    todo.value.category
  );
  router.push("/");
};

const handleCategoryUpdate = (newValue) => {
  todo.value.category = newValue;
};
</script>

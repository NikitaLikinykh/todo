<template>
  <div class="edit-note">
    <NoteForm
      :note="todo"
      :submitAction="editTodoItem"
      buttonText="Edit"
      @update:note="updateNote"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import NoteForm from "../components/NoteForm.vue";

const store = useStore();
const route = useRoute();
const router = useRouter();
const id = computed(() => parseInt(route.params.id, 10));

const todo = computed(() => {
  return store.state.todoList.find((todo) => todo.id === id.value);
});

const editTodoItem = (updatedNote) => {
  store.commit("updateTodoItem", updatedNote);
  router.push("/");
};

const updateNote = (updatedNote) => {
  todo.value = updatedNote;
};
</script>

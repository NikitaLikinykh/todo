<template>
  <div class="todo__item">
    <CheckBox :done="todoItem.done" @update:done="updateDone" />
    <div class="todo__item-info">
      <div class="todo__item-name">{{ todoItem.title }}</div>
      <div class="todo__item-description">{{ todoItem.text }}</div>
    </div>
    <div class="category">
      <div class="category__item">
        {{ todoItem.category }}
      </div>
    </div>
    <div class="todo__item-data-wrapper">
      <div class="todo__item-data">{{ todoItem.createdDate }}</div>
      <div class="todo__item-data todo__item-data_update">
        {{ todoItem.updatedDate }}
      </div>
    </div>

    <button @click="editItem">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#AEC670"
        class="bi bi-pencil-square"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
        />
      </svg>
    </button>
    <button @click="deleteItem">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#C7495C"
        class="bi bi-trash3-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
        />
      </svg>
    </button>
    <button @click="addItemToFavorite">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="red"
        viewBox="0 0 20 18"
        height="18"
        width="20"
        class="icon favorite"
      >
        <path
          fill="#F1BAA1"
          d="M14.44 0C12.63 0 11.01 0.88 10 2.23C9.48413 1.53881 8.81426 0.977391 8.04353 0.590295C7.27281 0.203198 6.42247 0.00108555 5.56 0C2.49 0 0 2.5 0 5.59C0 6.78 0.19 7.88 0.52 8.9C2.1 13.9 6.97 16.89 9.38 17.71C9.72 17.83 10.28 17.83 10.62 17.71C13.03 16.89 17.9 13.9 19.48 8.9C19.81 7.88 20 6.78 20 5.59C20 2.5 17.51 0 14.44 0Z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

import CheckBox from "../components/ui/CheckBox.vue";

import { useRouter } from "vue-router";
const props = defineProps({
  todoItem: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const store = useStore();

const addItemToFavorite = () => {
  store.commit("setItemToFavorite", props.todoItem);
};

const updateDone = (newDone) => {
  store.commit("updateTodoDone", { id: props.todoItem.id, done: newDone });
};

const editItem = () => {
  router.push("/edit/" + props.todoItem.id);
};

const deleteItem = () => {
  store.commit("removeItem", props.todoItem.id);
};
</script>

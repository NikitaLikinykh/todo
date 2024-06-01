import { createStore } from "vuex";

function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function loadFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

const store = createStore({
  state() {
    return {
      todoList: loadFromLocalStorage("todoList"),
      favoriteList: loadFromLocalStorage("favoriteList"),
      draftList: loadFromLocalStorage("draftList"),
    };
  },
  mutations: {
    setItemToTodoList(state, value) {
      let todo = value;
      todo.id = state.todoList.length
        ? state.todoList[state.todoList.length - 1].id + 1
        : 1;
      todo.done = false;
      todo.createdDate = getCurrentDate();
      state.todoList.push(todo);
      saveToLocalStorage("todoList", state.todoList);
    },
    setItemToFavorite(state, item) {
      if (!state.favoriteList.find((fav) => fav.id === item.id)) {
        state.favoriteList.push(item);
        saveToLocalStorage("favoriteList", state.favoriteList);
      }
    },
    updateTodoDone(state, { id, done }) {
      const todoItem = state.todoList.find((todo) => todo.id === id);
      if (todoItem) {
        todoItem.done = done;
        saveToLocalStorage("todoList", state.todoList);
      }
    },
    updateTodoItem(state, { id, title, text, category, updatedDate }) {
      const todoItem = state.todoList.find((todo) => todo.id === id);
      if (todoItem) {
        todoItem.title = title;
        todoItem.text = text;
        todoItem.category = category;
        todoItem.updatedDate = updatedDate;
        saveToLocalStorage("todoList", state.todoList);
      }
    },
    removeItem(state, id) {
      const todoItem = state.todoList.find((todo) => todo.id === id);
      if (todoItem) {
        state.draftList.push(todoItem);
        saveToLocalStorage("draftList", state.draftList);
      }
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
      state.favoriteList = state.favoriteList.filter((fav) => fav.id !== id);
      saveToLocalStorage("todoList", state.todoList);
      saveToLocalStorage("favoriteList", state.favoriteList);
    },
  },
  getters: {
    getTodoList(state) {
      return state.todoList;
    },
    getFavoriteList(state) {
      return state.favoriteList;
    },
    getDraftList(state) {
      return state.draftList;
    },
  },
});

export default store;

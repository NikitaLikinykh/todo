<template>
  <div class="add-note">
    <input
      type="text"
      class="input"
      placeholder="Title"
      v-model="itemInfo.title"
      required
    />
    <SelectButton @update:category="handleCategoryUpdate" />
    <textarea
      class="textarea"
      placeholder="text"
      v-model="itemInfo.text"
      required
    ></textarea>
    <button class="btn" @click="addItemToTodoList">Send</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SelectButton from "../components/ui/SelectButton.vue";

export default {
  name: "add-note-page",
  components: {
    SelectButton,
  },
  data() {
    return {
      itemInfo: {
        title: "",
        text: "",
        category: "work",
      },
    };
  },
  methods: {
    ...mapMutations(["setItemToTodoList"]),
    addItemToTodoList() {
      this.setItemToTodoList(this.itemInfo);
      this.$router.push("/");
    },
    handleCategoryUpdate(newCategory) {
      console.log(newCategory);
      this.itemInfo.category = newCategory;
    },
  },
};
</script>

<style scoped>
/* Ваши стили */
</style>

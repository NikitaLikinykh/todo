<template>
  <div class="add-note">
    <NoteForm
      :note="itemInfo"
      :submitAction="addItemToTodoList"
      buttonText="Send"
      @update:note="updateNote"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import NoteForm from "../components/NoteForm.vue";

export default {
  name: "add-note-page",
  components: {
    NoteForm,
  },
  data() {
    return {
      itemInfo: {
        title: "",
        text: "",
        category: "work",
        date: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setItemToTodoList"]),
    addItemToTodoList(note) {
      this.setItemToTodoList(note);
      this.$router.push("/");
    },
    updateNote(updatedNote) {
      this.itemInfo = updatedNote;
    },
  },
};
</script>

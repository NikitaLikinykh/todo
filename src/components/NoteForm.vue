<template>
  <div class="note-form">
    <input
      type="text"
      class="input"
      placeholder="Title"
      v-model="localNote.title"
      required
    />
    <SelectButton @update:category="handleCategoryUpdate" />
    <textarea
      class="textarea"
      placeholder="text"
      v-model="localNote.text"
      required
    ></textarea>

    <button class="btn" @click="submitForm">{{ buttonText }}</button>
  </div>
</template>

<script>
import SelectButton from "../components/ui/SelectButton.vue";

export default {
  name: "NoteForm",
  components: {
    SelectButton,
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
    submitAction: {
      type: Function,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Submit",
    },
  },
  data() {
    return {
      localNote: { ...this.note },
    };
  },
  watch: {
    note: {
      handler(newVal) {
        this.localNote = { ...newVal };
      },
      deep: true,
    },
  },
  methods: {
    handleCategoryUpdate(newCategory) {
      this.localNote.category = newCategory;
      this.$emit("update:note", this.localNote);
    },
    handleDateUpdate() {
      this.$emit("update:note", this.localNote);
    },
    submitForm() {
      this.submitAction(this.localNote);
    },
  },
};
</script>

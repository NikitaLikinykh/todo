<template>
  <div class="note-form">
    <input
      type="text"
      class="input"
      placeholder="Title"
      v-model="localNote.title"
      required
    />
    <div v-if="errors.title" class="error">{{ errors.title }}</div>

    <SelectButton @update:category="handleCategoryUpdate" />

    <textarea
      class="textarea"
      placeholder="text"
      v-model="localNote.text"
      required
    ></textarea>
    <div v-if="errors.text" class="error">{{ errors.text }}</div>

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
      errors: {},
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
    validateForm() {
      this.errors = {};
      if (!this.localNote.title) {
        this.errors.title = "Title is required";
      }
      if (!this.localNote.text) {
        this.errors.text = "Text is required";
      }
      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        this.submitAction(this.localNote);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.875em;
}
</style>

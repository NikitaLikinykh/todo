<template>
  <div class="radio-inputs">
    <label class="radio">
      <input
        type="radio"
        value="work"
        name="radio"
        v-model="selectedCategory"
        @change="emitChange"
      />
      <span class="name">WORK</span>
    </label>
    <label class="radio">
      <input
        type="radio"
        value="home"
        name="radio"
        v-model="selectedCategory"
        @change="emitChange"
      />
      <span class="name">HOME</span>
    </label>
    <label class="radio">
      <input
        type="radio"
        value="study"
        name="radio"
        v-model="selectedCategory"
        @change="emitChange"
      />
      <span class="name">STUDY</span>
    </label>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SelectButton",
  setup(_, { emit }) {
    const selectedCategory = ref("work");

    const emitChange = () => {
      console.log("emit");
      emit("update:category", selectedCategory.value);
    };

    return {
      selectedCategory,
      emitChange,
    };
  },
};
</script>

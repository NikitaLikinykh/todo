<template>
  <label class="checkbox-btn">
    <input id="checkbox" type="checkbox" v-model="done" @change="emitChange" />
    <span class="checkmark"></span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  done: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:done"]);

const done = ref(props.done);

const emitChange = () => {
  console.log(done.value);
  emit("update:done", done.value);
};

watch(done, (newValue) => {
  emit("update:done", newValue);
});
</script>

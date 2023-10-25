<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps<{ open: boolean; titleOf: string }>();
const titleOf = props.titleOf;
const open = ref(props.open);
watch(
  () => props.open,
  (newVal) => {
    open.value = newVal;
  },
);
</script>

<template>
  <div
    v-if="open"
    class="fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center bg-black bg-opacity-75"
  >
    <div className="bg-secondary max-w-xs px-12 py-9 rounded-md text-center">
      <h2 class="mb-6 font-cubano text-3xl text-text">{{ titleOf }}</h2>
      <slot>
        <p>There should be some content here...</p>
      </slot>
    </div>
  </div>
</template>

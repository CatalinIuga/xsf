<script setup lang="ts">
import { ref } from "vue";
import Modal from "../Modal.vue";

defineProps<{
  confirmTitle: string;
  confirmationMessage: string;
  noButton: string;
  yesButton: string;
  something?: Function;
}>();

const openModal = ref(false);
</script>

<template>
  <Modal :titleOf="confirmTitle" :open="openModal">
    <h2 class="pb-6">
      {{ confirmationMessage }}
    </h2>
    <div class="flex items-center justify-evenly gap-4">
      <button
        class="btn w-1/2 bg-red-500 text-white hover:bg-red-700"
        type="button"
        @click="openModal = false"
      >
        {{ noButton }}
      </button>
      <button
        class="btn w-1/2 bg-primary text-white hover:bg-green-700"
        type="submit"
      >
        {{ yesButton }}
      </button>
    </div>
  </Modal>
  <button
    @click="openModal = true"
    class="btn w-full bg-red-500 capitalize text-text hover:bg-red-600"
  >
    Delete account
  </button>
</template>

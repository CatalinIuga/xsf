<script setup lang="ts">
import { RouterView } from "vue-router";

import { onMounted, ref } from "vue";
import { useAuthStore } from "./auth/auth.store";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.checkSession();
});

const loggedIn = ref(false);
authStore.$subscribe(() => {
  loggedIn.value = authStore.authenticated;
});
</script>

<template>
  <main v-cloak class="h-screen w-screen bg-background text-text">
    <div
      class="container mx-auto flex min-h-screen max-w-screen-lg flex-1 flex-col px-4"
    >
      <Navbar />
      <RouterView />
      <Footer />
    </div>
  </main>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
</style>

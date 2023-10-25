<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAuthStore } from "../auth/auth.store";

const authStore = useAuthStore();
const loggedIn = ref(false);

onMounted(() => {
  if (!authStore.authenticated) {
    loggedIn.value = false;
  }
});

authStore.$subscribe(() => {
  loggedIn.value = authStore.authenticated;
});
</script>

<template>
  <header>
    <nav class="flex h-16 items-center pt-4 text-sm">
      <h1
        class="flex items-center gap-1 font-head text-xl font-bold text-green-500"
      >
        <router-link
          to="/"
          class="outline-text-lg flex items-center font-cubano text-3xl"
        >
          <img src="../assets/logo.svg" class="h-8 w-8" alt="CrossSiteFlags" />
          XSF
        </router-link>
        <span
          class="mt-1 rounded-lg border border-dark bg-secondary px-1 font-normal text-xs text-accent outline-text"
        >
          beta
        </span>
      </h1>
      <div class="flex-1"></div>
      <ul class="relative flex items-center md:gap-6">
        <li>
          <router-link to="/writeups">Writeups</router-link>
        </li>
        <li>
          <router-link to="/blog">Blog</router-link>
        </li>
        <li v-if="authStore.role === 'admin'">
          <router-link to="/blog">Management</router-link>
        </li>
        <li>
          <router-link @click.prevent="authStore.logout" v-if="loggedIn" to="/"
            >Sign Out</router-link
          >
          <router-link v-else-if="!loggedIn" to="/signin">Sign In</router-link>
        </li>
        <li>
          <router-link v-if="loggedIn" to="/dashboard">
            <button class="btn bg-primary px-3 py-1 hover:bg-green-700">
              Dashboard
            </button>
          </router-link>

          <router-link v-else="!loggedIn" to="/signup" class="hover:text-white">
            <button class="btn bg-primary px-3 py-1 hover:bg-green-700">
              Create Account
            </button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

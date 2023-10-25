<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../auth/auth.store";
import ChangePasswordModal from "../components/custom/ChangePasswordModal.vue";
import ConfirmModal from "../components/custom/ConfirmModal.vue";

const authStore = useAuthStore();
const router = useRouter();

const userEmail = ref("");

onMounted(async () => {
  if (!authStore.authenticated) {
    router.push("/");
  }

  await fetch("http://localhost:8000/api/users/" + authStore.id, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((r) => {
      userEmail.value = r.email;
    })
    .catch(console.error);
});
</script>

<template>
  <h1 class="pt-10 text-center text-4xl">
    Hello <span class="color-effect font-bold">{{ authStore.username }}</span
    >!
  </h1>
  <section class="flex flex-1 items-stretch pb-16 pt-7">
    <div class="grid w-full grid-cols-5 gap-5">
      <div class="col-span-2 flex flex-col gap-5 rounded-md bg-secondary p-5">
        <div class="text-center font-cubano text-3xl">Profile details</div>
        <form class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-lg font-bold" for="username">Username</label>
            <input
              class="h-12 border-2 border-secondary bg-dark px-3 outline-none focus:border-primary"
              id="username"
              name="username"
              type="text"
              :value="authStore.username"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-lg font-bold" for="email">Email</label>
            <input
              class="h-12 border-2 border-secondary bg-dark px-3 outline-none focus:border-primary"
              id="email"
              name="email"
              type="email"
              :value="userEmail"
            />
          </div>
          <button
            class="btn mt-2 bg-primary text-white hover:bg-green-700"
            type="submit"
          >
            Update profile
          </button>
        </form>
        <ChangePasswordModal></ChangePasswordModal>
        <ConfirmModal
          confirm-title="WARNING"
          confirmation-message="Are you sure you want to delete your account?"
          no-button="No"
          yes-button="Yes"
        ></ConfirmModal>
      </div>
      <div class="col-span-3 rounded-md bg-secondary p-5">
        <div class="text-center font-cubano text-3xl">Your writeups</div>
        <!-- content -->
      </div>
      <!-- DELETE ACCOUNT MODAL -->
    </div>
  </section>
</template>

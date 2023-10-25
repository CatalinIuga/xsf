<script setup lang="ts">
import { ref, watch } from "vue";
import { useAuthStore } from "../../auth/auth.store";
import { passwordCheck } from "../../utils/validation";
import Modal from "../Modal.vue";


const auth = useAuthStore();

const openPasswordModal = ref(false);

// resets the forms when modal gets closed/opened
watch(
  () => openPasswordModal.value,
  () => {
    console.log("watched!");

    passwordError.value = "";
    newPasswordError.value = "";
    newPassword2Error.value = "";
    success.value = "";
    password.value = "";
    newPassword.value = "";
    newPassword2.value = "";
  },
);

const passwordError = ref("");
const newPasswordError = ref("");
const newPassword2Error = ref("");
const success = ref("");

const password = ref("");
const newPassword = ref("");
const newPassword2 = ref("");

const submitHander = async () => {
  passwordError.value = passwordCheck(password.value);
  newPasswordError.value = passwordCheck(newPassword.value);
  newPassword2Error.value = passwordCheck(newPassword2.value);

  if (newPassword.value !== newPassword2.value) {
    newPasswordError.value = "New passwords don't match!";
    return;
  }

  if (
    [passwordError, newPasswordError, newPassword2Error].every(
      (err) => err.value === "",
    )
  ) {
    const body = JSON.stringify({
      password: password.value,
      newPassword: newPassword.value,
    });
    console.log("BODY", body);

    await fetch("http://localhost:8000/api/users/" + auth.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: body,
    })
      .then((res) => res.json())
      .then(async (r) => {
        let message = r.message;
        if (message.includes("succesfully")) {
          success.value = message;
          await new Promise((resolve) => setTimeout(resolve, 3000));
          openPasswordModal.value = false;
          return;
        }
        passwordError.value = message;
      })
      .catch((err) => (passwordError.value = err.message));
  }
};
</script>

<template>
  <Modal titleOf="Change password" :open="openPasswordModal">
    <form class="flex flex-col gap-3" @submit.prevent="submitHander">
      <input
        name="password"
        v-model="password"
        class="h-12 border-2 border-secondary bg-dark px-3 outline-none focus:border-primary"
        type="password"
        placeholder="Old Password"
      />
      <div v-if="passwordError" class="flex flex-col gap-2">
        <span class="text-center text-sm text-red-500">
          {{ passwordError }}
        </span>
      </div>
      <input
        name="newPassword"
        class="h-12 border-2 border-secondary bg-dark px-3 outline-none focus:border-primary"
        type="password"
        v-model="newPassword"
        placeholder="New Password"
      />
      <div v-if="newPasswordError" class="flex flex-col gap-2">
        <span class="text-center text-sm text-red-500">
          {{ newPasswordError }}
        </span>
      </div>
      <input
        name="newPassword2"
        v-model="newPassword2"
        class="h-12 border-2 border-secondary bg-dark px-3 outline-none focus:border-primary"
        type="password"
        placeholder="New Password Again"
      />
      <div v-if="newPassword2Error" class="flex flex-col gap-2">
        <span class="text-center text-sm text-red-500">
          {{ newPassword2Error }}
        </span>
      </div>
      <div v-if="success" class="flex flex-col gap-2">
        <span class="text-center text-lg text-primary">
          {{ success }}
        </span>
      </div>
      <div class="flex items-center justify-evenly gap-4">
        <button
          class="btn w-1/2 bg-red-500 text-white hover:bg-red-700"
          type="button"
          @click="openPasswordModal = false"
        >
          Cancel
        </button>
        <button
          class="btn w-1/2 bg-primary text-white hover:bg-green-700"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </Modal>
  <button
    class="btn w-full bg-accent capitalize text-text hover:bg-indigo-500"
    @click="openPasswordModal = true"
  >
    Change password
  </button>
</template>

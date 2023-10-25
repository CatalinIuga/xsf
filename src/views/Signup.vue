<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../auth/auth.store";

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  const authenticated = await authStore.checkSession();
  if (authenticated) {
    router.push("/");
  }
});
</script>

<template>
  <section class="py-auto my-10 flex flex-1 items-stretch text-text">
    <div class="w-full">
      <div class="flex min-h-full flex-col items-center justify-center gap-8">
        <h2 class="text-center font-cubano text-4xl">Create Account</h2>
        <form class="flex w-80 flex-col gap-8">
          <div class="flex flex-col gap-2">
            <input
              class="h-12 border-2 border-secondary bg-dark px-3 outline-none focus:border-primary"
              type="text"
              placeholder="Username"
            />
            <input
              class="h-12 border-2 border-secondary bg-dark px-3 outline-none focus:border-primary"
              type="email"
              placeholder="Email"
            />

            <input
              class="h-12 border-2 border-secondary bg-dark px-3 outline-none focus:border-primary"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="flex flex-col gap-2">
            <button
              class="btn bg-primary text-white hover:bg-green-700"
              type="submit"
            >
              Sign Up
            </button>
            <span class="text-center text-sm">
              Already have an account?
              <router-link class="text-primary" to="/signin">
                Sign In
              </router-link>
            </span>
          </div>
        </form>
        <div class="flex w-80 items-center gap-4">
          <div class="flex-1 border-b border-secondary"></div>
          <h2 class="text-2xl font-bold">Or</h2>
          <div class="flex-1 border-b border-secondary"></div>
        </div>
        <div class="flex w-80 flex-col gap-2">
          <button
            class="btn flex items-center justify-center gap-2 bg-secondary p-2 text-center"
          >
            <svg
              class="svelte-fa svelte-1cj2gr0"
              style="
                height: 1em;
                vertical-align: -0.125em;
                transform-origin: center;
                overflow: visible;
              "
              viewBox="0 0 488 512"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(244 256)" transform-origin="122 0">
                <g transform="translate(0,0) scale(1,1)">
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    fill="currentColor"
                    transform="translate(-244 -256)"
                  ></path>
                </g>
              </g>
            </svg>
            Sign Up with Google
          </button>
          <button
            class="btn flex items-center justify-center gap-2 bg-secondary p-2 text-center"
          >
            <svg
              class="svelte-fa svelte-1cj2gr0"
              style="
                height: 1em;
                vertical-align: -0.125em;
                transform-origin: center;
                overflow: visible;
              "
              viewBox="0 0 640 512"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(320 256)" transform-origin="160 0">
                <g transform="translate(0,0) scale(1,1)">
                  <path
                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                    fill="currentColor"
                    transform="translate(-320 -256)"
                  ></path>
                </g>
              </g>
            </svg>
            Sign Up with Discord
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

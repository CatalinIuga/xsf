<template>
  <div class="flex h-screen flex-col items-center justify-center gap-4">
    <h1 class="font-cubano text-6xl text-primary">404</h1>
    <p class="flex flex-col text-center text-xl">
      The page you are looking for does not exist.
      <router-link
        class="mt-4 text-center font-normal text-primary underline"
        to="/"
      >
        Home
      </router-link>
    </p>
  </div>
</template>

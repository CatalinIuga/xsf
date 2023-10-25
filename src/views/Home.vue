<template>
  <section class="mt-10 flex gap-6">
    <div class="flex h-full flex-col gap-4">
      <h1 class="font-head text-7xl">
        Welcome to
        <span class="color-effect whitespace-nowrap">Cross Site Flags</span>
      </h1>
      <h2 class="font-normal text-xl text-gray">
        Also known as <span class="color-effect font-extrabold">XSF</span>, this
        is the place to view and share cybersecurity writeups and read
        interesing articles about the latest trends in the industry.
      </h2>

      <div class="flex items-center justify-center gap-5">
        <router-link to="/writeups" class="hover:text-white">
          <button
            class="btn bg-primary capitalize text-text hover:bg-green-700"
          >
            Get Started
          </button>
        </router-link>
        <router-link to="/about" class="hover:text-white">
          <button
            class="btn bg-secondary capitalize text-text hover:bg-background"
          >
            More about us
          </button>
        </router-link>
      </div>
      <div
        class="group flex animate-bounce items-center gap-2 text-xs hover:text-green-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-text duration-300 hover:transition-colors group-hover:text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
        XSF features
      </div>
    </div>
    <img src="../assets/hacker.svg" class="h-full w-1/2" alt="hero" />
  </section>

  <!-- cards section -->
  <section class="mt-10 flex gap-6"></section>

  <!-- maybe one more section for testimonials -->

  <!-- final section -->
  <section class="mt-10 flex gap-6"></section>
</template>

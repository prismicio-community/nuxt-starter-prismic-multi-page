<template>
  <header
    class="relative -mb-px border-b border-neutral-200 bg-white px-6 py-4"
  >
    <div class="mx-auto flex flex-col md:flex-row max-w-5xl items-baseline md:items-center">
      <NuxtLink
        v-if="menu && menu.data"
        to="/"
        class="relative -m-4 p-4 text-xl font-black"
      >
        <PrismicText :field="menu.data.title" wrapper="span" />
      </NuxtLink>
      <nav class="flex-grow">
        <ul v-if="menu && menu.data" class="-ml-5 -mt-5 flex justify-end">
          <li
            v-for="menuLink in menu.data.menu_links"
            v-bind:key="$prismic.asText(menuLink.label)"
            class="pt-5 pl-5"
          >
            <PrismicLink :field="menuLink.link" class="text-neutral-500">
              <PrismicText :field="menuLink.label" wrapper="span" />
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ["menu"],
};
</script>

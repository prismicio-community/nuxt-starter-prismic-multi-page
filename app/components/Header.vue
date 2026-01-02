<script setup lang="ts">
const navigation = useNavigation()
const settings = useSettings()
</script>

<template>
  <Bounded
    as="header"
    y-padding="sm"
  >
    <div
      class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none"
    >
      <NuxtLink
        to="/"
        class="text-xl font-semibold tracking-tight"
      >
        <PrismicText :field="settings?.data.siteTitle" />
      </NuxtLink>
      <nav>
        <ul
          class="flex flex-wrap gap-6 md:gap-10"
        >
          <li
            v-for="item in navigation?.data.links"
            :key="JSON.stringify(item.label)"
            class="font-semibold tracking-tight text-slate-800"
          >
            <PrismicLink
              :field="item.link"
            >
              <PrismicText :field="item.label" />
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </Bounded>
</template>


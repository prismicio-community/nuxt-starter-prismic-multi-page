<script setup lang="ts">
const prismic = usePrismic()
const { data: navigation } = useAsyncData('$navigation', () => prismic.client.getSingle('navigation'))
const { data: settings } = useAsyncData('$settings', () => prismic.client.getSingle('settings'))
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
        {{
          $prismic.asText(settings?.data.siteTitle)
        }}
      </NuxtLink>
      <nav>
        <ul
          class="flex flex-wrap gap-6 md:gap-10"
        >
          <li
            v-for="item in navigation?.data.links"
            :key="$prismic.asText(item.label) || ''"
            class="font-semibold tracking-tight text-slate-800"
          >
            <PrismicLink
              :field="item.link"
            >
              {{
                $prismic.asText(item.label)
              }}
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </Bounded>
</template>


import type { RichTextComponents } from '@prismicio/vue';
import Preformatted from './Preformatted.vue';

const components: RichTextComponents = {
  heading1: { class: "font-semibold leading-tight tracking-tight md:leading-tight text-4xl md:text-5xl mb-7 mt-12 first:mt-0 last:mb-0" },
  heading2: { class: "font-semibold leading-tight tracking-tight md:leading-tight text-3xl md:text-4xl mb-7 mt-12 first:mt-0 last:mb-0" },
  heading3: { class: "font-semibold leading-tight tracking-tight md:leading-tight text-xl md:text-2xl mb-7 mt-12 first:mt-0 last:mb-0" },
  paragraph: { class: "mb-7 last:mb-0" },
  oList: { class: "mb-7 pl-4 last:mb-0 md:pl-6" },
  oListItem: { class: "mb-1 list-decimal pl-1 last:mb-0 md:pl-2" },
  list: { class: "mb-7 pl-4 last:mb-0 md:pl-6" },
  listItem: { class: "mb-1 list-disc pl-1 last:mb-0 md:pl-2" },
  strong: { class: "font-semibold" },
  hyperlink: { class: "underline decoration-1 underline-offset-2" },
  preformatted: Preformatted,
}

export default components;
<template>
  <section class='content-section quote container'>
    <blockquote class="block-quotation">
      {{ $prismic.asText(slice.primary.quotetext) }}
    </blockquote>
    <div v-if="slice.variation === 'quoteReference'">
      <cite>
        <prismic-rich-text :field="slice.primary.reference" />
      </cite>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.quote blockquote {
  display: block;
  font-family: "Lora", Serif;
  font-size: 36px;
  font-style: italic;
  font-weight: normal;
  color: #484D52;
  letter-spacing: 1.14;
  line-height: 1.5em;
  quotes: "“" "”" "‘" "’";
  text-align: center;
  margin-bottom: 12px;
}
.quote blockquote:before {
  color: #e9e9e9;
  content: open-quote;
  font-family: "Lora", Serif;
  font-size: 2.5em;
  font-weight: 900;
  line-height: 0.1em;
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: -0.3em;
}
.quote blockquote:after {
  color: #e9e9e9;
  content: open-quote;
  font-family: "Lora", Serif;
  font-size: 2.5em;
  font-weight: 900;
  line-height: 0.1em;
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: -0.3em;
  content: close-quote;
}
.quote div {
  width: 300px;
  float: right;
}
.quote div cite {
  display: flex;
  line-height: 18px;
}
.quote div cite:before {
  content: '-';
  margin: 0px 4px 0px 0px;
}
@media (max-width: 767px) {
  .content-section {
    margin-bottom: 2rem;
  }

  .quote {
    font-size: 20px;
  }
}
</style>

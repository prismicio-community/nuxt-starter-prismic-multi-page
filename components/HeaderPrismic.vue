 <template>
  <header class="site-header">
    <p v-if="$store.state.menu === 'Please create a menu document'" class="logo">{{ $store.state.menu }}</p>
    <nuxt-link to="/" class="logo">{{ $prismic.asText($store.state.menu.title) }}</nuxt-link>
    <nav>
      <ul>
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
          <prismic-link :field="menuLink.link">{{ $prismic.asText(menuLink.label) }}</prismic-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-prismic',
}
</script>

<style scoped>
.site-header {
  height: 30px;
  padding: 20px 0;
  color: #484d52;
  font-weight: 700;
}
.site-header a {
  color: #484d52;
  font-weight: 700;
}
.site-header nav a:hover {
  color: #72767B;
}

.site-header .logo {
  display: inline-block;
  font-size: 22px;
  font-weight: 900;
}
.site-header nav {
  float: right;
}
.site-header nav ul {
  margin: 0;
  padding-left: 0;
}
.site-header nav li {
  display: inline-block;
  margin-left: 40px;
}

@media (max-width: 1060px) {
  .site-header {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (max-width: 767px) {
  .site-header {
    height: auto;
  }

  .site-header {
    position: absolute;
    left: 0;
    right: 0;
  }

  .site-header .logo {
    display: block;
    text-align: center;
  }
  .site-header nav {
    float: none;
    text-align: center;
  }
  .site-header nav li {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>

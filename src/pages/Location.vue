<template>
  <Layout>
      <content-header 
        :title="$static.metadata.siteName" 
        :sub="$static.metadata.siteDescription"
        image="hero.jpg">
        
      </content-header>

      <div class="container mx-auto">
          <div class="flex flex-wrap my-4 justify-items-center mx-aut">
            <h1 class="divide-blue-300">map</h1>
        </div>
      </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";


export default {
  metaInfo: {
    title: "Privater Automarkt Radolfzell"
  },
  components: {
    ContentHeader
  }
};
</script>

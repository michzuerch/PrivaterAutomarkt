<template>
  <Layout>
    <div class="container mx-auto min-h-32 p-6">
      <google-map name="main" />
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
import GoogleMap from '~/components/Partials/GoogleMap'

export default {
  metaInfo: {
    title: "Privater Automarkt Radolfzell",
  },
  components: {
    ContentHeader,
    GoogleMap
  },
};
</script>

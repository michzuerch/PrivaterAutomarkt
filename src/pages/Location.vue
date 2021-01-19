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
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus officiis facere non sit suscipit deleniti blanditiis necessitatibus, consectetur laboriosam officia quo cum eius unde architecto et itaque ullam at? Maiores tempore laboriosam voluptatum veniam quod minus odio ab corrupti ratione facere tenetur sequi illo aliquam nulla, totam eius libero! Dolore ipsum qui magnam asperiores labore a nihil cumque consectetur quaerat, sed temporibus delectus suscipit et, cum expedita ex doloribus reiciendis praesentium nesciunt blanditiis perspiciatis. Cupiditate amet placeat consequuntur quisquam itaque aut cum, dolorum quos magni incidunt laboriosam suscipit dolor soluta! Suscipit, ducimus tenetur non id voluptatum placeat. Quod, alias possimus!</div>
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

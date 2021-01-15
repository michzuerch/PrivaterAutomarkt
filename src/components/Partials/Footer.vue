<template>
  <div class="bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-400 text-center text-sm">
    <div class="container mx-auto py-16">
      <div class="mb-4">
        <p>
          Copyright {{ new Date().getFullYear() }} by {{ $static.metadata.siteName}} &middot; 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    icon(icon) {
      return ['fab', icon]
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName

    social {
      name
      icon
      link
    }
  
    footerNavigation {
        name
        link
        external
    }
  }
}
</static-query>
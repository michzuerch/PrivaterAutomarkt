<template>
    <nav class="block md:hidden flex items-center justify-between flex-wrap container mx-auto py-4 dark:text-gray-400">
      <div class="block flex-grow flex items-center w-auto mx-4">
        <div class="flex mr-6">
          <a
            role="button"
            @click.prevent="openNavbarModal()"
            aria-label="Open Navigation"
            title="Open Navigation"
          >
            <font-awesome :icon="['fas', 'bars']"></font-awesome>
          </a>
        </div>
        <div class="flex-grow text-center font-bold text-lg">
          <div class="flex">
          <g-image
            class="w-8 h-8 rounded-lg bg-gray-200 mr-3"
            alt="Company Logo" 
            src="~/favicon.png" 
            width="150"
          />
          <span class="font-semibold text-xl tracking-tight">{{ $static.metadata.siteName }}</span>
          </div>
        </div>

        <div class="inline-block">
          <ul class="list-none flex justify-center md:justify-end">
            <li>
              <theme-switcher v-on="$listeners" :theme="theme" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import ThemeSwitcher from "~/components/Navbar/ThemeSwitcher.vue";

export default {
  props: {
    theme: {
      type: String
    },
    showNavigation: {
      type: Boolean
    }
  },
  components: {
    ThemeSwitcher
  },
  methods: {
    openNavbarModal() {
      this.$emit("openNavbarModal");
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

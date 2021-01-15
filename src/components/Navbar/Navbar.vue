<template>
  <div class="h-16 dark:bg-black bg-red">
    <headroom :classes="{'initial' : 'headroom bg-white dark:bg-black border-b dark:border-gray-900'}" :downTolerance="10" :upTolerance="20" :offset="15" @unpin="navbarUnpinned=true" @pin="navbarUnpinned=false">
      <navbar-desktop
        v-on="$listeners" 
        :theme="theme"
        :hideSubnav="this.navbarUnpinned"
      />

      <navbar-mobile
        @openNavbarModal="openNavbarModal"
        v-on="$listeners"
        :theme="theme"
      />

    </headroom>

    <modal :showModal="this.showNavbarModal" @close="closeNavbarModal">
      <navbar-modal></navbar-modal>
    </modal>
  </div>
</template>

<script>
import NavbarDesktop from "~/components/Navbar/NavbarDesktop.vue";
import NavbarMobile from "~/components/Navbar/NavbarMobile.vue";
import Modal from "~/components/Modal/Modal.vue";
import NavbarModal from "~/components/Modal/NavbarMobileModal.vue";
import { headroom } from "vue-headroom";

export default {
  props: {
    theme : {
      type: String
    }
  },
  data: function() {
    return {
      showNavbarModal: false,
      headerHeight: 100,
      navbarUnpinned: false
    };
  },
  components: {
    NavbarDesktop,
    NavbarMobile,
    Modal,
    NavbarModal,
    headroom
  },
  methods: {
    openNavbarModal() {
      this.showNavbarModal = true;
    },
    closeNavbarModal() {
      this.showNavbarModal = false;
    }
    
  },
  watch:{
    $route (to, from){
      this.closeNavbarModal();
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

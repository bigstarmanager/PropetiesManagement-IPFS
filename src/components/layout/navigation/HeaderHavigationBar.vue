<template>
  <Disclosure
    as="nav"
    class="bg-purple-black border-b border-purple-three border-gray-200"
  >
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-16 main-container">
      <div class="flex justify-between items-center h-16">
        <div class="flex w-full">
          <router-link to="/welcome">
            <img
              src="../../../assets/logo/full/frabric_logo_full-white.png"
              class="main_logo"
              alt="main_logo"
            />
          </router-link>
          <!-- <div class="hidden sm:-my-px sm:flex sm:space-x-8">
            <div 
              v-for="item in navigation.items" :key="item.name"
              v-on:click="transitTo(item.path)"
              :class="[this.isItemCurrent(item) ? 'border-foam border-opacity-75 text-foam text-opacity-75' : 'border-transparent text-foam text-opacity-25 hover:text-opacity-50', 'inline-flex items-center px-1 pt-1 border-b text-md font-medium cursor-pointer']" 
            >
              {{ item.name }}
            </div>
          </div> -->
        </div>
        <SignerAddress class="h-8" />
      </div>
    </div>
  </Disclosure>
</template>

<script>
import { Disclosure } from "@headlessui/vue";
import SignerAddress from "../../views/address/SignerAddress.vue";
import { useRoute } from "vue-router";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderHavigationBar",
  components: {
    Disclosure,
    SignerAddress,
  },
  data() {
    return {
      navigation: {
        items: [
          // { name: 'Welcome', path: '/welcome' },
          // { name: 'Registement', path: '/registeproperty' },
          // { name: 'UploadDocumentPage1', path: '/uploaddocumentpage1' },
          // { name: 'UploadDocumentPage2', path: '/uploaddocumentpage2' },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["currentNavigationItem"]),
  },
  methods: {
    ...mapActions(["goBack"]),
    isItemCurrent(item) {
      return item.path == useRoute().path;
    },
    transitTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.main_logo {
  width: 130px !important;
}
</style>
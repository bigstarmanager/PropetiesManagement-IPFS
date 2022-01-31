<template>
  <div class="flex flex-col justify-center items-center main-container">
    <div class="text-center">
      <div class="my-10">
        <p class="text-3xl">Welcome to Frabric</p>
      </div>
      <div v-if="address != null">
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          to="/registeproperty"
        >
          <button-example
            label="Tokenize New Property"
            customClasses="w-full bg-action-blue"
          />
        </router-link>
      </div>
      <div v-else>Please click "Connect Wallet" button...</div>
      <!-- <div>{{address}}</div> -->
    </div>
    <!-- <form-component /> -->
  </div>
</template>
<script>
import ButtonExample from "../common/ButtonExample.vue";
import { mapGetters, mapActions } from "vuex";
// import FormComponent from "../../FormComponent.vue";

export default {
  name: "Welcome",
  components: {
    ButtonExample,
    // FormComponent,
  },
  computed: {
    ...mapGetters({
      address: "userWalletAddress",
    }),
  },
  methods: {
    ...mapActions({
      sync: "syncWallet",
    }),
  },
};
</script>
<style scoped>
</style>
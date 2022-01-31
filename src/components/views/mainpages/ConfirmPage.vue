<template>
  <div class="flex justify-center items-center main-container">
    <div class="text-center">
      <div class="my-10">
        <p class="text-3xl">Do you have your Private Key?</p>
      </div>
      <div class="flex justify-around">
        <router-link
          class="font-semibold text-gray-700  hover:underline"
          to="/welcome"
        >
          <button-example label="No" customClasses="w-full bg-red-500"
        /></router-link>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          to="/registeproperty"
        >
          <button-example label="Yes" customClasses="w-full bg-action-blue"
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonExample from '../common/ButtonExample.vue';

export default {
  name: "ConfirmPage",
  components: {
    ButtonExample,
  },
};
</script>

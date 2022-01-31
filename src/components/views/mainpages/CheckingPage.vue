<template>
  <div class="flex justify-center items-center main-container">
    <div class="text-center">
      <div class="my-10">
        <p class="text-3xl">Thank you! Your submission is being reviewed by Frabric.</p>
      </div>
      <div class="flex justify-around">
        <router-link
          class="font-semibold text-gray-700  hover:underline"
          to="/welcome"
        >
          <button-example label="Okay" customClasses="w-full bg-action-blue"
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonExample from '../common/ButtonExample.vue';

export default {
  name: "CheckingPage",
  components: {
    ButtonExample,
  },
};
</script>

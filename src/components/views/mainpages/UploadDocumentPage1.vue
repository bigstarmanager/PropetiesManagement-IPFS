<template>
  <div class="flex flex-col justify-center items-center main-container">
    <div class="my-10">
      <p class="text-3xl">Please select the documents for your property (1)</p>
    </div>
    <div
      class="
        bg-level-1-light
        opacity-95
        shadow-lg
        overflow-hidden
        rounded-lg
        px-8
        pt-8
        pb-4
      "
    >
      <div class="text-center w-full">
        <multi-upload-1 />
      </div>
    </div>
  </div>
</template>
<script>
import MultiUpload1 from '../common/MultiUpload1.vue';
export default {
  name: "UploadDocumentPage1",
  components: {
    MultiUpload1
  },
};
</script>
<style scoped>
</style>
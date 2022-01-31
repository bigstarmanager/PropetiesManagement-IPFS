<style scoped>
input[type="file"] {
  display: none;
}

span.remove-file {
  color: black !important;
  cursor: pointer;
  opacity: 1;
}
/* .remove-file {
  padding: 1px 10px !important;
} */
</style>

<template>
  <form v-on:submit.prevent="submitFiles">
    <div class="container">
      <div class="large-12 medium-12 small-12 cell">
        <label for="select-files">
          <input
            id="select-files"
            type="file"
            multiple
            @change="handleFilesUpload($event)"
          />
        </label>
      </div>
      <div
        class="
          flex
          justify-center
          overflow-hidden
          align-center
          border border-level-2-light
          rounded-lg
        "
      >
        <div class="w-full">
          <p class="description-text py-3 bg-level-2-light text-lg">
            You can upload up to 10 documents to prove that your own the
            property in your jurisdiction.
          </p>
          <div
            v-for="(file, key) in files"
            v-bind:key="'file-' + key"
            class="
              file-listing
              w-full
              flex
              align-center
              bg-level-2-dark
              border-t border-level-2-light
              justify-between
              px-40
              py-3
            "
          >
            <p class="text-center my-auto">
              {{ file.name }}
            </p>
            <button
              class="remove-file bg-red-500 rounded-lg px-5"
              v-on:click="removeFile(key)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <br />
      <div class="select-button_group flex justify-center">
        <div class="w-80">
          <button-example
            v-on:click="addFiles()"
            label="Add Files"
            customClasses="w-1/2 bg-action-blue "
          />
          <!-- <button v-on:click="addFiles()">Add Files</button> -->
        </div>
        <br />
        <div class="w-80">
          <router-link to="/checkingpage">
            <button-example
              v-on:click="submitFiles()"
              label="Submit"
              customClasses="w-1/2 bg-pink-400"
            />
          </router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import ButtonExample from "./ButtonExample.vue";

export default {
  components: { ButtonExample },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    addFiles() {
      document.getElementById("select-files").click();
    },
    handleFilesUpload(event) {
      let uploadedFiles = event.target.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
    },
    submitFiles() {
      axios;
      console.log(this.files);
      let totalData = this.files;
      let result = Object.keys(totalData).map((key) => [ totalData[key]["name"]]);
      // const data = JSON.parse(result);
      console.log(result);
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
  },
};
</script>
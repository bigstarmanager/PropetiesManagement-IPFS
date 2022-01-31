

<template>
  <div>
    <div class="">
      <input
        type="file"
        id="file"
        accept="image/*"
        @change="handleFileUpload($event)"
      />
      <div
        class="
          cover-image_body
          border border-level-2-light
          rounded-lg
          w-full
          mb-3
        "
      >
        <div
          :style="{
            background: 'url(' + imagePreview + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }"
          class="preview-image rounded-lg relative"
          v-show="showPreview"
        >
        </div>
        <div class="hidden " id="file-path"></div>
      </div>
      <div>
        <button-example
          v-on:click="addFiles()"
          label="Add Files"
          customClasses="  bg-level-2-light add-button text-foam"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonExample from "./ButtonExample.vue";
import { create } from "ipfs-http-client";


export default {
  components: { ButtonExample },

  data() {
    return {
      file: "",
      showPreview: false,
      imagePreview: "",
    };
  },
  methods: {
    addFiles() {
      document.getElementById("file").click();
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          const client = create("https://ipfs.infura.io:5001/api/v0");
          const added = client.add(this.file).then(
            (data) => {
              console.log(data.path);
              const url = `https://ipfs.infura.io/ipfs/`;
              console.log(added);
              let coverImage = url + data.path;
              document.getElementById("cover_image").value = coverImage;
              this.showPreview = true;
              this.imagePreview = reader.result;
            },
            (error) => {
              console.log("Error uploading file: ", error);
            }
          );
        }.bind(this),
        false
      );
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },
  },
};
</script>
<style scoped>
.preview-image {
  max-width: auto !important;
  height: 100%;
}
#file {
  display: none;
}

.cover-image_body {
  height: 400px;
  overflow: hidden;
}

.upload-image-preview {
  top: 50%;
  left: 50%;
}
</style>

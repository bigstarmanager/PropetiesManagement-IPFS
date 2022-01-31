<template>
  <div class="flex justify-center align-center">
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
      <div class="flex flex-col items-center justify-center">
        <input type="file" id="file" @change="handleFileUpload($event)" />
        <div class="border rounded-lg overflow-hidden">
          <p class="description-text py-3 px-10 bg-level-2-light text-lg">
            You can upload up to 10 documents to prove that your own the
            property in your jurisdiction.
          </p>
          <div id="cover_path"></div>
        </div>
        <div class="flex mt-10">
          <button-example
            v-on:click="addFiles()"
            label="Add Files"
            customClasses="bg-level-2-light mr-10 add-button text-foam"
          />
          <!-- <router-link to="/uploaddocumentpage2"> -->
          <button-example
            v-on:click="submitFiles()"
            label="Submit"
            customClasses="bg-pink-400 add-button text-foam"
          />
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
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
              let ele = document.createElement("p");

              ele.style.marginTop = "10px";
              ele.style.marginBottom = "10px";
              ele.innerHTML = coverImage;
              document.getElementById("cover_path").append(ele);
            },
            (error) => {
              console.log("Error uploading file: ", error);
            }
          );
        }.bind(this),
        false
      );
      if (this.file) {
        if (!/\.(jpe?g|png|pdf)$/i.test(this.file.name)) {
          alert("You can save only PDF, PNG, JPEG.");
        } else {
          reader.readAsDataURL(this.file);
        }
      }
    },
    submitFiles() {
      let obj = { documents: [] };
      let govID = {};
      let arr = document.getElementById("cover_path").children;

      arr = Array.from(arr).map((item) => item.innerHTML);
      arr.forEach((item) => {
        obj.documents.push({ fileURL: item });
      });
      govID.govID = obj;

      let upload1 = JSON.stringify(govID);
      window.localStorage.setItem("mainData1", upload1);

      let second_data = JSON.parse(window.localStorage.getItem("mainData1"));
      console.log(second_data);

      if (second_data) {
        window.location.href = "#/uploaddocumentpage2";
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
#cover_path * {
  padding: 10px !important;
  text-align: center !important;
}
</style>

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
            You can upload up to two documents for their government-issued ID to
            show their identity.
          </p>
          <div id="cover_path"></div>
        </div>
        <div class="hidden" id="ethAddress">{{ address }}</div>

        <div class="flex mt-10">
          <button-example
            v-on:click="addFiles()"
            label="Add Files"
            customClasses="bg-level-2-light mr-10 add-button text-foam"
          />
          <!-- <router-link to="/checkingpage"> -->
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
import { mapGetters, mapActions } from "vuex";

export default {
  components: { ButtonExample },
  computed: {
    ...mapGetters({
      address: "userWalletAddress",
    }),
  },
  data() {
    return {
      file: "",
      showPreview: false,
      imagePreview: "",
    };
  },
  methods: {
    ...mapActions({
      sync: "syncWallet",
    }),
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
      let ethAdderss = document.getElementById("ethAddress").innerHTML;

      let obj = { documents: [] };
      let legal = {};
      let arr = document.getElementById("cover_path").children;

      arr = Array.from(arr).map((item) => item.innerHTML);
      arr.forEach((item) => {
        obj.documents.push({ fileURL: item });
      });
      legal.legal = obj;

      let upload2 = JSON.stringify(legal);
      window.localStorage.setItem("mainData2", upload2);

      let third_data = JSON.parse(window.localStorage.getItem("mainData2"));
      console.log(third_data);

      /////////////////////////////////////////////////////// totaldata save to localstorage //////////////////////////////////////////

      let totalData = {};
      totalData.ethAdderss = ethAdderss;
      totalData.property = JSON.parse(window.localStorage.getItem("mainData"));
      totalData.owner = JSON.parse(window.localStorage.getItem("mainData1"));
      totalData.ownership = JSON.parse(
        window.localStorage.getItem("mainData2")
      );

      let finalData = JSON.stringify(totalData);
      console.log(finalData);
      
      /* make json */
      
      const blob = new Blob([finalData], { type: "text/plain" });
      const e = document.createEvent("MouseEvents"),
        a = document.createElement("a");
      a.download = "submissions.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
      if (third_data) {
        window.location.href = "#/checkingpage";
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

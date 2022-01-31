<template>
  <div class="flex justify-center items-center main-container">
    <div class="text-center px-40">
      <div class="my-10">
        <p class="text-3xl">Please register your property</p>
      </div>
      <div
        class="
          mt-8
          bg-level-1-light
          opacity-95
          shadow-lg
          overflow-hidden
          rounded-lg
        "
      >
        <form
          class="h-full"
          v-on:submit.prevent="submitForm"
          autocomplete="off"
        >
          <div class="h-full shadow rounded-lg">
            <div class="h-full py-4 px-4">
              <div class="h-full flex justify-between">
                <div class="w-2/5 pt-4 px-3">
                  <div class="w-full mx-auto">
                    <file-upload />
                  </div>
                </div>
                <div class="w-3/5 flex flex-wrap">
                  <div class="w-full pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-52
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Address
                        </div>
                      </div>
                      <input
                        required
                        type="text"
                        class="
                          text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="address"
                        v-model="form.address"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="w-1/2 pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-72
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Current Rent ($)
                        </div>
                      </div>
                      <input
                        required
                        type="text"
                        class="
                          text-right text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="current_rent"
                        v-model="form.currentRent"
                        placeholder="0.0"
                        @keypress="isNumber($event)"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-72
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Market Value ($)
                        </div>
                      </div>
                      <input
                        required
                        type="text"
                        class="
                          text-right text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="market_value"
                        v-model="form.marketValue"
                        placeholder="0.0"
                        @keypress="isNumber($event)"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-72
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Living Space (sqft )
                        </div>
                      </div>
                      <input
                        required
                        type="text"
                        class="
                          text-right text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="area"
                        v-model="form.area"
                        placeholder="0.0"
                        @keypress="isNumber($event)"
                      />
                    </div>
                  </div>

                  <div class="w-1/2 pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-72
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Annualized yield (%)
                        </div>
                      </div>
                      <input
                        required
                        type="text"
                        class="
                          text-right text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="gross_yield"
                        v-model="form.grossYieldPct"
                        placeholder="0.0"
                        @keypress="isNumber($event)"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-72
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Year Built
                        </div>
                      </div>
                      <input
                        required
                        type="text"
                        class="
                          text-right text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="year_built"
                        v-model="form.yearBuilt"
                        placeholder="0.0"
                        @keypress="isNumber($event)"
                      />
                    </div>
                  </div>
                  <div class="w-1/4 pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-72
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Bedroom
                        </div>
                      </div>
                      <input
                        required
                        type="text"
                        class="
                          text-right text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="bed_room"
                        v-model="form.bdCount"
                        placeholder="0.0"
                        @keypress="isNumber($event)"
                      />
                    </div>
                  </div>
                  <div class="w-1/4 pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-72
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Bathroom
                        </div>
                      </div>
                      <input
                        required
                        type="text"
                        class="
                          text-right text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="bath_room"
                        v-model="form.baCount"
                        placeholder="0.0"
                        @keypress="isNumber($event)"
                      />
                    </div>
                  </div>
                  <div class="w-full pt-4 px-3">
                    <div class="h-12 rounded-md shadow-sm flex">
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          bg-level-2-light
                          rounded-l-lg
                          w-52
                        "
                      >
                        <div class="text-foam font-bold text-opacity-80">
                          Cover Image (URL)
                        </div>
                      </div>
                      <input
                        required
                        disabled
                        type="text"
                        class="
                          text-lg
                          font-bold
                          border-level-2-light
                          bg-level-2-dark
                          focus:ring-action-blue focus:border-action-blue
                          flex-grow
                          block
                          w-full
                          min-w-0
                          rounded-none rounded-r-md
                          border-gray-300
                        "
                        id="cover_image"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="w-full pt-4 px-3">
                    <textarea
                      required
                      name="description"
                      rows="5"
                      class="
                        w-full
                        rounded-md
                        shadow-sm
                        text-lg
                        font-bold
                        border-level-2-light
                        bg-level-2-dark
                        focus:ring-action-blue focus:border-action-blue
                        rounded-none rounded-r-md
                        border-gray-300
                        resize-none
                      "
                      id="description"
                      v-model="form.description"
                      placeholder="Please type description . . ."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <div class="mt-8 flex flex-col px-3">
                  <button
                    type="submit"
                    class="
                      button
                      w-full
                      rounded-lg
                      p-3
                      text-sm
                      md:text-lg
                      outline-none
                      focus:outline-none
                      bg-action-blue
                      text-gray-900
                      font-medium
                      hover:opacity-80
                    "
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import FileUpload from "../common/FileUpload.vue";
import axios from "axios";

export default {
  name: "RegisteProperty",
  components: {
    FileUpload,
  },
  data() {
    return {
      form: {
        address: "",
        currentRent: "",
        marketValue: "",
        area: "",
        room: {},
        grossYieldPct: "",
        yearBuilt: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      let coverImage = document.getElementById("cover_image").value;
      axios;

      let formData = this.form;
      formData.coverImage = coverImage;
      formData.room.bdCount = this.form.bdCount;
      formData.room.baCount = this.form.baCount;
      delete formData.bdCount;
      delete formData.baCount;

      let data = JSON.stringify(formData);
      window.localStorage.setItem("mainData", data);

      let first_data = JSON.parse(window.localStorage.getItem("mainData"));

      if (first_data) {
        window.location.href = "#/uploaddocumentpage1";
      }
    },

    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>

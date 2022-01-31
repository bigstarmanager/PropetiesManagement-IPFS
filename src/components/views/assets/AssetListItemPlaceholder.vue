<template>
  <div>
    <section aria-labelledby="asset-title">
      <div class="rounded-lg border-gradient-br-l2-light-purple-three-level-2-dark border-transparent border-solid border-4 overflow-hidden shadow">
        <div class="flex flex-col items-center justify-center p-8">
          <div class="text-md text-foam text-centet">
            Your Next Asset Will Be Here
          </div>
          <button-example label="Go to Marketplace" customClasses="mt-4" @click="openMarketplace"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ButtonExample from '../common/ButtonExample.vue'

export default {
  name: 'AssetListItemPlaceholder',
  components: {
    ButtonExample,
  },
  methods: {
    openMarketplace() {
      this.$router.push('/market')
    }
  },
}
</script>
<template>
  <div>
    <h3 class="text-variable">Helloworld</h3>
    <h3 class="text-mixin">Helloworld</h3>



    <v-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>
  </v-card>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.text-variable {
  background-color: $error;
}
.text-mixin {
  @include gradient($primary,$error)
}
</style>

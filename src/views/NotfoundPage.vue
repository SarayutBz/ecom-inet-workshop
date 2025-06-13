<template>
    <v-container class="fill-height d-flex justify-center align-center">
        <v-card elevation="4" style="display: inline-block; padding: 16px;">
            <v-card-item>
                 <v-icon size="64" class="mb-2">mdi-alert-circle-outline</v-icon>
                <v-card-title>
                    404 Not Found
                </v-card-title>
            </v-card-item>
            <v-card-text class="text ">
                Sorry, the page you are looking for cannot be found.<br>
                Please check the URL or return to the homepage.
            </v-card-text>
            <v-card-actions>
                <router-link to="/app/home">
                    <v-btn  class="btn" >Return</v-btn>
                </router-link>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.text{
    background-color: $surface; 
}
.btn{
    background-color: black;
    color: white;
}
</style>
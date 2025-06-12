<template>
    <v-container class="fill-height d-flex justify-center align-center">
        <v-card width="400" elevation="4">
            <v-card-title class="text-h5 text-center">เข้าสู่ระบบ</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="อีเมล" type="email" required />

                    <v-text-field label="รหัสผ่าน" type="password" required />

                    <v-btn type="submit" color="primary" block class="mt-4">
                        เข้าสู่ระบบ
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
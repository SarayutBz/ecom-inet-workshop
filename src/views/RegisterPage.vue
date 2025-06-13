<template>
    <v-container class="fill-height d-flex justify-center align-center">
        <v-card width="400" elevation="4">
            <v-card-title class="text-h5 text-center">สมัครสมาชิก</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="firstname" label="Firstname" type="text" required />
                    <v-text-field v-model="lastname" label="Lastname" type="text" required />
                    <v-text-field v-model="username" label="Username" type="text" required />
                    <v-text-field v-model="password" label="Password" type="password" required />
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex flex-column gap-3">
                <v-btn type="button" block style="background-color: black; color: white;" @click="handleRegister">
                    สมัครสมาชิก
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/plugins/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const firstname = ref('')
const lastname = ref('')
const username = ref('')
const password = ref('')

function handleRegister() {
    if (!firstname.value || !lastname.value || !username.value || !password.value) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        return
    }

    auth.register( username.value, password.value, firstname.value, lastname.value)
    console.log('Registration complete:', auth)
    router.push('/auth/login')
}
</script>

<style scoped></style>
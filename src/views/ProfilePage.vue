<template>
    <v-container class="fill-height d-flex justify-center align-center">
        <v-card width="400" elevation="4" class="pa-4">
            <v-card-title class="text-h5 text-center">โปรไฟล์</v-card-title>
            <v-card-text class="d-flex flex-column align-center gap-2">
                <v-avatar size="64" class="mb-4">
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User Avatar" />
                </v-avatar>
                <div class="text-center mb-2">
                    <strong>ข้อมูลผู้ใช้</strong>
                <div>
                    Username: {{ username }} 
                </div>
                <div>
                    ชื่อ-สกุล: {{ firstname }} {{ lastname }}
                </div>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn type="submit" block class="mt-4" style="background-color: black; color: white;"
                    @click="handleLogout">
                    ออกจากระบบ
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/plugins/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const username = computed(() => auth.username)
const firstname = computed(() => auth.firstname)
const lastname = computed(() => auth.lastname)

function handleLogout() {
    auth.logout()
    router.push('/')
}
</script>

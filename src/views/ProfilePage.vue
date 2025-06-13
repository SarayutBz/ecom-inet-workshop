<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card width="450" elevation="4" class="pa-4">
      <v-card-title class="text-h5 text-center">โปรไฟล์</v-card-title>
      <v-card-text class="d-flex flex-column align-center gap-3">
        <v-avatar size="80" class="mb-4">
            <v-img :src="defaultAvatar" alt="Profile Avatar" />
        </v-avatar>

        <div><strong>Username:</strong> {{ profile?.username}}</div>
        <div><strong>ชื่อ-สกุล:</strong> {{ profile?.name.firstname }} {{ profile?.name.lastname  }}</div>
        <div><strong>อีเมล:</strong> {{ profile?.email}}</div>
        <div><strong>เบอร์โทร:</strong> {{ profile?.phone}}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          class="mt-4"
          style="background-color: black; color: white;"
          @click="handleLogout"
        >
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

const profile = computed(() => auth.profile)

const defaultAvatar = 'https://randomuser.me/api/portraits/lego/1.jpg'

function handleLogout() {
  auth.logout()
  router.push('/')
}
</script>

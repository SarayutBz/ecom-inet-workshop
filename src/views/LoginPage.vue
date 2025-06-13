<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card width="400" elevation="4">
      <v-card-title class="text-h5 text-center">เข้าสู่ระบบ</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="username" label="Username" type="text" required />
          <v-text-field v-model="password" label="Password" type="password" required />
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex flex-column gap-3">
        <v-btn
          type="button"
          block
          style="background-color: black; color: white;"
          @click="handleLogin"
        >
          เข้าสู่ระบบ
        </v-btn>
        <v-btn
          type="button"
          block
          style="background-color: gray; color: white;"
          @click="handleRegister"
        >
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

const auth = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

async function handleLogin() {
  if (!username.value || !password.value) {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    return
  }

  const success = await auth.login(username.value, password.value)
  if (success) {
    router.push('/app/home')
  } else {
    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
  }
}

function handleRegister() {
  router.push('/register')
}
</script>

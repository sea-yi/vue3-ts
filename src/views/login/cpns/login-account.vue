<template>
  <div>
    <el-form label-width="50px">
      <el-form-item label="账号">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    return {
      account
    }
  }
})
</script>

<style scoped></style>

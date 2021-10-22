<template>
  <div class="user">
    <div class="search">
      <el-form label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <el-col :span="8">
          <el-form-item label="密码">
            <el-input show-password />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="喜欢的运动">
            <el-select />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="喜欢的运动">
            <el-select>
              <el-option>篮球</el-option>
              <el-option>足球</el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建">
            <el-date-picker></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div class="content">user</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>

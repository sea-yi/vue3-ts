<template>
  <div class="page-content">
    <sy-table :listData="userList" v-bind="contentTableConfig">
      <!-- header插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>

      <!-- 列表插槽 -->
      <template #status="scope">
        <el-button size="mini" :type="scope.row.enable ? 'success' : 'danger'" plain>{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text">编辑</el-button>
          <el-button icon="el-icon-delete" size="mini" type="text">删除</el-button>
        </div>
      </template>
    </sy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

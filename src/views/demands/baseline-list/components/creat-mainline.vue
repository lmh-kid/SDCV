<template>
  <a-modal v-model:visible="visible" @ok="submit" @cancel="visible = false">
    <a-form :model="form">
      <a-form-item field="name" label="名称">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item field="post" label="分支">
        <a-input v-model="form.branch" />
      </a-form-item>
      <a-form-item field="post" label="描述">
        <a-input v-model="form.describe" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { createMainline } from '@/api/demand';

  const visible = ref(false);
  const form = ref<any>({});

  const submit = async () => {
    if (!form.value.name) return;
    if (!form.value.branch) return;
    await createMainline({
      name: form.value.name,
      branch: form.value.branch,
      describe: form.value.describe || '',
    });
  };

  defineExpose({
    visible,
  });
</script>

<style lang="less" scoped></style>

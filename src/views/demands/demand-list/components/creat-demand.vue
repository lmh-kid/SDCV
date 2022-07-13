<template>
  <a-modal v-model:visible="visible" @ok="submit" @cancel="visible = false">
    <a-form :model="form">
      <a-form-item field="name" label="名称">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item label="基线来源">
        <a-select v-model="form.baselinetype" allow-clear>
          <a-option value="main">主线版本</a-option>
          <a-option value="demand">需求分支</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="baseline" label="基线分支">
        <base-line v-model="form.baseline" />
      </a-form-item>
      <a-form-item field="branchname" label="分支名称">
        <a-input v-model="form.branchname" />
      </a-form-item>
      <a-form-item field="targetversion" label="目标版本">
        <base-line v-model="form.targetversion" :multiple="true" />
      </a-form-item>
      <a-form-item label="需求类型">
        <a-select v-model="form.type" allow-clear>
          <a-option value="bug">BUG</a-option>
          <a-option value="demand">需求</a-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<!-- // eslint-disable-next-line camelcase
  demandid?: number; // 需求ID
  baseline: number; // 基线分支ID
  baselinename: string; // 基线分支名称
  baselinetype: 'demand' | 'main'; // 基线类型

  branchname: string; // 分支名称

  targetversion: string; // 目标版本
  name: string;
  describe?: string;
  type: 'bug' | 'demand'; // 需求类型 bug demand -->

<script lang="ts" setup>
  import { ref } from 'vue';
  import { createDemand, demandList } from '@/api/demand';
  import BaseLine from '@/components/list-model/base-line.vue';

  const visible = ref(false);
  const form = ref<any>({});
  const mainlineData = ref<any>([]);
  const demandData = ref<any>([]);

  const getDemandList = async () => {
    const res = await demandList();
    demandData.value = res.data;
  };
  getDemandList();

  const submit = async () => {
    await createDemand({
      ...form.value,
      describe: form.value.describe || '',
    });
  };

  defineExpose({
    visible,
  });
</script>

<style lang="less" scoped></style>

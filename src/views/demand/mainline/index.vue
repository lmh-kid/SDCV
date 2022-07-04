<template>
  <div>
    <a-descriptions title="主线版本" layout="inline-horizontal" />
    <a-alert>若代码库中存在该主线版本分支，则拥有该版本</a-alert>
  </div>
  <div style="padding: 10px 0; text-align: right">
    <a-space>
      <a-button @click="creatMainline.visible = true">新建主线版本</a-button>
      <a-button @click="getData"
        ><template #icon><icon-refresh /></template>
      </a-button>
    </a-space>
  </div>
  <div>
    <a-table :columns="columns" :data="mainlineData" />
  </div>

  <div>
    <a-descriptions title="需求列表" layout="inline-horizontal" />
    <!-- <a-alert>若代码库中存在该主线版本分支，则拥有该版本</a-alert> -->
  </div>
  <div style="padding: 10px 0; text-align: right">
    <a-space>
      <a-button @click="createDemand.visible = true">新建主线版本</a-button>
      <a-button @click="getData"
        ><template #icon><icon-refresh /></template>
      </a-button>
    </a-space>
  </div>
  <div>
    <a-table :columns="columns" :data="demandData" />
  </div>

  <creatMainlineVue ref="creatMainline" />
  <creatDemandVue ref="createDemand" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { mainlineList, demandList } from '@/api/demand';
  import creatMainlineVue from './components/creat-mainline.vue';
  import creatDemandVue from './components/creat-demand.vue';

  const mainlineData = ref<any>();
  const demandData = ref<any>();

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '分支',
      dataIndex: 'branch',
    },
    {
      title: '描述',
      dataIndex: 'describe',
    },
    {
      title: '操作',
      dataIndex: 'mainlineid',
    },
  ];
  const getData = async () => {
    const res = await mainlineList();
    mainlineData.value = res.data;
  };
  getData();

  const getDemandList = async () => {
    const res = await demandList();
    demandData.value = res.data;
  };
  getDemandList();

  const creatMainline = ref();
  const createDemand = ref();
</script>

<style lang="less" scoped></style>

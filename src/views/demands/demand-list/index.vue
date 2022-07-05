<template>
  <global-page>
    <div>
      <a-descriptions title="需求列表" layout="inline-horizontal" />
      <!-- <a-alert>若代码库中存在该主线版本分支，则拥有该版本</a-alert> -->
    </div>
    <div style="padding: 10px 0; text-align: right">
      <a-space>
        <a-button @click="createDemand.visible = true">新建主线版本</a-button>
        <a-button @click="getDemandList"
          ><template #icon><icon-refresh /></template>
        </a-button>
      </a-space>
    </div>
    <div>
      <a-table :columns="columns" :data="demandData" />
    </div>
    <creatDemandVue ref="createDemand" />
  </global-page>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { demandList } from '@/api/demand';
  import GlobalPage from '@/components/global-page/index.vue';
  import creatDemandVue from './components/creat-demand.vue';

  const demandData = ref<any>();
  const createDemand = ref();

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

  const getDemandList = async () => {
    const res = await demandList();
    demandData.value = res.data;
  };
  getDemandList();
</script>

<style lang="less" scoped></style>

<template>
  <global-page>
    <div>
      <a-descriptions title="需求列表" layout="inline-horizontal" />
      <!-- <a-alert>若代码库中存在该主线版本分支，则拥有该版本</a-alert> -->
    </div>
    <div style="padding: 10px 0; text-align: right">
      <a-space>
        <a-button @click="createDemand.visible = true">新建需求</a-button>
        <a-button @click="getDemandList"
          ><template #icon><icon-refresh /></template>
        </a-button>
      </a-space>
    </div>
    <div>
      <a-table :columns="columns" :data="demandData">
        <template #option="{ record }">
          <a-button
            type="primary"
            size="small"
            @click="deleteDemand(record.demandid)"
            >删除</a-button
          >&nbsp;
          <a-button
            type="primary"
            size="small"
            @click="deleteDemand(record.demandid)"
            >详情</a-button
          >&nbsp;
          <a-button
            type="primary"
            size="small"
            @click="deleteDemand(record.demandid)"
            >代码合入</a-button
          >&nbsp;
          <a-button
            type="primary"
            size="small"
            @click="deleteDemand(record.demandid)"
            >需求提测</a-button
          >
        </template>
      </a-table>
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
      title: '需求名称',
      dataIndex: 'name',
    },
    {
      title: '分支名称',
      dataIndex: 'branchname',
    },
    {
      title: '源分支类型',
      dataIndex: 'baselinetype',
    },
    {
      title: '源分支名称',
      dataIndex: 'baselinename',
    },
    {
      title: '目标版本名称',
      dataIndex: 'targetversion',
    },
    {
      title: '操作',
      dataIndex: 'demandid',
      slotName: 'option',
    },
  ];

  const getDemandList = async () => {
    const res = await demandList();
    demandData.value = res.data;
  };
  getDemandList();

  const deleteDemand = (demandid: number) => {
    console.log(demandid);
  };
</script>

<style lang="less" scoped></style>

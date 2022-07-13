<template>
  <global-page>
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
      <a-table :columns="columns" :data="mainlineData">
        <template #option="{ record }">
          <a-button
            type="primary"
            size="small"
            @click="deletebBaseline(record.mainlineid)"
            >删除</a-button
          >&nbsp;
          <a-button
            type="primary"
            size="small"
            @click="goToDetail(record.mainlineid)"
            >详情</a-button
          >
        </template>
      </a-table>
    </div>
    <creatMainlineVue ref="creatMainline" />
  </global-page>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { mainlineList } from '@/api/demand';
  import GlobalPage from '@/components/global-page/index.vue';
  import creatMainlineVue from './components/creat-mainline.vue';

  const mainlineData = ref<any>();
  const creatMainline = ref();

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
      slotName: 'option',
    },
  ];

  const getData = async () => {
    const res = await mainlineList();
    mainlineData.value = res.data;
  };
  getData();
  const deletebBaseline = async (mainlineid: number) => {
    console.log(mainlineid);
  };
  const goToDetail = async (mainlineid: number) => {
    console.log(mainlineid);
  };
</script>

<template>
  <a-col class="banner">
    <a-descriptions title="組列表" layout="inline-horizontal" />
    <a-row>
      <a-col :span="16">
        <a-select
          v-model="userGroup"
          :span="16"
          placeholder="请选择组"
          @change="getProjects()"
        >
          <a-option
            v-for="item of groupList"
            :key="item.id"
            :value="item.id"
            :label="item.description"
          />
        </a-select>
      </a-col>
      <a-col :span="6">
        <a-button @click="getGroups()">刷新数据</a-button>
      </a-col>
    </a-row>
  </a-col>
  <a-col class="banner">
    <a-descriptions title="項目列表" layout="inline-horizontal" />
    <a-row>
      <a-col :span="16">
        <a-select
          v-model="userProject"
          :span="16"
          placeholder="請選擇項目"
          @change="getBranches()"
        >
          <a-option
            v-for="item of projectsList"
            :key="item.id"
            :value="item.id"
            :label="item.name"
          />
        </a-select>
      </a-col>
      <a-col :span="6">
        <a-button @click="getProjects()">刷新数据</a-button>
      </a-col>
    </a-row>
  </a-col>
  <a-col class="banner">
    <a-descriptions title="項目操作" layout="inline-horizontal" />
    <a-button @click="getBranches()">获取分支</a-button>
    <a-input v-model="branchName" />
    <a-table
      :columns="columns"
      :data="branchs"
      :pagination="{ total: branchTotal }"
    />
  </a-col>
</template>

<script lang="ts" setup>
  import { queryGroups, queryGroupProjects } from '@/api/group';
  import { queryProjectBranchs } from '@/api/project';
  import { ref } from 'vue';
  import columns from './bannerData';

  const groupList = ref<any>([]);
  const projectsList = ref<any>([]);
  const userGroup = ref<number>(0);
  const userProject = ref<number>();
  const branchs = ref<any[]>([]);
  const branchName = ref<string>();
  const branchTotal = ref<number>();

  const getBranches = async () => {
    const res: any = await queryProjectBranchs({
      id: userProject.value,
      branchName: branchName.value,
    });
    branchs.value = res.data;
    branchTotal.value = res.total;
  };
  const getProjects = async () => {
    const res = await queryGroupProjects(userGroup.value);
    projectsList.value = res.data;
    userProject.value = res.data[0]?.id;
    getBranches();
  };
  const getGroups = async () => {
    const res = await queryGroups();
    groupList.value = res.data;
    userGroup.value = res.data[0]?.id;
    getProjects();
  };

  getGroups();
</script>

<style scoped lang="less">
  .banner {
    width: 100%;
    padding: 20px 20px 0 20px;
    background-color: var(--color-bg-2);
    border-radius: 4px 4px 0 0;
  }

  :deep(.arco-icon-home) {
    margin-right: 6px;
  }
</style>

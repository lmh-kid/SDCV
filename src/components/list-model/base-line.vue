<template>
  <a-select
    v-model="beaselineId"
    allow-clear
    @change="emit('input', beaselineId)"
  >
    <a-option
      v-for="item in baseLineList"
      :key="item.mainlineid"
      :value="item.mainlineid"
      >{{ item.name }}</a-option
    >
  </a-select>
</template>

<script lang="ts" setup>
  import { ref, toRefs } from 'vue';
  import { mainlineList } from '@/api/demand';

  const baseLineList = ref<any>([]);
  const beaselineId = ref<string>();

  const props = withDefaults(defineProps<{ value: string }>(), {
    value: '',
  });
  const emit = defineEmits(['input']);

  beaselineId.value = toRefs(props).value.value;

  const getList = async () => {
    const res = await mainlineList();
    baseLineList.value = res.data;
  };
  getList();
</script>

<style lang="less" scoped></style>

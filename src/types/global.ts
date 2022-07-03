export interface AnyObject {
  [key: string]: unknown;
}

export interface Options {
  value: unknown;
  label: string;
}

export interface NodeOptions extends Options {
  children?: NodeOptions[];
}

export interface GetParams {
  body: null;
  type: string;
  url: string;
}

export interface PostData {
  body: string;
  type: string;
  url: string;
}

export interface Pagination {
  current: number;
  pageSize: number;
  total?: number;
}

export interface DemandItemType {
  // eslint-disable-next-line camelcase
  demandid?: number; // 需求ID
  baseline: number; // 基线分支ID
  baselinename: string; // 基线分支名称
  baselinetype: 'demand' | 'main'; // 基线类型

  branchname: string; // 分支名称

  targetversion: string; // 目标版本
  name: string;
  describe?: string;
  type: 'bug' | 'demand'; // 需求类型 bug demand
}

export type TimeRanger = [string, string];

export interface GeneralChart {
  xAxis: string[];
  data: Array<{ name: string; value: number[] }>;
}

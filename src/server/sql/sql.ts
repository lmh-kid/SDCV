import { DemandItemType } from '@/types/global';
import db from './database';
import base from '../base';

const addSql = (table: string, data: any) => {
  const keys = Object.keys(data);
  keys.forEach((item) => {
    data[item] = `'${data[item]}'`;
  });
  const values = Object.values(data).toString();
  return `INSERT INTO ${table} (${keys.toString()}) VALUES (${values})`;
};

export function getMainlineList() {
  return new Promise((resolve, reject) => {
    db.all(`select * from mainline`, (err: any, row: any) => {
      if (err) {
        reject(err);
      } else {
        const data = row;
        const total = data.length;
        const code = 200;
        resolve(base.responseData({ code, data, total }));
      }
    });
  });
}

export function setMainlineItem(mainlineItem: any) {
  const add = db.prepare(addSql('mainline', mainlineItem));
  add.run();
}

export function getDemandList() {
  return new Promise((resolve, reject) => {
    db.all(`select * from demand`, (err: any, row: any) => {
      if (err) {
        reject(err);
      } else {
        const data = row;
        const total = data.length;
        const code = 200;
        resolve(base.responseData({ code, data, total }));
      }
    });
  });
}

// 添加需求
export function setDemandItem(demandItem: DemandItemType) {
  const add = db.prepare(addSql('demand', demandItem));
  add.run();
}

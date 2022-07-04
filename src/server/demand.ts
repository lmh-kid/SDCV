import base from './base';
import app from './express';
import {
  setMainlineItem,
  getMainlineList,
  setDemandItem,
  getDemandList,
} from './sql/sql';

// 创建主线
app.post(
  '/mainline/createMainline',
  base.jsonParser,
  async (req: any, res: any) => {
    if (req?.body) {
      try {
        setMainlineItem(req?.body);
        res.send({
          code: 200,
        });
      } catch (err) {
        res.send(err);
      }
    } else {
      res.send('req?.body 不存在');
    }
  }
);

// 获取主线列表
app.post(
  '/mainline/mainlineList',
  base.jsonParser,
  async (req: any, res: any) => {
    const data = await getMainlineList();
    res.send(data);
  }
);

// 创建需求
app.post(
  '/demand/createDemand',
  base.jsonParser,
  async (req: any, res: any) => {
    if (req?.body) {
      try {
        setDemandItem(req?.body);
        res.send({
          code: 200,
        });
      } catch (err) {
        res.send(err);
      }
    } else {
      res.send('req?.body 不存在');
    }
  }
);

// 获取需求列表
app.post(
  '/demand/getDemandList',
  base.jsonParser,
  async (req: any, res: any) => {
    const data = await getDemandList();
    res.send(data);
  }
);

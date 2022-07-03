import base from './base';
import app from './express';
import { setMainlineItem, getMainlineList } from './sql/sql';

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

app.post(
  '/mainline/mainlineList',
  base.jsonParser,
  async (req: any, res: any) => {
    const data = await getMainlineList();
    res.send(data);
  }
);

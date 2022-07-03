import base from './base';
import app from './express';

app.get('/groups', async (req: any, res: any) => {
  const response = await base.sendData(base.groupsUrl, 'get', base.options);
  // 在这里做点什么
  res.send(response);
});

app.get('/group/projects', async (req: any, res: any) => {
  const response = await base.sendData(
    `${base.groupsUrl + req?.query?.id}/projects`,
    'get',
    base.options
  );
  // 在这里做点什么
  res.send(response);
});

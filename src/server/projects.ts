import base from './base';
import app from './express';

app.post('/groupBranchs', base.jsonParser, async (req: any, res: any) => {
  const branchName = req?.body?.branchName;
  let url = `${base.projectsUrl}/${req?.body?.id}/repository/branches`;
  url += `?page=${req?.body?.pageIndex || 1}&per_page=10`;
  // 精确搜索
  // if (branchName) url += `/${branchName}`;
  // 模糊搜索
  if (branchName) url += `&search=${branchName}`;
  const response: any = await base.sendData(url, 'get', base.options);
  if (Array.isArray(response.data)) {
    res.send(response);
  } else {
    response.data = [response.data];
    res.send(response);
  }
});

// 新建分支
// req branch 新分支名称
// req ref 原分支名称
app.post('/newBranch', async (req: any, res: any) => {
  const response = await base.sendData(
    `${base.projectsUrl}/${req?.query?.id}/repository/branches?branch=${req?.query?.branch}&ref=${req?.query?.ref}`,
    'post',
    base.options
  );
  // 在这里做点什么
  res.send(response);
});

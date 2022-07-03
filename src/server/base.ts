const request = require('request');
const bodyParser = require('body-parser');

const baseUrl = '';
const token = '';
const projectsUrl = `${baseUrl}/api/v4/projects/`;
const groupsUrl = `${baseUrl}/api/v4/groups/`;

// 创建application/json 解析器
const jsonParser = bodyParser.json();

const options = {
  headers: {
    'PRIVATE-TOKEN': token,
  },
  strictSSL: false,
};

const responseData = (response: any) => {
  return {
    code: response.code === 200 ? 20000 : 500,
    data: response.data,
    total: response.total,
    msg: response.code === 200 ? 'SUCCESS' : 'ERROR',
  };
};
const sendData = (url: string, methods: string, option: any) => {
  return new Promise((resolve, reject) => {
    request[methods](url, option, (error: any, response: any) => {
      if (error) {
        reject(error);
      } else {
        const data = JSON.parse(response.toJSON().body);
        const total = response.toJSON().headers['x-total'];
        const code = response.statusCode;
        resolve(responseData({ data, total, code }));
      }
    });
  });
};
export default {
  projectsUrl,
  groupsUrl,
  options,
  responseData,
  sendData,
  jsonParser,
};

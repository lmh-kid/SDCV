const sqlite3 = require('sqlite3');
// 获取数据库
const path = require('path');

const rootPath = path.resolve(__dirname, '../../../');
const sqliteDbPath = `${rootPath}\\sdcv.db`;

// 打开sqlites数据库
const db = new sqlite3.Database(sqliteDbPath);

export default db;

import * as helper from "./dbHelper";
export function deleteDB(dbName) {
  const db = window.INDEXEDDB_DB_RET;
  db.close();
  const request = window.INDEXEDDB_DB.deleteDatabase(dbName);
  console.log("删除数据库" + dbName);
  request.onsuccess = function() {
    console.log("删除数据库成功");
  };

  request.onerror = function() {
    console.log("删除数据库失败");
  };
}
export function save(model, isUpdate) {
  return helper.save(model, isUpdate, "relations");
}
export function list(model) {
  return helper.list(model, "relations");
}
export function deleteById(id) {
  return helper.deleteById(id, "relations");
}
export function getById(id) {
  return helper.getById(id, "relations");
}
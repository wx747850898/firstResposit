import axios from "axios";

//本地服务地址
const base_url = 'http://127.0.0.1:8090';

//easyMock服务地址
// const base_url = 'http://127.0.0.1:7300/mock/5f4c64617775fc2e0cf08e00';

export const httpGet = (url) => {
  var instance = axios.create();
  return instance.get(`${base_url}${url}`);
};

export const httpPost = (url, params) => {
  var instance = axios.create();
  return instance.post(`${base_url}${url}`, params);
};

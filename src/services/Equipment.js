import request from '../utils/request';
// import { PAGE_SIZE } from '../constants';

const ip = `http://192.168.1.18:23113`
 
//查询列表
// export function fetch({ page }) {
//   return request(`/api/Users?_page=${page}&_limit=${PAGE_SIZE}`);
// }

export function fetch(values) {
  return request(`${ip}/WebAPI/api/OrgDepartment/List`, {
    method: 'POST',
    headers: {
      Accept: "application/json; charset=utf-8",
      "Content-Type":"application/json"
  },
    body:JSON.stringify(values),
  });
}

// export function remove(id) {
//   return request(`/api/Users/${id}`, {
//     method: 'DELETE',
//   });
// }

//删除
export async function remove(id,values) {
  debugger
  return request(`${ip}/WebAPI/api/OrgDepartment/Delete`, {
    method: 'POST',
    headers: {
      Accept: "application/json; charset=utf-8",
      "Content-Type":"application/json"
  },
    body: JSON.stringify(id),
  });
}

// export function patch(id, values) {
//   return request(`/api/Users/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify(values),
//   });
// }

export async function patch(values) {
  return request(`${ip}/WebAPI/api/OrgDepartment/Modify`, {
    method: 'POST',
    headers: {
      Accept: "application/json; charset=utf-8",
      "Content-Type":"application/json"
  },
    body: JSON.stringify(values),
  });
}
 


// export function create(values) {
//   return request('/api/Users', {
//     method: 'POST',
//     body: JSON.stringify(values),
//   });
// }

export async function create(values) {
  return request(`${ip}/WebAPI/api/OrgDepartment/Add`, {
    method: 'POST',
    headers: {
      Accept: "application/json; charset=utf-8",
      "Content-Type":"application/json"
  },
    body: JSON.stringify(values),
  });
}

const axios = require('axios');
import { authHeader } from '../helpers/authHeader';

export const categoryService = {
  _list,
  create,
  read,
  update,
  _delete,
  test_list
};


function _list() {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${process.env.VUE_APP_API_URL}getPostCategory.php`,
      headers: authHeader()
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

// test get list Category 
function test_list() {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `feed/category`,
      headers: authHeader()
    })
    .then(res => {
      console.log('cat_list',res.data)
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

function create(dataset) {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'POST',
//       url: `${process.env.VUE_APP_API_URL}admin/business_units`,
//       headers: authHeader(),
//       data: dataset
//     })
//     .then(res => {
//       resolve(res.data);
//     })
//     .catch(err => {
//       resolve(err.response.data);
//     });
//   });
}

function read(dataset) {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'GET',
//       url: `${process.env.VUE_APP_API_URL}admin/business_units`,
//       headers: authHeader(),
//       params: dataset
//     })
//     .then(res => {
//       resolve(res.data);
//     })
//     .catch(err => {
//       resolve(err.response.data);
//     });
//   });
}

function update(dataset) {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'PATCH',
//       url: `${process.env.VUE_APP_API_URL}admin/business_units`,
//       headers: authHeader(),
//       data: dataset
//     })
//     .then(res => {
//       resolve(res.data);
//     })
//     .catch(err => {
//       resolve(err.response.data);
//     });
//   });
}

function _delete(dataset) {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'DELETE',
//       url: `${process.env.VUE_APP_API_URL}admin/business_units`,
//       headers: authHeader(),
//       data: dataset
//     })
//     .then(res => {
//       resolve(res.data);
//     })
//     .catch(err => {
//       resolve(err.response.data);
//     });
//   });
}

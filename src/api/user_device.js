import request from '@/utils/request'

export function list (params) {
  return request({
    url: '/user_device/list',
    params,
  })
}

export function setLimit (data) {
  return request({
    url: '/user_device/setLimit',
    method: 'post',
    data,
  })
}

export function unbind (data) {
  return request({
    url: '/user_device/unbind',
    method: 'post',
    data,
  })
}

export function batchUnbind (data) {
  return request({
    url: '/user_device/batchUnbind',
    method: 'post',
    data,
  })
}

import request from "@/utils/request";
//用户登录
export const login = (data) => {
  return request({
    url: '/admin/administrator/login',
    method: 'post',
    data,
  })
}
//用户注册
export const register = (data) => {
  return request({
    url: '/admin/administrator/register',
    method: 'post',
    data,
  })
}
//用户忘记密码
export const forgetPassword = (data) => {
  return request({
    url: '/admin/administrator/forgetPassword',
    method: 'post',
    data,
  })
}
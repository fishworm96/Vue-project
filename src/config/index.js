// //如果这里是生产环境，判断里就写一个生产环境的实际接口。如果是本地开发环境就写一个空的字符串，在配置代理里填写域名。如果没有在vue.config.js里写代理就需要在这里配置端口。
export const baseURL = process.env.NODE_ENV === 'PRODUCTION' 
  ? '/api/'
  : ''
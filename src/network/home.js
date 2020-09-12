import {request} from "./request"

export function getHomeData() {
  return request({
    url: '/user/login',
    params: {
    openid:'or_WGuE5Ljd-iJCfR5zqiVUxsSlQ'
    }
  }) 
}


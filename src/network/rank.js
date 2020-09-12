import {request} from "./request"


export function getVoteList(obj) {
  var myToken = sessionStorage.getItem("myTrueToken");  
  var {keyword ,page} = obj
  var params = {
      'keyword': keyword,
      'page': page,
      }
  params['access-token'] = myToken
  console.log(params);
 
  return request({
    url: 'user/vote-list',
    params
  }) 
}


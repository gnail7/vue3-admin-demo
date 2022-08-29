import service from "../../utils/request";

export function loginApi(params){
    return service({
        url: '/login',
        method: 'POST',
        data:params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
    })
}

export function handleToken(){
    return service({
        url: '/handleToken',
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
    })
}
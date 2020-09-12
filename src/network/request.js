import axios from 'axios'


export function request(config) {
  // return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL:'https://apidgybhd.kccloud.pro',
      timeout: 5000
    })

    instance.interceptors.request.use(config => {
      // console.log(config);
      return config
    },err => {
      // console.log(err);
    })
    instance.interceptors.response.use(res => {
      return res.data
    },err => {
      console.log(err.response);
      if(err.response.data.status == 401){
        window.location.href="/home";
        // console.log(this);
        //   Vue.$router.push('/home')
        //   console.log(this);
      }
    })
    return instance(config)

}

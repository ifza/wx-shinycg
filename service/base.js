import api from 'api'
const header = {
  json: { 'content-type': 'application/json' },
  form: { 'content-type': 'application/x-www-form-urlencoded' }
}
class base {

  constructor(){
    this.api = api
    this.__init()
  }

  __init(){}
  
  limit(o={}) {
    let params = Object.assign({id:0,size:5},o);
    return new Promise((res, rej) => {
      wx.request({
        url: this.api.limit,
        data: params,
        header: header.json,
        success: res,
        fail: rej
      })
    })
  }
  single(id) {    
    return new Promise((res, rej) => {
      wx.request({
        url: this.api.single,
        data: { id: id },
        header: header.json,
        success: res,
        fail: rej
      })
    })
  }
  save(data) {    
    return new Promise((res, rej) => {
      wx.request({
        url: this.api.save,
        data: data,
        method: 'POST',
        header: header.form,
        success: res,
        fail: rej
      })
    })
  }
  ckMobile(value) {
    return new Promise((res, rej) => {
      wx.request({
        url: this.api.ck_mobile,
        data: { mobile: value },
        method: 'POST',
        header: header.form,
        success: res,
        fail: rej
      })
    })
  }
}
export default base

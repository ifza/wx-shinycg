class Share{
  defaults = {
      title:'炫幕网络科技',
      imageUrl:'/images/logo.jpg',
      path:'/pages/index/index',
      success: this.__success,
      fail:this.__fail
  }
  __success(e){console.log('默认souccess函数', e)}
  __fail(e){console.log('默认fail函数',e)}
  constructor(options={}){Object.assign(this.defaults,options)}
  onShare(options={}){
    let o = Object.assign(this.defaults,options)
    return o
  }
}
export default Share
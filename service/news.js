import base from 'base'
class News extends base{
  __init(){
    this.api = this.api.news
  }
  limit(o={id:2,size:6}) {
    return super.limit(o);  
  }

}
export default new News
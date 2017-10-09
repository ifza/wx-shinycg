import Component from '../components'
export default {
  setDefault() {
    return {
      url: {},
      params: {},
      hasMore:true,
      hasRefresh:false,
      index: 1,
      size: 2,
      list: []
    }
  },
  Init(id,o = {}) {
    const options = Object.assign({ id}, this.setDefault(), o)
    this.component = new Component({
      scope: `$Paging.${id}`,
      data: options,
      methods: {
        loadMore() {
          
          if (!this.page.data.$Paging[id].hasMore || this.page.data.$Paging[id].hasRefresh) return          
          this.page.setData({
            [`$Paging.${id}.hasRefresh`]:true
          })
          this.req().then(r => {
            if (r.data.length>0){
              this.page.data.$Paging[id].index++
              this.page.setData({
                [`$Paging.${id}.list`]: this.page.data.$Paging[id].list.concat(r.data),
                [`$Paging.${id}.index`]: this.page.data.$Paging[id].index,
                [`$Paging.${id}.hasRefresh`]: false
              })
            }else{
              this.page.setData({    
                [`$Paging.${id}.hasMore`]: false
              })
            }            
          }).catch(e => {
            //内部请求错误
            console.log('components paging inner request error',e)
          })
        },
        req() {
          const data = this.page.data.$Paging[id]
          let params = Object.assign(data.params, { index: data.index, size:data.size})                    
          return new Promise((res, rej) => {
            wx.request({
              url: data.url,
              data: params,
              header: {'content-type': 'application/json'},
              success: res,
              fail: rej
            })
           })
        }
   
      }
    })
    // console.log(this.component)
    this.component.loadMore()
    //  this.LoadData()
  }

}
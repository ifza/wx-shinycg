import {News} from '../../../../service/index'
const app = getApp()
Page({
  data: { details: {}, shareInfo: {} },
  onLoad: function (options) {
    var that = this;
    News.single(options.id).then(r => {
      if(r.data != null){
        wx.setNavigationBarTitle({title: r.data.title})
        this.setData({
          details: r.data,
          'shareInfo.title': `炫幕网络科技-${r.data.title}`,
          'shareInfo.imageUrl': `https://www.shinycg.com${r.data.smallpic}`,
          'shareInfo.path': `/pages/news/details/video/index?id=${r.data.id}`
          })
      }else{
        app.showToast({title:'未查询到相关数据!'})
      }
    })
  },

  onShareAppMessage() {
    return app.share.onShare(this.data.shareInfo)
  }
})
import {News} from '../../../service/index'
import WxParse from '../../../wxParse/wxParse'
const app = getApp()
Page({
  data: {
    details:{},
    shareInfo:{}
  },
  onLoad: function (options) {
    let self = this
    News.single(options.id).then(r => {
      if (r.data != null) {
        this.setData({details:r.data,
          'shareInfo.title': `炫幕网络科技-${r.data.title}`,
          'shareInfo.imageUrl': `https://www.shinycg.com${r.data.smallpic}`,
          'shareInfo.path':`/pages/news/details/index?id=${r.data.id}`
        })        
        var article = r.data.content.replace(/src=["|']((?!http).+?")"?/gi, 'src="https://www.shinycg.com$1"')        
        wx.setNavigationBarTitle({ title: r.data.title })
        WxParse.wxParse('article', 'html', article, self, 15);        
      } else {
        app.showToast({ title: '未查询到相关数据' })
      }
    })
  }, 
  onShareAppMessage (){
    return app.share.onShare(this.data.shareInfo)
  }
})
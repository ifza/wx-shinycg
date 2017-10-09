import {News} from '../../../../service/index'
import WxParse from '../../../../wxParse/wxParse'
const app = getApp()
Page({
  data: { details: {}, shareInfo: {}  },
  onLoad: function (options) {
    console.log(1)
    var that = this;
    News.single(options.id).then(r => {
      let result = r.data
      if(result != null){
        this.setData({
          details: result,
          'shareInfo.title': `炫幕网络科技-${r.data.title}`,
          'shareInfo.imageUrl': `https://www.shinycg.com${r.data.smallpic}`,
          'shareInfo.path': `/pages/news/details/album/index?id=${r.data.id}`
          })
        var article = result.content.replace(/src=["|']((?!http).+?")"?/gi, 'src="https://www.shinycg.com$1"')
        wx.setNavigationBarTitle({
          title: result.title,
        })
        WxParse.wxParse('article', 'html', article, that, 10);
      }else{
        app.showToast({title:'未查询到相关数据!'})
      }     
     
    }).catch(e=>{
      console.log('err',e)
    })
  },

  onShareAppMessage() {
    return app.share.onShare(this.data.shareInfo)
  }
})
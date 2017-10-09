import { News } from '../../../service/index'
import WxParse from '../../../wxParse/wxParse'

Page({
  data: { id: 0, details: {} },
  onLoad: function (options) {

    var that = this;
    News.single(options.id).then(r => {
      if (r.data != null) {
        var article = r.data.content.replace(/src=["|']((?!http).+?")"?/gi, 'src="https://www.shinycg.com$1"')
        wx.setNavigationBarTitle({ title: r.data.title })
        WxParse.wxParse('article', 'html', article, that, 10);
      } else {
        app.showToast({ title: '未查询到相关数据' })
      }
    })
  },
})
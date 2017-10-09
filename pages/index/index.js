import {Share} from '../../common/index'
import {News} from '../../service/index'
//index.js
//获取应用实例
var app = getApp()
var share = new Share()
Page({
  data: {
    BannerSwiper: {autoplay: true,circular: true,indicatorDots: true,
      data: [
        { image: 'https://www.shinycg.com/Public/Home/img/index/banner3.png',link:''},
        { image: 'https://www.shinycg.com/Public/Home/img/index/banner4.png', link: '' }    
      ]      
    },
    NewsSwiper:{autoplay: true,circular: true,vertical:true,data:[]}
  },
  onLoad: function () {
    var slef = this
    News.limit().then(r=>{
      slef.setData({
        'NewsSwiper.data':r.data
      })
    })    
  },
  onShareAppMessage: () => share.onShare()  
})

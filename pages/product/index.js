import {$Paging} from '../components/index'
import api from '../../service/api'
const app = getApp()
Page({
  data: {
    currentTab: 0,
    ViewHeight: app.globalData.SwiperViewHeight
  },
  onLoad(options) {
    $Paging.Init('mlist1',{url:api.news.paging, params:{id:4},size:3})
    $Paging.Init('mlist2',{url:api.news.paging, params:{id:5},size:3})
    $Paging.Init('mlist3',{url:api.news.paging, params:{id:6},size:3})
    $Paging.Init('mlist4',{url:api.news.paging, params:{id:7},size:3}) 
  },
  swichTab(e) {
    this.setData({currentTab: e.detail.current})
  },
  swichNav: function (e) {
    var currentIndex = e.target.dataset.index;
    if (currentIndex != this.data.currentTab) {
      this.setData({currentTab: currentIndex})
    }
  },
  onShareAppMessage: () => app.share.onShare({ title: "炫幕网络科技-炫幕产品", path: '/pages/product/index' })
})
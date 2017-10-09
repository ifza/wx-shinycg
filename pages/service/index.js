// index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    ViewHeight: app.globalData.SwiperViewHeight,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    let qTab = options.tab
    if (qTab !== 'undefined' && qTab < 3){      
      self.setData({
        currentTab: options.tab
      })
    } 
  },  
  swichTab: function (e) {
    this.setData({currentTab: e.detail.current})
  },
  swichNav: function (e) {
    var currentIndex = e.target.dataset.index;
    if (currentIndex != this.data.currentTab) {
      this.setData({currentTab: currentIndex})
    }
  },
  onShareAppMessage: () => app.share.onShare({ title: "炫幕网络科技-炫幕服务", path: '/pages/service/index' })

})
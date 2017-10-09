
const app = getApp()
Page({
  data:{
    currentTab:0,
    ViewHeight: app.globalData.SwiperViewHeight
  },
  swichTab:function(e){
    this.setData({currentTab: e.detail.current})
  },
  swichNav:function(e){    
    var currentIndex = e.target.dataset.index;
    if(currentIndex != this.data.currentTab){
        this.setData({currentTab:currentIndex})
    }    
  },
  MapClick(){
    wx.openLocation({
      latitude: 30.605220,
      longitude: 114.290260,
      scale: 18,
      name: '炫幕数码网络',
      address: '金冠大厦16楼'
    })  
  },
  onShareAppMessage: () => app.share.onShare({ title: "炫幕网络科技-关于我们", path:'/pages/about/index'})

})
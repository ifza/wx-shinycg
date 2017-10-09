// pages/map/index.js
Page({
  data: {
    MapHeight: 667,
    latitude:30.605220,
    longitude:114.290260,
    markers: [{
      iconPath: "/images/map-iocn.png",
      latitude: "30.605220",
      longitude: "114.290260",
      width: 75,
      height: 31,
      callout: {display: 'ALWAYS'}
    }]
  },
  click (e) {
    wx.openLocation({
      latitude: 30.605220,
      longitude: 114.290260,
      scale: 18,
      name: '炫幕数码网络',
      address: '金冠大厦16楼'
    })  
  },  
  onShareAppMessage: function () {
  
  }
})
import { Share } from 'common/index'
App({
  onLaunch: function() {  
    self = this    
    wx.getSystemInfo({
      success: function (res) {        
        self.globalData.SwiperViewHeight = res.windowHeight - 42   
      }
    })
    
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  NavBack(url = '/pages/index/index'){   
    let pages = getCurrentPages()
    //判断是否有上级页面
    if (pages.length > 1) {
      wx.navigateBack();
    } else {
      wx.switchTab({ url: url })
    }
  },
  showToast(optn = {}) {
    let config = Object.assign({ title: '', image: '/images/!.png', duration: 2000 }, optn)
    wx.showToast(config)
  },
  globalData: {userInfo: null,
    SwiperViewHeight:0
  },
  share: new Share()
})

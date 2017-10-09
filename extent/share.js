class commonFUN{
  onShare(e){
    return {
      title: '炫幕数码科技',
      path: '/pages/index/index',
      imageUrl: '/images/logo.jpg',
      success: function (res) {
        console.log('分享成功')
      },
      fail: function (err) {
        console.log('err', err)
      }
    }
  }
}
export default commonFUN
import {News} from '../../service/index'
import {$Paging} from '../components/index'
const app = getApp()
Page({
  data: {},
  onLoad: function (options) {
    $Paging.Init('paging', { url: 'https://www.shinycg.com/API/news/paging', params: { id: 2 }, size: 10 })
  },  
  onShareAppMessage: () => app.share.onShare({ title: "炫幕网络科技-新闻中心", path: '/pages/news/index' })
})
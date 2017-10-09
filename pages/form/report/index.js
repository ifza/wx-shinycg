import { Diagnosis, Consultation} from '../../../service/index'
const app = getApp()
Page({
  data: {
    reportType: 0,
    reportTypeItems: [{ name: '网站诊断报告', value: 0 },{ name: '网络搭建咨询报告', value: 1 }]
  }, 
  //event
  formReset() { },
  tabChange(e) {this.setData({ reportType: e.currentTarget.dataset.index })},
  radioChange(e) {this.setData({ reportType: e.detail.value })},
  formSubmit(e) {
    let data = e.detail.value
    if (data.companyname === '') { this.showToast({ title: '请输入企业全称' }); return false }
    if (data.username === '') { this.showToast({ title: '请输入联系人姓名' }); return false }
    if (data.usertelephone === '') { this.showToast({ title: '请输入联系电话' }); return false }
    if (this.data.reportType === 0) {
      if (data.website === '') { this.showToast({ title: '请输入您的诊断网址' }); return false }
    } else {
      if (data.product === '') { this.showToast({ title: '请输入您的产品及服务' }); return false }
    }
    this.__Save(data).then(r => {
      if (r.data.state) {
        wx.showToast({
          title: '信息提交成功!',
          duration: 2000,
          mask: true,
          success: function () {
            setTimeout(function(){
              app.NavBack()
            }, 2000)
          }
        })
      } else {
        this.showToast({ title: r.data.msg })
      }
    }).catch(e => {
      this.showToast({ title: '数据添加失败' })
    })
  },
  //function
  showToast(o = {}) {
    let config = Object.assign({ title: '', image: '/images/!.png', duration: 2000 }, o)
    wx.showToast(config)
  },
  __Save(data) {
    if (this.data.reportType == 0) {
      return Diagnosis.save(data)
    } else {
      return Consultation.save(data)
    }
  },
  onShareAppMessage: () => app.share.onShare({ title: "炫幕网络科技-诊断咨询报告申请" }),
})
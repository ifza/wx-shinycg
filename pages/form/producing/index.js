import { validate } from '../../../utils/index'
import { Demand } from '../../../service/index'

const app = getApp()
Page({
  data: {
    sliderValue: 15,
    projectstageItem: [{ name: '策划明确,仅需项目实现', checked: true }, { name: '目标明确,需确立详细策划方案' }],
    product: [
      {
        name: '网站', value: 'web', checked: false,
        data: [
          {
            name: '产品类型', value: 'type',
            data: [
              { name: 'H5', value: 'H5', checked: 'true' },
              { name: '小程序', value: '小程序' },
              { name: 'APP', value: 'APP' },
              { name: '微信平台', value: '微信平台' },
              { name: '网站', value: '网站' }
            ]
          },
          {
            name: '已有资源', value: 'resource',
            data: [
              { name: 'TOP图', value: 'TOP图' },
              { name: '流程图', value: '流程图' },
              { name: '设计图', value: '设计图' },
              { name: '需求文档', value: '需求文档' }
            ]
          },
          {
            name: '需要配合', value: 'demand',
            data: [{ name: '创意/策划', value: '创意/策划' },
            { name: 'UI设计', value: 'UI设计' },
            { name: '前端制作', value: '前端制作' },
            { name: '后端开发', value: '后端开发' },
            { name: '其它', value: '其它' }
            ]
          },
          {
            name: '风格', value: 'style',
            data: [
              { name: '扁平', value: '扁平' },
              { name: '商业', value: '商业' },
              { name: '手绘', value: '手绘' },
              { name: '动漫', value: '动漫' },
              { name: '其它', value: '其它' }
            ]
          }
        ]
      },
      {
        name: '影视', value: 'movie', checked: false,
        data: [
          {
            name: '产品类型', value: 'type',
            data: [{ name: '宣传片', value: '宣传片' }, { name: '广告片', value: '广告片' }, { name: '三维动画', value: '三维动画' }, { name: 'MG动画', value: 'MG动画' }]
          },
          {
            name: '已有资源', value: 'resource',
            data: [{ name: '图文资料', value: '图文资料' }, { name: '视频素材', value: '视频素材' }, { name: '效果图', value: '效果图' }, { name: 'CAD', value: 'CAD' }, { name: '3D模型', value: '3D模型' }]
          },
          {
            name: '需要配合', value: 'demand',
            data: [
              { name: '创意/策划', value: '创意/策划' },
              { name: '影视制作', value: '影视制作' },
              { name: '动画制作', value: '动画制作' },
              { name: '后期剪辑', value: '后期剪辑' },
              { name: '其它', value: '其它' }
            ]
          },
          {
            name: '风格', value: 'style',
            data: [
              { name: '形象', value: '形象' },
              { name: '产品', value: '产品' },
              { name: '混合', value: '混合' },
              { name: '其他', value: '其他' }
            ]
          }
        ]
      }
    ]
  },
  onShareAppMessage: () => app.share.onShare({ title: "炫幕网络科技-项目需求申请" }),
  typeChange(e) {
    var product = this.data.product;
    product.forEach((v, k) => {
      v.checked = e.detail.value.includes(v.value)
      this.setData({ product })
    })
  },
  formSubmit(e) {
    let self = this
    let formData = e.detail.value
    if (formData.projectname === '') { app.showToast({ title: '请输入项目名称' }); return false }
    if (formData.demandtype.length === 0) { app.showToast({ title: '请选择至少一项需求类型' }); return false }
    if (formData.companyname === '') { app.showToast({ title: '请输入企业全称' }); return false }
    if (formData.username === '') { app.showToast({ title: '请输入联系人姓名' }); return false }
    if (formData.usertelephone === '') { app.showToast({ title: '请输入联系电话' }); return false }
    if (!validate.tel(formData.usertelephone)) { app.showToast({ title: '请输入正确的11位电话号码' }); return false }
    Demand.ckMobile(formData.usertelephone).then(r => {
      if (r.data.state) {
        Demand.save(e.detail.value).then(r => {
          let result = r.data
          if (result.state) {
            wx.showToast({
              title: '信息提交成功!',
              duration: 2000,
              mask: true,
              success: function () {
                //延时跳转
                setTimeout(function () {
                  app.NavBack()
                }, 2000)
              }
            })
          } else {
            app.showToast({ title: result.msg })
          }
        })
      } else {
        app.showToast({ title: r.data.msg })
      }
    })
  },
  sliderChange(e) { this.setData({ sliderValue: e.detail.value }) },

  projectstageChange(e) {
    let projectstageItem = this.data.projectstageItem;
    for (var i = 0, len = projectstageItem.length; i < len; ++i) {
      projectstageItem[i].checked = projectstageItem[i].name == e.detail.value;
    }
    this.setData({
      projectstageItem: projectstageItem
    });
  }
})
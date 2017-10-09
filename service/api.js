const base = 'https://www.shinycg.com/API'
//新闻
const news = {
  limit: `${base}/news/limit`,
  paging: `${base}/news/paging`,
  single: `${base}/news/single`,
}
//诊断申请
const diagnosis = {
  save: `${base}/diagnosis/save`,
  ck_mobile: `${base}/diagnosis/CK_Mobile`
}
//咨询申请
const consultation = {
  save: `${base}/consultation/save`,
  ck_mobile: `${base}/consultation/CK_Mobile`
}
//需求申请
const demand = {
  save: `${base}/demand/save`,
  ck_mobile: `${base}/demand/CK_Mobile`
}
export default { base, news, diagnosis, consultation, demand }
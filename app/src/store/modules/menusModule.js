let menus = [
  {id: 12, level: 1, type: 'link', name: '首页', img: '../../static/ai/首页.png', url: '/Homepage'},
  {
    id: 1,
    level: 1,
    type: 'button',
    name: '信息管理',
    img: '../../static/ai/管理.png',
    isSelected: false,
    isExpand: false,
    submenus: [
      {id: 2, level: 2, type: 'link', name: '公司信息', url: '/essential_i/company_i'},
      {id: 3, level: 2, type: 'link', name: '员工列表', url: '/essential_i/staff'},
      {id: 24, level: 2, type: 'link', name: '员工详情界面', url: '/essential_i/staff_i'}
    ]
  },
  {
    id: 4,
    level: 1,
    type: 'button',
    name: '评分系统',
    img: '../../static/ai/对话.png',
    isSelected: false,
    isExpand: false,
    submenus: [
      {id: 5, level: 2, type: 'link', name: '员工评价', url: '/assess/staff_a'},
      {id: 6, level: 2, type: 'link', name: '查看员工评分信息', url: '/assess/staff_s'}
    ]
  },
  {
    id: 7,
    level: 1,
    type: 'button',
    name: '人才招聘',
    img: '../../static/ai/运营.png',
    isSelected: false,
    isExpand: false,
    submenus: [
      {id: 8, level: 2, type: 'link', name: '接收到的简历', url: '/recruit/job_m'},
      {id: 9, level: 2, type: 'link', name: '员工基本信息', url: '/recruit/resume'}
    ]
  },
  {
    id: 10,
    level: 1,
    type: 'button',
    name: '消息通知',
    img: '../../static/ai/公告.png',
    isSelected: false,
    isExpand: false,
    submenus: [
      {id: 11, level: 2, type: 'link', name: '通知', url: '/news/notice'},
      {id: 12, level: 2, type: 'link', name: '公告', url: '/news/broad'}
    ]
  }
]
let levelNum = 1
let startExpand = []
function setExpand (source, url) {
  let sourceItem = ''
  for (let i = 0; i < source; i++) {
    sourceItem = JSON.stringify(source[i])
    if (sourceItem.indexOf(url) > -1) {
      if (source[i].type === 'button') {
        source[i].isSelected = true
        source[i].isExpand = true
        startExpand.push(source[i])
        setExpand(source.submenus, url)
      }
      break
    }
  }
}
const state = {
  menus,
  levelNum
}
const mutations = {
  findParents (state, payload) {
    if (payload.menu.type === 'button') {
      payload.menu.isExpand = !payload.menu.isExpand
    } else if (payload.menu.type === 'link') {
      if (startExpand.length > 0) {
        for (let i = 0; i < startExpand.length; i++) {
          startExpand[i].isSelected = false
        }
      }
      startExpand = []
      setExpand(state.menus, payload.menu.url)
    }
  },
  firstInit (state, payload) {
    setExpand(state.menus, payload.url)
  }
}
export default {
  state,
  mutations
}

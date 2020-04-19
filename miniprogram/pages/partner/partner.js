// miniprogram/pages/partner/partner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://hackwork.oss-cn-shanghai.aliyuncs.com/lesson/weapp/4/weapp.jpg',
      'https://picture-1301411873.cos.ap-beijing.myqcloud.com/71a2b018bc92b2d19b3887165d427edd.png',
      'https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/img1.jpg'
    ],
    interval: 5000,
    duration: 1000,
    indicatorDots: true,
    indicatorColor: "#ffffff",
    activecolor: "#2971f6",
    autoplay: true,
    id: 233,
    itemurl: "/pages/home/imgshow/imgshow",
    itemclass: "event-item",
    imagesrc: "https://hackwork.oss-cn-shanghai.aliyuncs.com/lesson/weapp/4/weapp.jpg",
    imagemode: "widthFix",
    imagewidth: "100%",
    moviesList: [{
        name: "肖申克的救赎",
        englishname: "The Shawshank Redemption",
        country: "美国",
        year: 1994,
        img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
        desc: "有的人的羽翼是如此光辉，即使世界上最黑暗的牢狱，也无法长久地将他围困！",
        actor: [{
            name: "蒂姆·罗宾斯",
            role: "安迪·杜佛兰"
          },
          {
            name: "摩根·弗里曼",
            role: "艾利斯·波伊德·瑞德"
          },
        ]
      },
      {
        name: "霸王别姬",
        englishname: "Farewell My Concubine",
        country: "中国",
        year: 1993,
        img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.webp",
        desc: "风华绝代",
        actor: [{
            name: "张国荣",
            role: "程蝶衣"
          },
          {
            name: "张丰毅",
            role: "段小楼"
          },
        ]
      },
    ],
    grids: [{
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon1.png",
        title: "招聘"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon2.png",
        title: "房产"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon3.png",
        title: "二手车新车"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon4.png",
        title: "二手"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon5.png",
        title: "招商加盟"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon6.png",
        title: "兼职"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon7.png",
        title: "本地"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon8.png",
        title: "家政"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon9.png",
        title: "金币夺宝"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon10.png",
        title: "送现金"
      },
    ],
    // 地图组件
    latitude: 22.540503,
    longitude: 113.934528,
    markers: [{
        id: 1,
        latitude: 22.540503,
        longitude: 113.934528,
        title: '深圳腾讯大厦'
      },
      {
        id: 2,
        latitude: 22.540576,
        longitude: 113.933790,
        title: '万利达科技大厦'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
Page({
  onLoad() {
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: 'newyork'
      },
      success: res => {
        console.log(res)
      }
    })
  }
})
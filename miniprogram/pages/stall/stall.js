const { stallSteps } = require("../../utils/data");

Page({
  data: {
    stallSteps
  },

  createRoute() {
    wx.showToast({
      title: "路线已生成",
      icon: "success"
    });
  }
});

const { plans } = require("../../utils/data");

Page({
  data: {
    goals: ["稳收", "冲级", "赚钱"],
    activeGoal: "稳收",
    plans
  },

  selectGoal(event) {
    this.setData({ activeGoal: event.currentTarget.dataset.goal });
  }
});

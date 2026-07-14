const { crops, adviceMap } = require("../../utils/data");

Page({
  data: {
    query: "今天种什么",
    hotSearches: Object.keys(adviceMap),
    advice: adviceMap["今天种什么"],
    crops,
    selectedCropId: "wheat"
  },

  onSearchInput(event) {
    this.setData({ query: event.detail.value });
  },

  runSearch() {
    const { query, hotSearches } = this.data;
    const match = hotSearches.find((item) => query.includes(item.slice(0, 2)));
    this.setAdvice(match || "今天种什么");
  },

  tapHotSearch(event) {
    this.setAdvice(event.currentTarget.dataset.keyword);
  },

  setAdvice(keyword) {
    this.setData({
      query: keyword,
      advice: adviceMap[keyword] || adviceMap["今天种什么"]
    });
  },

  selectCrop(event) {
    this.setData({ selectedCropId: event.currentTarget.dataset.id });
  },

  goAtlas() {
    wx.switchTab({ url: "/pages/atlas/atlas" });
  },

  goProfit() {
    wx.switchTab({ url: "/pages/profit/profit" });
  }
});

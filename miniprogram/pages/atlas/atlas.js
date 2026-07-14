const { crops, filters, mutations } = require("../../utils/data");

Page({
  data: {
    crops,
    filters,
    mutations,
    activeFilter: "全部",
    selectedCrop: crops[0],
    visibleCrops: crops
  },

  selectFilter(event) {
    const filter = event.currentTarget.dataset.filter;
    const visibleCrops = filter === "全部" ? crops : crops.filter((crop) => crop.type === filter);
    this.setData({
      activeFilter: filter,
      visibleCrops,
      selectedCrop: visibleCrops[0] || crops[0]
    });
  },

  selectCrop(event) {
    const crop = crops.find((item) => item.id === event.currentTarget.dataset.id);
    if (crop) this.setData({ selectedCrop: crop });
  }
});

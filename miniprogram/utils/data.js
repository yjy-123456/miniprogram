const crops = [
  {
    id: "wheat",
    name: "小麦",
    image: "/images/crops/wheat.jpg",
    level: "1级",
    type: "冲级",
    profit: "4,860",
    time: "2小时",
    exp: "+42",
    note: "成熟快、回本稳，适合全天补种。"
  },
  {
    id: "corn",
    name: "玉米",
    image: "/images/crops/corn.jpg",
    level: "6级",
    type: "均衡",
    profit: "4,320",
    time: "2.5小时",
    exp: "+38",
    note: "收益和经验都比较平衡，适合过渡阶段。"
  },
  {
    id: "pumpkin",
    name: "南瓜",
    image: "/images/crops/pumpkin.jpg",
    level: "10级",
    type: "突变",
    profit: "4,050",
    time: "3小时",
    exp: "+45",
    note: "适合配合好友祝福赌突变收益。"
  },
  {
    id: "cotton",
    name: "棉花",
    image: "/images/crops/cotton.jpg",
    level: "12级",
    type: "订单",
    profit: "3,780",
    time: "3.5小时",
    exp: "+48",
    note: "适合补订单和稳定消耗库存。"
  },
  {
    id: "grape",
    name: "葡萄",
    image: "/images/crops/grape.jpg",
    level: "16级",
    type: "赚钱",
    profit: "5,160",
    time: "4小时",
    exp: "+52",
    note: "单次收益高，适合睡前或长时间离线。"
  }
];

const adviceMap = {
  "今天种什么": {
    title: "推荐种植：小麦",
    badge: "收益稳定，综合最优",
    body: "当前等级与资源下，小麦成熟快、回本稳，适合全天补种。",
    crop: "小麦",
    profit: "4,860",
    time: "2小时",
    reason: "稳定收益"
  },
  "小摊还是升地": {
    title: "建议：先升小摊，再开地",
    badge: "售价加成优先",
    body: "小摊加成会覆盖背包与所有作物，农场币接近时优先级更高。",
    crop: "小摊13级",
    profit: "+22%",
    time: "1天8小时",
    reason: "全局加成"
  },
  "12级种什么": {
    title: "12级优先：小麦 + 玉米轮换",
    badge: "冲级兼顾收益",
    body: "白天用短周期作物刷经验，睡前换南瓜或葡萄减少空窗。",
    crop: "12级方案",
    profit: "5,120",
    time: "2-4小时",
    reason: "节奏灵活"
  },
  "突变作物": {
    title: "突变优先：高价值长周期作物",
    badge: "好友祝福更关键",
    body: "想赌突变时，优先给南瓜、葡萄这类高价值作物留祝福次数。",
    crop: "南瓜",
    profit: "最高+50%",
    time: "3小时",
    reason: "突变收益"
  },
  "周末双倍": {
    title: "周末策略：周五晚前排好成熟",
    badge: "7月18日-7月19日",
    body: "双倍窗口内收获才生效，建议提前规划成熟时间，避免周五18点前误收。",
    crop: "双倍计划",
    profit: "约2倍",
    time: "本周六日",
    reason: "活动收益"
  }
};

const filters = ["全部", "冲级", "赚钱", "突变", "订单"];

const plans = [
  {
    title: "日常稳收",
    crop: "小麦",
    schedule: "2小时轮收",
    profit: "4,860/次",
    note: "适合频繁上线"
  },
  {
    title: "睡前托管",
    crop: "葡萄",
    schedule: "4小时长线",
    profit: "5,160/次",
    note: "减少空窗"
  },
  {
    title: "周末冲刺",
    crop: "南瓜",
    schedule: "双倍前排程",
    profit: "约 8,100/次",
    note: "配合好友祝福"
  }
];

const mutations = [
  { name: "金穗小麦", crop: "小麦", bonus: "+30%", status: "常见" },
  { name: "紫藤葡萄", crop: "葡萄", bonus: "+50%", status: "稀有" },
  { name: "巨型南瓜", crop: "南瓜", bonus: "+45%", status: "稀有" }
];

const stallSteps = [
  { level: "12 → 13", cost: "5.2万", gain: "订单上限 +4", priority: "优先" },
  { level: "开第5块地", cost: "6.8万", gain: "种植位 +1", priority: "次选" },
  { level: "二级地", cost: "9.4万", gain: "基础产量 +12%", priority: "后置" }
];

module.exports = {
  crops,
  adviceMap,
  filters,
  plans,
  mutations,
  stallSteps
};

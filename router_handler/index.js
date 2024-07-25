const getData = function (req, res) {
  res.send({
    code: 200,
    msg: "操作成功",
    data: {
      tab_list: [
        {
          tab_name: "基础标签",
          sub_tab: [
            {
              tab_name: "基础属性",
              label_list: [
                {
                  param_list: [
                    {
                      param_desc: "",
                      param_id: 1,
                      param_name: "小镇青年",
                    },
                    {
                      param_id: 2,
                      param_name: "小镇中老年",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 3,
                      param_name: "资深中产",
                    },
                    {
                      param_id: 4,
                      param_name: "新锐白领",
                      param_desc: "",
                    },
                    {
                      param_id: 5,
                      param_name: "genz",
                      param_desc: "",
                    },
                    {
                      param_id: 6,
                      param_name: "都市银发",
                      param_desc: "",
                    },
                    {
                      param_name: "都市蓝领",
                      param_desc: "",
                      param_id: 7,
                    },
                    {
                      param_desc: "",
                      param_id: 8,
                      param_name: "精致妈妈",
                    },
                  ],
                  label_id: 1,
                  label_name: "八大人群",
                  label_type: "2",
                  label_desc: "根据用户在抖音行为数据预测得出",
                },
                {
                  label_type: "2",
                  label_desc: "根据近30日用户在抖音行为数据预测得出",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "一线",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "二线",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "三线",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "四线",
                      param_desc: "",
                    },
                  ],
                  label_id: 2,
                  label_name: "城市等级",
                },
                {
                  label_desc: "根据用户在抖音行为数据预测得出",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "男",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "女",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 3,
                      param_name: "未知",
                    },
                  ],
                  label_id: 3,
                  label_name: "性别预测",
                  label_type: "2",
                },
                {
                  label_id: 4,
                  label_name: "年龄预测",
                  label_type: "2",
                  label_desc: "根据用户在抖音行为数据预测得出",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "18-24",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "25-30",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "31-35",
                      param_desc: "",
                    },
                    {
                      param_name: "36-40",
                      param_desc: "",
                      param_id: 4,
                    },
                    {
                      param_id: 5,
                      param_name: "41-45",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 6,
                      param_name: "46-50",
                    },
                    {
                      param_id: 7,
                      param_name: "50+",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_id: 5,
                  label_name: "用户活跃度",
                  label_type: "2",
                  label_desc: "用户在抖音30天内的活跃程度",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "低活跃",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "中低活跃",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "中高活跃",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "高活跃",
                      param_desc: "",
                    },
                  ],
                },
                {
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "低",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "中等",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "中高",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "高",
                      param_desc: "",
                    },
                  ],
                  label_id: 6,
                  label_name: "综合消费能力",
                  label_type: "2",
                  label_desc: "根据用户在抖音行为数据预测得出",
                },
                {
                  label_type: "3",
                  label_desc: "根据近30日用户在抖音行为数据预测得出",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "西北地区",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 2,
                      param_name: "西南地区",
                    },
                    {
                      param_id: 3,
                      param_name: "港澳台地区",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "华中地区",
                      param_desc: "",
                    },
                    {
                      param_id: 5,
                      param_name: "华东地区",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 6,
                      param_name: "华北地区",
                    },
                    {
                      param_desc: "",
                      param_id: 7,
                      param_name: "华南地区",
                    },
                    {
                      param_desc: "",
                      param_id: 8,
                      param_name: "东北地区",
                    },
                  ],
                  label_id: 30,
                  label_name: "地址",
                },
                {
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "低",
                      param_desc: "",
                    },
                    {
                      param_name: "中等",
                      param_desc: "",
                      param_id: 2,
                    },
                    {
                      param_desc: "",
                      param_id: 3,
                      param_name: "高",
                    },
                  ],
                  label_id: 43,
                  label_name: "抖音电商消费能力",
                  label_type: "2",
                  label_desc: "根据用户在抖音电商购买的金额得出",
                },
              ],
            },
            {
              tab_name: "电商偏好特征",
              label_list: [
                {
                  label_id: 65,
                  label_name: "追新一族场景机会人群",
                  label_type: "2",
                  label_desc:
                    "偏好购买行业新品或店铺新品的用户或近一年在电商经常购买标题中包含新品、上新、首发等关键词的商品的用户",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "低",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "中低",
                      param_desc: "",
                    },
                    {
                      param_name: "中",
                      param_desc: "",
                      param_id: 3,
                    },
                    {
                      param_id: 4,
                      param_name: "中高",
                      param_desc: "",
                    },
                    {
                      param_id: 5,
                      param_name: "高",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_type: "2",
                  label_desc:
                    "追奢一族机会人群：根据用户过去30天在奢侈品、二奢商品上的互动及支付行为，综合预测用户是否偏好购买奢侈品。\n品质导向用户：基于近180天购买过好货商品的用户做种子人群，结合用户支付金额、抖音内容偏好等重要特征综合预测用户是否品质导向购物，会截断处理掉抖音活跃度低，历史消费能力低的用户；枚举值从低到高代表品质导向越显著。\n品牌导向用户：基于近180天购买过B3或B4品牌的人群，结合用户支付金额、抖音内容偏好等重要特征综合预测用户是否品牌导向购物，会截断处理掉抖音活跃度低，历史消费能力低的用户；枚举值从低到高代表品牌导向越显著",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "低",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "中低",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "中",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "中高",
                      param_desc: "",
                    },
                    {
                      param_id: 5,
                      param_name: "高",
                      param_desc: "",
                    },
                  ],
                  label_id: 66,
                  label_name: "机会人群",
                },
                {
                  label_id: 69,
                  label_name: "用户冲动消费倾向度",
                  label_type: "2",
                  label_desc:
                    "基于用户在近30天直播间、短视频下单时间低于10s及以下，及近30天下单商品中退货在该二级类目占比高于平均水平等综合预测用户冲动消费倾向度。\n枚举值从低到高代表冲动消费倾向度越显著。",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "低",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "中低",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "中",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "中高",
                      param_desc: "",
                    },
                    {
                      param_id: 5,
                      param_name: "高",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_desc:
                    "基于近180天购买过好货商品的用户做种子人群，结合用户支付金额、抖音内容偏好等重要特征综合预测用户是否品质导向购物，会截断处理掉抖音活跃度低，历史消费能力低的用户；枚举值从低到高代表品质导向越显著。",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "低",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "中低",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "中",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "中高",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 5,
                      param_name: "高",
                    },
                  ],
                  label_id: 70,
                  label_name: "用户品质导向",
                  label_type: "2",
                },
                {
                  label_id: 71,
                  label_name: "用户品牌导向",
                  label_type: "2",
                  label_desc:
                    "基于近180天购买过B3或B4品牌的人群，结合用户支付金额、抖音内容偏好等重要特征综合预测用户是否品牌导向购物，会截断处理掉抖音活跃度低，历史消费能力低的用户；枚举值从低到高代表品牌导向越显著。",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "低",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 2,
                      param_name: "中低",
                    },
                    {
                      param_desc: "",
                      param_id: 3,
                      param_name: "中",
                    },
                    {
                      param_name: "中高",
                      param_desc: "",
                      param_id: 4,
                    },
                    {
                      param_name: "高",
                      param_desc: "",
                      param_id: 5,
                    },
                  ],
                },
                {
                  label_name: "追奢一族机会人群",
                  label_type: "2",
                  label_desc:
                    "根据用户过去30天在奢侈品、二奢商品上的互动及支付行为，综合预测用户是否偏好购买奢侈品。",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "否",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "是",
                      param_desc: "",
                    },
                  ],
                  label_id: 72,
                },
              ],
            },
            {
              tab_name: "内容偏好特征",
              label_list: [
                {
                  label_type: "2",
                  label_desc: "预测用户对抖音短视频一级类目偏好",
                  label_id: 73,
                  label_name: "短视频一级类目偏好",
                },
                {
                  label_id: 74,
                  label_name: "短视频二级类目偏好",
                  label_type: "2",
                  label_desc: "预测用户对抖音短视频二级类目偏好",
                },
                {
                  label_id: 75,
                  label_name: "短视频三级类目偏好",
                  label_type: "2",
                  label_desc: "预测用户对抖音短视频三级类目偏好",
                },
              ],
            },
          ],
          label_list: [],
        },
        {
          tab_name: "品类标签",
          sub_tab: [],
          label_list: [
            {
              label_type: 7,
              label_desc: "在平台上购买所选类目商品较多的人群",
              param_list: [
                {
                  param_name: "玩具乐器",
                  sub_param_list: [
                    {
                      param_id: "20019",
                      param_name: "模玩/动漫/周边/娃圈/三坑/桌游",
                      param_desc: "",
                    },
                    {
                      param_name: "乐器/吉他/钢琴/配件",
                      param_desc: "",
                      param_id: "20020",
                    },
                    {
                      param_id: "20025",
                      param_name: "玩具/童车/益智/积木/模型",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                  param_id: 2,
                },
                {
                  param_id: 4,
                  param_name: "服饰内衣",
                  sub_param_list: [
                    {
                      param_id: "20005",
                      param_name: "女装",
                      param_desc: "",
                    },
                    {
                      param_id: "20009",
                      param_name: "男装",
                      param_desc: "",
                    },
                    {
                      param_id: "20062",
                      param_name: "内衣裤袜",
                      param_desc: "",
                    },
                    {
                      param_id: "20093",
                      param_name: "服饰配件/皮带/帽子/围巾",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
                {
                  sub_param_list: [
                    {
                      param_id: "20056",
                      param_name: "个人护理",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: "20115",
                      param_name: "洗护清洁剂/卫生巾/纸/香薰",
                    },
                  ],
                  param_desc: "",
                  param_id: 5,
                  param_name: "个护家清",
                },
                {
                  param_id: 11,
                  param_name: "鲜花园艺",
                  sub_param_list: [
                    {
                      param_id: "20016",
                      param_name: "农机/农具/农膜",
                      param_desc: "",
                    },
                    {
                      param_id: "20037",
                      param_name: "畜牧/养殖物资",
                      param_desc: "",
                    },
                    {
                      param_id: "20063",
                      param_name: "农用物资",
                      param_desc: "",
                    },
                    {
                      param_name: "鲜花速递/花卉仿真/绿植园艺",
                      param_desc: "",
                      param_id: "20107",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_id: 16,
                  param_name: "鞋靴箱包",
                  sub_param_list: [
                    {
                      param_desc: "",
                      param_id: "20006",
                      param_name: "女鞋",
                    },
                    {
                      param_id: "20010",
                      param_name: "男鞋",
                      param_desc: "",
                    },
                    {
                      param_id: "20011",
                      param_name: "箱包",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_id: 18,
                  param_name: "运动户外",
                  sub_param_list: [
                    {
                      param_id: "20026",
                      param_name: "户外/登山/野营/旅行用品",
                      param_desc: "",
                    },
                    {
                      param_id: "20027",
                      param_name: "运动/瑜伽/健身/球迷用品",
                      param_desc: "",
                    },
                    {
                      param_id: "20046",
                      param_name: "运动鞋",
                      param_desc: "",
                    },
                    {
                      param_name: "电动车/配件/交通工具",
                      param_desc: "",
                      param_id: "20051",
                    },
                    {
                      param_name: "运动包/户外包/配件",
                      param_desc: "",
                      param_id: "20052",
                    },
                    {
                      param_desc: "",
                      param_id: "20053",
                      param_name: "运动服/休闲服装",
                    },
                    {
                      param_id: "20054",
                      param_name: "自行车/骑行装备/零配件",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_id: 19,
                  param_name: "钟表配饰",
                  sub_param_list: [
                    {
                      param_id: "20003",
                      param_name: "打火机/瑞士军刀/眼镜",
                      param_desc: "",
                    },
                    {
                      param_id: "20047",
                      param_name: "钟表类",
                      param_desc: "",
                    },
                    {
                      param_id: "20080",
                      param_name: "时尚饰品",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
              ],
              front_type: 7,
              label_id: 36,
              label_name: "类目核心人群",
            },
            {
              label_id: 37,
              label_name: "类目潜在人群",
              label_type: 7,
              label_desc: "没有在平台上购买过所选类目商品的人群",
              param_list: [
                {
                  param_id: 2,
                  param_name: "玩具乐器",
                  sub_param_list: [
                    {
                      param_id: "20019",
                      param_name: "模玩/动漫/周边/娃圈/三坑/桌游",
                      param_desc: "",
                    },
                    {
                      param_name: "乐器/吉他/钢琴/配件",
                      param_desc: "",
                      param_id: "20020",
                    },
                    {
                      param_id: "20025",
                      param_name: "玩具/童车/益智/积木/模型",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_desc: "",
                  param_id: 4,
                  param_name: "服饰内衣",
                  sub_param_list: [
                    {
                      param_desc: "",
                      param_id: "20005",
                      param_name: "女装",
                    },
                    {
                      param_desc: "",
                      param_id: "20009",
                      param_name: "男装",
                    },
                    {
                      param_desc: "",
                      param_id: "20062",
                      param_name: "内衣裤袜",
                    },
                    {
                      param_id: "20093",
                      param_name: "服饰配件/皮带/帽子/围巾",
                      param_desc: "",
                    },
                  ],
                },
                {
                  sub_param_list: [
                    {
                      param_id: "20056",
                      param_name: "个人护理",
                      param_desc: "",
                    },
                    {
                      param_id: "20115",
                      param_name: "洗护清洁剂/卫生巾/纸/香薰",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                  param_id: 5,
                  param_name: "个护家清",
                },
                {
                  sub_param_list: [
                    {
                      param_id: "20016",
                      param_name: "农机/农具/农膜",
                      param_desc: "",
                    },
                    {
                      param_id: "20037",
                      param_name: "畜牧/养殖物资",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: "20063",
                      param_name: "农用物资",
                    },
                    {
                      param_name: "鲜花速递/花卉仿真/绿植园艺",
                      param_desc: "",
                      param_id: "20107",
                    },
                  ],
                  param_desc: "",
                  param_id: 11,
                  param_name: "鲜花园艺",
                },
                {
                  param_id: 16,
                  param_name: "鞋靴箱包",
                  sub_param_list: [
                    {
                      param_id: "20006",
                      param_name: "女鞋",
                      param_desc: "",
                    },
                    {
                      param_id: "20010",
                      param_name: "男鞋",
                      param_desc: "",
                    },
                    {
                      param_id: "20011",
                      param_name: "箱包",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_id: 18,
                  param_name: "运动户外",
                  sub_param_list: [
                    {
                      param_id: "20026",
                      param_name: "户外/登山/野营/旅行用品",
                      param_desc: "",
                    },
                    {
                      param_id: "20027",
                      param_name: "运动/瑜伽/健身/球迷用品",
                      param_desc: "",
                    },
                    {
                      param_id: "20046",
                      param_name: "运动鞋",
                      param_desc: "",
                    },
                    {
                      param_id: "20051",
                      param_name: "电动车/配件/交通工具",
                      param_desc: "",
                    },
                    {
                      param_id: "20052",
                      param_name: "运动包/户外包/配件",
                      param_desc: "",
                    },
                    {
                      param_id: "20053",
                      param_name: "运动服/休闲服装",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: "20054",
                      param_name: "自行车/骑行装备/零配件",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_id: 19,
                  param_name: "钟表配饰",
                  sub_param_list: [
                    {
                      param_desc: "",
                      param_id: "20003",
                      param_name: "打火机/瑞士军刀/眼镜",
                    },
                    {
                      param_id: "20047",
                      param_name: "钟表类",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: "20080",
                      param_name: "时尚饰品",
                    },
                  ],
                  param_desc: "",
                },
              ],
              front_type: 7,
            },
            {
              param_list: [
                {
                  param_id: 2,
                  param_name: "玩具乐器",
                  sub_param_list: [
                    {
                      param_name: "模玩/动漫/周边/娃圈/三坑/桌游",
                      param_desc: "",
                      param_id: "20019",
                    },
                    {
                      param_id: "20020",
                      param_name: "乐器/吉他/钢琴/配件",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: "20025",
                      param_name: "玩具/童车/益智/积木/模型",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_id: 4,
                  param_name: "服饰内衣",
                  sub_param_list: [
                    {
                      param_name: "女装",
                      param_desc: "",
                      param_id: "20005",
                    },
                    {
                      param_id: "20009",
                      param_name: "男装",
                      param_desc: "",
                    },
                    {
                      param_id: "20062",
                      param_name: "内衣裤袜",
                      param_desc: "",
                    },
                    {
                      param_id: "20093",
                      param_name: "服饰配件/皮带/帽子/围巾",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_name: "个护家清",
                  sub_param_list: [
                    {
                      param_id: "20056",
                      param_name: "个人护理",
                      param_desc: "",
                    },
                    {
                      param_id: "20115",
                      param_name: "洗护清洁剂/卫生巾/纸/香薰",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                  param_id: 5,
                },
                {
                  param_id: 11,
                  param_name: "鲜花园艺",
                  sub_param_list: [
                    {
                      param_id: "20016",
                      param_name: "农机/农具/农膜",
                      param_desc: "",
                    },
                    {
                      param_id: "20037",
                      param_name: "畜牧/养殖物资",
                      param_desc: "",
                    },
                    {
                      param_id: "20063",
                      param_name: "农用物资",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: "20107",
                      param_name: "鲜花速递/花卉仿真/绿植园艺",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_id: 16,
                  param_name: "鞋靴箱包",
                  sub_param_list: [
                    {
                      param_id: "20006",
                      param_name: "女鞋",
                      param_desc: "",
                    },
                    {
                      param_name: "男鞋",
                      param_desc: "",
                      param_id: "20010",
                    },
                    {
                      param_id: "20011",
                      param_name: "箱包",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_id: 18,
                  param_name: "运动户外",
                  sub_param_list: [
                    {
                      param_id: "20026",
                      param_name: "户外/登山/野营/旅行用品",
                      param_desc: "",
                    },
                    {
                      param_id: "20027",
                      param_name: "运动/瑜伽/健身/球迷用品",
                      param_desc: "",
                    },
                    {
                      param_id: "20046",
                      param_name: "运动鞋",
                      param_desc: "",
                    },
                    {
                      param_id: "20051",
                      param_name: "电动车/配件/交通工具",
                      param_desc: "",
                    },
                    {
                      param_id: "20052",
                      param_name: "运动包/户外包/配件",
                      param_desc: "",
                    },
                    {
                      param_id: "20053",
                      param_name: "运动服/休闲服装",
                      param_desc: "",
                    },
                    {
                      param_id: "20054",
                      param_name: "自行车/骑行装备/零配件",
                      param_desc: "",
                    },
                  ],
                  param_desc: "",
                },
                {
                  param_desc: "",
                  param_id: 19,
                  param_name: "钟表配饰",
                  sub_param_list: [
                    {
                      param_id: "20003",
                      param_name: "打火机/瑞士军刀/眼镜",
                      param_desc: "",
                    },
                    {
                      param_id: "20047",
                      param_name: "钟表类",
                      param_desc: "",
                    },
                    {
                      param_id: "20080",
                      param_name: "时尚饰品",
                      param_desc: "",
                    },
                  ],
                },
              ],
              front_type: 7,
              label_id: 38,
              label_name: "类目老客",
              label_type: 7,
              label_desc: "在平台上购买过所选类目商品的人群",
            },
          ],
        },
        {
          label_list: [],
          tab_name: "账号标签",
          sub_tab: [
            {
              tab_name: "账号",
              label_list: [
                {
                  label_type: "4",
                  label_desc: "在下方时间内关注店铺绑定的官方、渠道账号的人群",
                  label_id: 7,
                  label_name: "关注过账号",
                },
                {
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_name: "最近7天",
                      param_desc: "",
                      param_id: 2,
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                  label_id: 8,
                  label_name: "加入过粉丝团",
                  label_type: "1",
                  label_desc:
                    "在下方时间内加入店铺绑定的官方、渠道账号的粉丝团人群",
                },
              ],
            },
            {
              tab_name: "短视频",
              label_list: [
                {
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                  label_id: 9,
                  label_name: "短视频观看",
                  label_type: "1",
                  label_desc:
                    "在下方时间内观看店铺绑定的官方、渠道账号视频的人群",
                },
                {
                  label_desc:
                    "在下方时间内点击店铺绑定的官方、渠道账号视频购物车的人群",
                  param_list: [
                    {
                      param_desc: "",
                      param_id: 1,
                      param_name: "最近1天",
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                  label_id: 10,
                  label_name: "短视频购物车点击",
                  label_type: "1",
                },
                {
                  label_id: 29,
                  label_name: "视频商品展示",
                  label_type: "1",
                  label_desc:
                    "在下方时间内查看店铺绑定的官方、渠道账号视频商品的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                },
              ],
            },
            {
              label_list: [
                {
                  label_id: 11,
                  label_name: "直播观看",
                  label_type: "1",
                  label_desc:
                    "在下方时间内观看店铺绑定的官方、渠道账号直播的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_name: "直播点赞",
                  label_type: "1",
                  label_desc:
                    "在下方时间内店铺绑定的官方、渠道账号直播点赞的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 3,
                      param_name: "最近15天",
                    },
                    {
                      param_desc: "",
                      param_id: 4,
                      param_name: "最近30天",
                    },
                  ],
                  label_id: 12,
                },
                {
                  label_id: 13,
                  label_name: "直播弹幕",
                  label_type: "1",
                  label_desc:
                    "在下方时间内店铺绑定的官方、渠道账号直播发过弹幕的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 2,
                      param_name: "最近7天",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_name: "直播购物车点击",
                  label_type: "1",
                  label_desc:
                    "在下方时间内店铺绑定的官方、渠道账号直播中点击购物车的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 2,
                      param_name: "最近7天",
                    },
                    {
                      param_name: "最近15天",
                      param_desc: "",
                      param_id: 3,
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                  label_id: 14,
                },
                {
                  label_id: 15,
                  label_name: "直播商品点击",
                  label_type: "1",
                  label_desc:
                    "在下方时间内店铺绑定的官方、渠道账号直播中点击商品的人群",
                  param_list: [
                    {
                      param_name: "最近1天",
                      param_desc: "",
                      param_id: 1,
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_desc:
                    "在下方时间内店铺绑定的官方、渠道账号直播中浏览过商品详情页的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 2,
                      param_name: "最近7天",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                  ],
                  label_id: 16,
                  label_name: "直播浏览过商详",
                  label_type: "1",
                },
              ],
              tab_name: "直播",
            },
          ],
        },
        {
          sub_tab: [
            {
              tab_name: "店铺交易互动",
              label_list: [
                {
                  label_id: 23,
                  label_name: "历史成交单数",
                  label_type: "5",
                  label_desc: "用户在店铺近一年内支付的订单数量",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "介于",
                      param_desc: "",
                    },
                    {
                      param_name: "大于等于",
                      param_desc: "",
                      param_id: 2,
                    },
                    {
                      param_id: 3,
                      param_name: "小于等于",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_id: 24,
                  label_name: "历史成交金额",
                  label_type: "5",
                  label_desc: "用户在店铺近一年内支付的金额（单位元）",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "介于",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "大于等于",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "小于等于",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_id: 25,
                  label_name: "最近一次成单日期",
                  label_type: "6",
                  label_desc: "用户在店铺近一年内成单（支付）的日期",
                },
                {
                  label_id: 26,
                  label_name: "首次成单日期",
                  label_type: "6",
                  label_desc: "用户在店铺历史首次成单的日期",
                },
                {
                  label_id: 32,
                  label_name: "浏览过店铺",
                  label_type: "1",
                  label_desc: "在下方时间内浏览过店铺的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_name: "最近60天",
                      param_desc: "",
                      param_id: 4,
                    },
                    {
                      param_id: 5,
                      param_name: "最近90天",
                      param_desc: "",
                    },
                    {
                      param_id: 6,
                      param_name: "最近180天",
                      param_desc: "",
                    },
                  ],
                },
              ],
            },
            {
              label_list: [
                {
                  label_id: 17,
                  label_name: "收藏过商品",
                  label_type: "1",
                  label_desc: "在下方时间内收藏过店铺商品的人群（短视频渠道）",
                  param_list: [
                    {
                      param_name: "最近7天",
                      param_desc: "",
                      param_id: 1,
                    },
                    {
                      param_id: 2,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近60天",
                      param_desc: "",
                    },
                    {
                      param_id: 5,
                      param_name: "最近90天",
                      param_desc: "",
                    },
                    {
                      param_id: 6,
                      param_name: "最近180天",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_id: 18,
                  label_name: "未收藏过商品",
                  label_type: "1",
                  label_desc:
                    "在下方时间内未收藏过店铺商品的人群（短视频渠道）",
                  param_list: [
                    {
                      param_desc: "",
                      param_id: 1,
                      param_name: "最近7天",
                    },
                    {
                      param_id: 2,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近60天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 5,
                      param_name: "最近90天",
                    },
                    {
                      param_desc: "",
                      param_id: 6,
                      param_name: "最近180天",
                    },
                  ],
                },
                {
                  label_id: 19,
                  label_name: "加购过商品",
                  label_type: "1",
                  label_desc: "在下方时间内加购过店铺商品的人群（短视频渠道）",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_name: "最近60天",
                      param_desc: "",
                      param_id: 4,
                    },
                    {
                      param_id: 5,
                      param_name: "最近90天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 6,
                      param_name: "最近180天",
                    },
                  ],
                },
                {
                  label_type: "1",
                  label_desc:
                    "在下方时间内未加购过店铺商品的人群（短视频渠道）",
                  param_list: [
                    {
                      param_name: "最近7天",
                      param_desc: "",
                      param_id: 1,
                    },
                    {
                      param_id: 2,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近60天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 5,
                      param_name: "最近90天",
                    },
                    {
                      param_name: "最近180天",
                      param_desc: "",
                      param_id: 6,
                    },
                  ],
                  label_id: 20,
                  label_name: "未加购过商品",
                },
                {
                  label_name: "购买过商品",
                  label_type: "1",
                  label_desc: "在下方时间内购买过店铺商品的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近60天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近90天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近180天",
                      param_desc: "",
                    },
                    {
                      param_name: "最近365天",
                      param_desc: "",
                      param_id: 5,
                    },
                    {
                      param_id: 6,
                      param_name: "最近730天",
                      param_desc: "",
                    },
                  ],
                  label_id: 21,
                },
                {
                  label_desc: "在下方时间内没有购买过店铺商品的人群",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近60天",
                      param_desc: "",
                    },
                    {
                      param_name: "最近90天",
                      param_desc: "",
                      param_id: 3,
                    },
                    {
                      param_id: 4,
                      param_name: "最近180天",
                      param_desc: "",
                    },
                    {
                      param_name: "最近365天",
                      param_desc: "",
                      param_id: 5,
                    },
                    {
                      param_name: "最近730天",
                      param_desc: "",
                      param_id: 6,
                    },
                  ],
                  label_id: 22,
                  label_name: "未购买过商品",
                  label_type: "1",
                },
                {
                  label_id: 48,
                  label_name: "购买过某商品",
                  label_type: "9",
                  label_desc: "在下方时间内购买了某商品的用户",
                  param_list: [
                    {
                      param_name: "最近30天",
                      param_desc: "",
                      param_id: 1,
                    },
                    {
                      param_id: 2,
                      param_name: "最近60天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近90天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 4,
                      param_name: "最近180天",
                    },
                    {
                      param_desc: "",
                      param_id: 5,
                      param_name: "最近365天",
                    },
                  ],
                },
                {
                  param_list: [
                    {
                      param_desc: "",
                      param_id: 1,
                      param_name: "最近1天",
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 5,
                      param_name: "最近60天",
                    },
                  ],
                  label_id: 76,
                  label_name: "购买过某定金预售商品",
                  label_type: "9",
                  label_desc: "在下方时间内购买了某定金预售商品的用户",
                },
                {
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "最近1天",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_id: 3,
                      param_name: "最近15天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 4,
                      param_name: "最近30天",
                    },
                    {
                      param_id: 5,
                      param_name: "最近60天",
                      param_desc: "",
                    },
                  ],
                  label_id: 77,
                  label_name: "购买过某阶梯发货商品",
                  label_type: "9",
                  label_desc: "在下方时间内购买过某阶梯发货商品的用户",
                },
                {
                  label_id: 78,
                  label_name: "购买过某全款预售商品",
                  label_type: "9",
                  label_desc: "在下方时间内购买过某全款预售商品的用户",
                  param_list: [
                    {
                      param_name: "最近1天",
                      param_desc: "",
                      param_id: 1,
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_desc: "",
                      param_id: 3,
                      param_name: "最近15天",
                    },
                    {
                      param_name: "最近30天",
                      param_desc: "",
                      param_id: 4,
                    },
                    {
                      param_id: 5,
                      param_name: "最近60天",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_id: 79,
                  label_name: "加购过某商品",
                  label_type: "9",
                  label_desc: "在下方时间内加购过某商品的用户",
                  param_list: [
                    {
                      param_desc: "",
                      param_id: 1,
                      param_name: "最近1天",
                    },
                    {
                      param_id: 2,
                      param_name: "最近7天",
                      param_desc: "",
                    },
                    {
                      param_name: "最近15天",
                      param_desc: "",
                      param_id: 3,
                    },
                    {
                      param_id: 4,
                      param_name: "最近30天",
                      param_desc: "",
                    },
                    {
                      param_name: "最近60天",
                      param_desc: "",
                      param_id: 5,
                    },
                  ],
                },
              ],
              tab_name: "店铺商品标签",
            },
            {
              tab_name: "店铺策略人群",
              label_list: [
                {
                  label_id: 44,
                  label_name: "商家偏好人群",
                  label_type: "1",
                  label_desc: "根据购买过店铺商品的用户行为预测得出",
                  param_list: [
                    {
                      param_desc: "",
                      param_id: 1,
                      param_name: "是",
                    },
                    {
                      param_id: 2,
                      param_name: "否",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_id: 45,
                  label_name: "用户分类",
                  label_type: "2",
                  label_desc: "店铺的用户分类，具体口径见小问号中描述",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "新客",
                      param_desc:
                        "近365日内无订单支付且近30天有商家互动，或近30天支付一次且近365日内无支付记录的人群",
                    },
                    {
                      param_id: 2,
                      param_name: "老客",
                      param_desc: "近365天有过店铺支付的人群(去除新客)",
                    },
                    {
                      param_id: 3,
                      param_name: "粉丝",
                      param_desc: "店铺官方账号的粉丝人群",
                    },
                    {
                      param_desc: "店铺所有会员",
                      param_id: 4,
                      param_name: "会员",
                    },
                  ],
                },
              ],
            },
          ],
          label_list: [],
          tab_name: "店铺标签",
        },
        {
          sub_tab: [
            {
              tab_name: "会员资产",
              label_list: [
                {
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "非会员",
                      param_desc: "",
                    },
                    {
                      param_name: "1级",
                      param_desc: "",
                      param_id: 2,
                    },
                    {
                      param_id: 3,
                      param_name: "2级",
                      param_desc: "",
                    },
                    {
                      param_id: 4,
                      param_name: "3级",
                      param_desc: "",
                    },
                    {
                      param_id: 5,
                      param_name: "4级",
                      param_desc: "",
                    },
                    {
                      param_name: "5级",
                      param_desc: "",
                      param_id: 6,
                    },
                    {
                      param_desc: "",
                      param_id: 7,
                      param_name: "6级",
                    },
                  ],
                  label_id: 27,
                  label_name: "会员等级",
                  label_type: "2",
                  label_desc:
                    "用户的会员等级（取商家后台设置的会员等级，最多6个等级）",
                },
                {
                  label_id: 28,
                  label_name: "入会日期",
                  label_type: "6",
                  label_desc: "用户成为会员的日期",
                },
                {
                  label_id: 33,
                  label_name: "是否为高潜未购会员",
                  label_type: "1",
                  label_desc:
                    "历史未在店铺购买过，且近7天购买预测可能性高的会员",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "是",
                      param_desc: "",
                    },
                    {
                      param_name: "否",
                      param_desc: "",
                      param_id: 2,
                    },
                  ],
                },
                {
                  label_id: 34,
                  label_name: "是否有未核销会员券",
                  label_type: "1",
                  label_desc: "用户已领取会员券且未核销",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "是",
                      param_desc: "",
                    },
                    {
                      param_id: 2,
                      param_name: "否",
                      param_desc: "",
                    },
                  ],
                },
                {
                  label_id: 35,
                  label_name: "会员积分",
                  label_type: "5",
                  label_desc: "用户的会员积分",
                  param_list: [
                    {
                      param_id: 1,
                      param_name: "介于",
                      param_desc: "",
                    },
                    {
                      param_name: "大于等于",
                      param_desc: "",
                      param_id: 2,
                    },
                    {
                      param_id: 3,
                      param_name: "小于等于",
                      param_desc: "",
                    },
                  ],
                },
              ],
            },
            {
              tab_name: "会员活动",
              label_list: [],
            },
          ],
          label_list: [],
          tab_name: "会员标签",
        },
      ],
    },
  })
}

module.exports = {
  getData,
}

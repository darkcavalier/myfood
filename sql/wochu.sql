/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50149
Source Host           : localhost:3306
Source Database       : wochu

Target Server Type    : MYSQL
Target Server Version : 50149
File Encoding         : 65001

Date: 2018-02-28 11:56:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_cartitem
-- ----------------------------
DROP TABLE IF EXISTS `t_cartitem`;
CREATE TABLE `t_cartitem` (
  `cartItemid` char(32) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `gid` char(32) DEFAULT NULL,
  `uid` char(32) DEFAULT NULL,
  `orderBy` int(11) DEFAULT NULL,
  PRIMARY KEY (`cartItemid`),
  KEY `orderBy` (`orderBy`),
  KEY `FK_t_cartitem_t_goods` (`gid`),
  KEY `FK_t_cartitem_t_user` (`uid`),
  CONSTRAINT `FK_t_cartitem_t_goods` FOREIGN KEY (`gid`) REFERENCES `t_goods` (`gid`),
  CONSTRAINT `FK_t_cartitem_t_user` FOREIGN KEY (`uid`) REFERENCES `t_user` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cartitem
-- ----------------------------
INSERT INTO `t_cartitem` VALUES ('37203CB16DC94D1AB8688E612A93D909', '1', '26', '122471B888EA4A468F9E63FD44D49BF0', null);
INSERT INTO `t_cartitem` VALUES ('3F35735890494776B8F14F41F29D3B7B', '6', '16', 'EB1C0FD052244AADA59A80440281B164', null);
INSERT INTO `t_cartitem` VALUES ('A1F1A725D9CE454FACFEEA3747F84240', '1', '15', 'AC16E4E78EC44C4086841F07DEE5695E', null);
INSERT INTO `t_cartitem` VALUES ('B3F9CCBE55EC4F83B6D8586CD3BE836A', '1', '1', '122471B888EA4A468F9E63FD44D49BF0', null);
INSERT INTO `t_cartitem` VALUES ('B5C424D2B06D460E8D51A0E75CD4E6E9', '1', '15', '3F55D79325304695947156C3C4D29348', null);
INSERT INTO `t_cartitem` VALUES ('CD09156255D14475A8B6715371179565', '1', '10', '3F55D79325304695947156C3C4D29348', null);
INSERT INTO `t_cartitem` VALUES ('D07FE53573A045C099C0E2D248DE0F44', '1', '19', '24E90BA6FB4C41CA96F49E34D11ECDB2', null);
INSERT INTO `t_cartitem` VALUES ('EC60CCF2DD0D463697931AA40E5D8E5A', '2', '2', 'EB1C0FD052244AADA59A80440281B164', null);
INSERT INTO `t_cartitem` VALUES ('F2CA1AA9C5E64B078798330AF33AB1B3', '1', '10', '122471B888EA4A468F9E63FD44D49BF0', null);
INSERT INTO `t_cartitem` VALUES ('F9B5C5EFE44D46F8B2EB7B4E9D12A1E6', '1', '17', '3F55D79325304695947156C3C4D29348', null);

-- ----------------------------
-- Table structure for t_goods
-- ----------------------------
DROP TABLE IF EXISTS `t_goods`;
CREATE TABLE `t_goods` (
  `gid` char(32) NOT NULL,
  `gname` varchar(45) NOT NULL,
  `describe` varchar(45) DEFAULT NULL,
  `currprice` decimal(8,1) DEFAULT NULL,
  `price` decimal(8,1) DEFAULT NULL,
  `place` varchar(32) DEFAULT NULL,
  `date` varchar(32) DEFAULT NULL,
  `term` varchar(32) DEFAULT NULL,
  `spc` varchar(32) DEFAULT NULL,
  `orderby` int(11) DEFAULT NULL,
  `leibie` varchar(45) DEFAULT NULL,
  `lanmu` varchar(32) DEFAULT NULL,
  `image_a` varchar(100) DEFAULT NULL,
  `cp` decimal(8,1) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_goods
-- ----------------------------
INSERT INTO `t_goods` VALUES ('1', '小青菜350克', '翠绿清香，超营养的亲民菜', '0.9', '0.9', '崇明', '10', '3.0-10.0', '350g', '22', '叶菜类', '1', 'img/1-3.jpg', '17.3');
INSERT INTO `t_goods` VALUES ('10', '舟山冷鲜黄鱼一条装200g', '舟山直达，鲜嫩营养，冰鲜黄花鱼 净膛前200—300g一条，净膛后净含量140g以上', '16.9', '16.9', '浙江舟山', '3', '0.0～5.0', '170g', '33', ' 鱼类', '1', 'img/2-4.jpg', '17.3');
INSERT INTO `t_goods` VALUES ('11', '我厨优选猪瘦肉片500g', '若36小时内未食用此商品，请放入冰箱冷冻保存 ', '22.9', '22.9', '上海 ', '5', '0.0～4.0', '500g ', '44', '猪肉', '1', 'img/2-5.jpg', '17.3');
INSERT INTO `t_goods` VALUES ('12', '特小凤黄囊西瓜1粒装(单果1000g以上)', null, '19.9', '19.9', '海南', null, '2.0～8.0', '1000g', '45', '时令水果', '1', 'img/2-6.jpg', '17.3');
INSERT INTO `t_goods` VALUES ('13', '明治醇壹950ml', '高温杀菌牛乳，安心优质蛋白 ', '17.9', '17.9', '中国苏州 ', '15', '2.0～6.0', '950ml ', '13', '低温鲜奶 ', '1', 'img/2-7.jpg', '17.3');
INSERT INTO `t_goods` VALUES ('14', '北大荒珍珠米2500g', '东北大米，珍珠米', '25.0', '25.0', '黑龙江 ', '540', '4.0～25.0', '2500g ', '34', '米面杂粮', '1', 'img/2-8.jpg', '17.3');
INSERT INTO `t_goods` VALUES ('15', '中粮家佳康里脊肉340g', '若36小时内未食用此商品，请放入冰箱冷冻保存', '16.9', '25.9', '江苏东台 ', '5', '0.0～4.0', '340g ', '56', '猪肉', '1', 'img/2-9.jpg', '17.3');
INSERT INTO `t_goods` VALUES ('16', '（培根）比萨饼底（7寸厚片）180g', '速食西点，解冻后加热即食', '16.9', '16.9', '珠海', '365', '-25.0～-18.0', '1片 ', '96', '西式点心', '1', 'img/2-10.jpg', '18.8');
INSERT INTO `t_goods` VALUES ('17', '罗马生菜（350g）', '生食最佳，最宜制作蔬菜沙拉 ', '5.9', '6.9', '上海 ', ' 2', '3.0～10.0', ' 350g ', '235', '叶菜类 ', '1', 'img/3-3.jpg', '8.9');
INSERT INTO `t_goods` VALUES ('18', '红米苋350g', '新鲜红苋，红汁诱人', '2.9', '5.9', '上海 ', null, '4.0～6.0', '350g ', '245', '叶菜类 ', '1', 'img/3-4.jpg', '6.5');
INSERT INTO `t_goods` VALUES ('19', '鲜动生活狭鳕鱼柳350g', null, '19.9', '28.9', '广东深圳', '540', '-25.0～-18.0', '350g ', '325', '鱼类 ', '1', 'img/3-5.jpg', '19.7');
INSERT INTO `t_goods` VALUES ('2', '土豆（500g以上)', '低脂又饱腹，能瘦身的家常菜', '1.9', '3.5', '', '', '3.0-10.0', '500g', '325', '根茎类', '1', 'img/1-4.jpg', '4.5');
INSERT INTO `t_goods` VALUES ('20', '加拿大AAA级安格斯板腱牛排200g', null, '38.9', '42.9', '加拿大', '365', '-25.0～-18.0', '200g ', '113', '牛羊肉 ', '1', 'img/3-6.jpg', '19.6');
INSERT INTO `t_goods` VALUES ('21', '欧盟有机富士苹果6只装', null, '22.9', '29.9', '山东', '10', '5.0～8.0', '6只 ', '332', '苹果/梨', '1', 'img/3-7.jpg', '20.1');
INSERT INTO `t_goods` VALUES ('22', '麦果力水果粒果仁谷物营养麦片250g', null, '23.9', '29.9', '台湾', '240', '4.0～25.0', '250g', '112', '休闲食品 ', '1', 'img/3-8.jpg', '29.9');
INSERT INTO `t_goods` VALUES ('23', '去壳北极甜虾仁200g', '本产品为海虾仁', '39.9', '39.9', '辽宁丹东 ', '540', '-25.0～-18.0', '200g', '333', '虾类 ', '1', 'img/3-9.jpg', '69.8');
INSERT INTO `t_goods` VALUES ('24', '卡士·原态酪乳三联杯125*3 ', null, '25.6', '32.8', '深圳', '21', '0.0～4.0', '375ML ', '422', '低温酸奶', '1', 'img/3-10.jpg', '32.8');
INSERT INTO `t_goods` VALUES ('25', '杭椒爆鸭肫', '香辣脆韧超下饭', '17.8', '17.9', '上海 ', '2', ' 2.0～8.0', '363g', '424', '玲珑小炒', '1', 'img/4-3.jpg', '17.3');
INSERT INTO `t_goods` VALUES ('26', '营养蒸三宝', '甜糯营养，“蒸”健康！适合2-3岁儿童食用 ', '9.9', '15.9', '上海', '2', '2.0～8.0', '301g ', '444', '宝宝餐', '1', 'img/4-4.jpg', '15.9');
INSERT INTO `t_goods` VALUES ('27', '麻酱冰草', '兼具颜值与美味，餐厅菜的臻品享受', '9.9', '9.9', '上海', '2', '2.0～8.0', '300g', '3455', '精美凉菜 ', '1', 'img/4-5.jpg', '9.9');
INSERT INTO `t_goods` VALUES ('28', '西芹腰果', '酥香脆爽，降压又润肤', '12.9', '12.9', '上海', '2', '2.0～8.0', '320g ', '243', '田园时蔬', '1', 'img/4-6.jpg', '12.9');
INSERT INTO `t_goods` VALUES ('29', '山药炖乌鸡汤', '补血养颜的黄金搭档', '29.9', '29.9', '上海', '2', '2.0～8.0', '767g', '341', '营养汤羹', '1', 'img/4-7.jpg', '29.9');
INSERT INTO `t_goods` VALUES ('3', '鸿轩农业土鸡蛋10枚425g', '个头均匀，清黄层次分明。', '16.9', '16.9', '江苏南通 ', '30', '4.0～25.0', '10枚', '245', '蛋类', '1', 'img/1-5.jpg', '20.5');
INSERT INTO `t_goods` VALUES ('30', '三鲜烩芦笋', null, '18.9', '18.9', '上海 ', '2', '2.0～8.0', '410g', '243', '玲珑小炒', '1', 'img/4-8.jpg', '23.1');
INSERT INTO `t_goods` VALUES ('31', '地三鲜', '特色东北菜，鲜美味浓营养多', '9.9', '9.9', '上海', '2', '2.0～8.0', '515g ', '244', '田园时蔬', '1', 'img/4-9.jpg', '23.1');
INSERT INTO `t_goods` VALUES ('32', '藤椒金针肥牛', '一道麻香诱人的快手宴客菜', '19.9', '25.9', '上海', '2', '2.0～8.0', '502g', '234', '无肉不欢 ', '1', 'img/4-10.jpg', '25.9');
INSERT INTO `t_goods` VALUES ('4', '中粮家佳康小排400g', '若36小时内未食用此商品，请放入冰箱冷冻保存 ', '13.9', '13.9', '江苏东台 ', '5', ' 0.0～4.0', '400g ', '234', '猪肉', '1', 'img/1-6.jpg', '26.8');
INSERT INTO `t_goods` VALUES ('5', '进口香蕉6根', '菲律宾进口，细腻香甜 ', '9.9', '9.9', '菲律宾 ', ' 2', '10.0～15.0', '6个 ', '322', '芒果香蕉', '1', 'img/1-7.jpg', '14.9');
INSERT INTO `t_goods` VALUES ('6', '光明牌980ml纯鲜牛奶（低温）', '7天短保期，真正的营养新鲜 ', '14.9', '19.9', '上海', '7', '4.0～12.0', '980ML', '234', '低温鲜奶', '1', 'img/1-8.jpg', '19.9');
INSERT INTO `t_goods` VALUES ('7', '我厨优选猪里脊肉400g', null, '20.9', '0.0', '上海', '7', '0.0～4.0', '400g ', '322', '我厨优选肉禽', '1', 'img/1-9.jpg', '19.9');
INSERT INTO `t_goods` VALUES ('8', '栽培松茸200g', '养生珍品,媲美野生松茸 ', '9.9', '11.9', '云南', null, '4.0～12.0', '200g ', '334', '菌菇类', '1', 'img/1-10.jpg', '19.9');
INSERT INTO `t_goods` VALUES ('9', '铁棍山药（500g）', '正宗温县铁棍山药，养生珍品 ', '6.9', '7.9', '河南', null, '3.0～10.0', '500g ', '234', '根茎类 ', '1', 'img/2-3.jpg', '19.9');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `uid` char(32) NOT NULL,
  `loginname` varchar(50) DEFAULT NULL,
  `loginpass` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `activationCode` char(64) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('02ED94182A7749048B72CABBA5C435E2', 'zyh', '123', 'effs@162.com', '1', '11B41728C1764FB198D40DA68543CAA99C2BF9208CDA467C81686841ADA37EDA');
INSERT INTO `t_user` VALUES ('122471B888EA4A468F9E63FD44D49BF0', 'zzz', '123', '4532@163.com', '1', 'CD28C09F463443BCB24E60BE2D5505845AD5BD27827A4A2185988E5E46D7BF69');
INSERT INTO `t_user` VALUES ('24E90BA6FB4C41CA96F49E34D11ECDB2', 'pppp', 'pppp', '12334@qq.com', '1', '7DD82BCF6D60468B93F51A393E8329699627E5EC2F5C40BE916FF38A9FD462BA');
INSERT INTO `t_user` VALUES ('3F55D79325304695947156C3C4D29348', '', '123', 'wd@153.com', '1', '2351B750804C4AFCAE966D35189F8046675A8FC7E3EF41B29EBB39F921058363');
INSERT INTO `t_user` VALUES ('42D36F2FA6E048A6A21970CC0850D631', 'zyx', '123', 'asd@162.com', '1', '0BC45185A2EA4C98B704A14AEAA51F3CF1BB2D1286E1408494E29F3B48F3B8BE');
INSERT INTO `t_user` VALUES ('8E589B0B64C94B059C122D011CCC9B03', 'zer', '123', '24433@163.com', '1', '85ACB8D1419A4FE898A84D44EAE44E54433BC5E61FA14BE79108710AF2C07D65');
INSERT INTO `t_user` VALUES ('AC16E4E78EC44C4086841F07DEE5695E', 'xyz', '123', '11135@163.com', '1', '28FBB6513CBE4971AAB87B7B342188FE358FF6D1B31544BBBD77F7D9FE9DE213');
INSERT INTO `t_user` VALUES ('EB1C0FD052244AADA59A80440281B164', 'zyp', '123', 'sdw@qq.com', '1', 'A3E70681886F49B5858DD51080CF5042E644C1D01B184FC0B30BF347216BF00A');

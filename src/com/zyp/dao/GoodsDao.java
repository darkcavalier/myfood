package com.zyp.dao;


import cn.itcast.commons.CommonUtils;
import cn.itcast.jdbc.TxQueryRunner;
import com.zyp.bean.CartItem;
import com.zyp.bean.Goods;
import com.zyp.util.Util;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapHandler;
import org.apache.commons.dbutils.handlers.MapListHandler;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by zouyi on 2017/7/4.
 */
public class GoodsDao {
    private QueryRunner qr=new TxQueryRunner();
//    public List<Goods> findBookBylanmu(String lanmu){
//        List<Goods> goods = new ArrayList<Goods>();
//        Connection conn = Util.getConn();
//        String sql = "SELECT gname,currprice,price,image_a FROM t_goods WHERE lanmu=?";
//        PreparedStatement pstmt = null;
//        ResultSet rs = null;
//
//        try {
//            pstmt = conn.prepareStatement(sql);
//            rs = pstmt.executeQuery();
//
//            while(rs.next()){
//                Goods good = new Goods();
//                good.setGname(rs.getString("gname"));
//                good.setCurrPrice(rs.getDouble("currprice"));
//                good.setPrice(rs.getDouble("price"));
//                good.setImage_a(rs.getString("image_a"));
//                goods.add(good);
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }finally{
//            Util.closeAll(conn, pstmt, rs);
//        }
//
//
//        return goods;
//    }
    /**
     * 按bid查询
     * @param gid
     * @return
     * @throws SQLException
     */
    public Goods findBygid(String gid) throws SQLException {
        String sql = "select * from t_goods where gid=?";
        // 一行记录中，包含了很多的book的属性，还有一个cid属性
        Map<String,Object> map = qr.query(sql, new MapHandler(), gid);
        // 把Map中除了cid以外的其他属性映射到Book对象中
        Goods book = CommonUtils.toBean(map, Goods.class);
        // 把Map中cid属性映射到Category中，即这个Category只有cid



        return book;
    }
   public List<Goods> loadgoodsbylanmus(String lanmus)throws SQLException{
       Object[] goodsArray = lanmus.split(",");
       String whereSql =toWhereSql(goodsArray.length);
       String sql="SELECT gid,gname,currPrice,price,image_a,cp FROM t_goods where lanmu = ?";
       return  toGoodsList(qr.query(sql,new MapListHandler(),goodsArray));

   }


private String toWhereSql(int length) {
    StringBuilder sb=new StringBuilder("lanmu in(");
    for (int i=0;i<length;i++){
        sb.append("?");
        if (i<length-1){
            sb.append(",");
        }
    }
    sb.append(")");
    return  sb.toString();
    }

    /*
     * 把
     */
    private Goods toGoods(Map<String,Object> map) {
        if(map == null || map.size() == 0) return null;
        Goods goods = CommonUtils.toBean(map, Goods.class);


        return goods;
    }
    /*
 * 把多个Map(List<Map>)
 */
    private List<Goods> toGoodsList(List<Map<String,Object>> mapList) {
        List<Goods> GoodsList = new ArrayList<Goods>();
        for(Map<String,Object> map : mapList) {
            Goods goods = toGoods(map);
            GoodsList.add(goods);
        }
        return GoodsList;
    }
}

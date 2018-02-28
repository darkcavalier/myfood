package com.zyp.service;


import com.zyp.bean.Goods;
import com.zyp.dao.GoodsDao;

import java.sql.SQLException;
import java.util.List;

/**
 * Created by zouyi on 2017/7/4.
 */
public class GoodsService {
    private GoodsDao goodsDao = new GoodsDao();


    public List<Goods> loadgoodsbylanmus(String lanmus){
        try {
            return goodsDao.loadgoodsbylanmus(lanmus);
        }catch (SQLException e){
            throw new RuntimeException(e);
        }

    }
    public Goods load(String gid) {
        try {
            return goodsDao.findBygid(gid);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}

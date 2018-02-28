package com.zyp.web;


import cn.itcast.servlet.BaseServlet;
import com.zyp.bean.Goods;
import com.zyp.dao.GoodsDao;
import com.zyp.service.GoodsService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Created by zouyi on 2017/7/4.
// */
//@WebServlet(name = "GoodsServlet")
public class GoodsServlet extends BaseServlet {
     private GoodsService goodsService=new GoodsService();
    public String loadgoodsbylanmus(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String lanmu=req.getParameter("name");
        List<Goods> goodsList=goodsService.loadgoodsbylanmus(lanmu);
        req.getSession().setAttribute("goodsList",goodsList);
        return "main.jsp";
    }
    public String load(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String gid = req.getParameter("gid");//获取链接的参数gid
        Goods good = goodsService.load(gid);//通过gid得到对象
        req.setAttribute("good", good);//保存到req中
        return "food.jsp";//转发到food.jsp
    }

//    public String regist(HttpServletRequest req, HttpServletResponse resp)
//            throws ServletException, IOException {
//            System.out.println("test");;
//
//            return "";
//    }

//
//    @Override
//    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        req.setCharacterEncoding("utf-8");
//        GoodsDao goodsDao=new GoodsDao();
//        String value = req.getParameter("value");
//        if(value != null){
//            if (value.equals("meiri")){
//                String lanmu="1";
//                List<Goods> goods=goodsDao.findBookBylanmu(lanmu);
//                req.setAttribute("goods", goods);
//                req.getRequestDispatcher("index.jsp").forward(req, resp);
//            }
//            if (value.equals("ru")){
//                String lanmu="2";
//                List<Goods> goods=goodsDao.findBookBylanmu(lanmu);
//                req.setAttribute("goods", goods);
//                req.getRequestDispatcher("index.jsp").forward(req, resp);
//            }
//        }
//    }
}

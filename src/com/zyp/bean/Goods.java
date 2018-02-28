package com.zyp.bean;

/**
 * Created by zouyi on 2017/7/4.
 */
public class Goods {
    private String gid;
    private  String gname;//名字
    private String describe;//描述
    private Double price;//定价
    private double currPrice;//当前价
    private int orderby;//数量
    private String place;//产地
    private String date;//保质期
    private String spc;//规格
    private String term;//条件
    private String leibie;
    private String lanmu;//栏目
    private String image_a;
    private double cp;

    public double getCp() {
        return cp;
    }

    public void setCp(double cp) {
        this.cp = cp;
    }

    public int getOrderby() {
        return orderby;
    }

    public void setOrderby(int orderby) {
        this.orderby = orderby;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLeibie() {
        return leibie;
    }

    public void setLeibie(String leibie) {
        this.leibie = leibie;
    }

    public String getLanmu() {
        return lanmu;
    }

    public void setLanmu(String lanmu) {
        this.lanmu = lanmu;
    }




    public String getGid() {
        return gid;
    }

    public void setGid(String gid) {
        this.gid = gid;
    }

    public String getGname() {
        return gname;
    }

    public void setGname(String gname) {
        this.gname = gname;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public double getCurrPrice() {
        return currPrice;
    }

    public void setCurrPrice(double currPrice) {
        this.currPrice = currPrice;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }



    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public String getSpc() {
        return spc;
    }

    public void setSpc(String spc) {
        this.spc = spc;
    }

    public String getImage_a() {
        return image_a;
    }

    public void setImage_a(String image_a) {
        this.image_a = image_a;
    }


}

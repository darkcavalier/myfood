package com.zyp.util;

import java.sql.*;

/**
 * Created by zouyi on 2017/7/5.
 */
public class Util {
    private static final String URL = "jdbc:mysql://localhost:3306/wochu";
    private static final String DRIVER = "com.mysql.jdbc.Driver";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "123456";

    static {
        try {
            Class.forName(DRIVER);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static Connection getConn() {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }

    public static void closeAll(Connection conn, PreparedStatement pstmt, ResultSet rs) {
        try {
            if (conn != null) {
                conn.close();
            }
            if (pstmt != null) {
                pstmt.close();
            }
            if (rs != null) {
                rs.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) {
        //System.out.println(DBUtil.getConn());
        Util dbUtil=new Util();
        try {
            dbUtil.getConn();
            System.out.println("数据库连接成功");
        } catch(Exception e){
            e.printStackTrace();
        }
    }
}

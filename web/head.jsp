<%--
  Created by IntelliJ IDEA.
  User: zouyi
  Date: 2017/7/1
  Time: 7:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>头部</title>


    <link href="css/common.css" rel="stylesheet" />
    <link href="css/homePage.css" rel="stylesheet" />
    <script src="js/jquery.js"></script>
    <script src="js/login.js"></script>
    <script src="<c:url value='/js/cartlist.js'/>"></script>
</head>
<body>


<%-- 根据用户是否登录，显示不同的链接 --%>
<c:choose>
    <c:when test="${empty sessionScope.sessionUser }">
    <div class="login-info">
        <div class="login-ctl">
            <ul class="login-rt">
                <li>
                    <div class="kf-phone"><i></i>4008-527-957</div>
                </li>
                <li class="wx">
                    <div class="tit">
                        <a href="javascript:void(0)">
                            <i></i>我厨微信
                            <div class="con">
                                <img src="image/wx_QR.png" alt="扫码关注我厨" />
                            </div>
                        </a>
                    </div>
                </li>
                <li class="mobile">
                    <div class="tit">
                        <a href="javascript:void(0)">
                            <i></i>我厨APP
                            <div class="con">
                                <img src="image/downapp_QR.png" alt="扫码下App" />
                            </div>
                        </a>
                    </div>
                </li>
                <li class="register">
                    <a href="login.jsp">[登录]</a>，<a href="register.jsp">[注册有好礼]</a>
                </li>
            </ul>
        </div>
    </div>
    </c:when>
       <c:otherwise>
           <div class="login-info">
               <div class="login-ctl">
                   <ul class="login-rt">
                       <li>
                           <div class="kf-phone"><i></i>4008-527-957</div>
                       </li>
                       <li class="wx">
                           <div class="tit">
                               <a href="javascript:void(0)">
                                   <i></i>我厨微信
                                   <div class="con">
                                       <img src="image/wx_QR.png" alt="扫码关注我厨" />
                                   </div>
                               </a>
                           </div>
                       </li>
                       <li class="mobile">
                           <div class="tit">
                               <a href="javascript:void(0)">
                                   <i></i>我厨APP
                                   <div class="con">
                                       <img src="image/downapp_QR.png" alt="扫码下App" />
                                   </div>
                               </a>
                           </div>
                       </li>
                       <li class="psfw">
                           仅送上海
                       </li>
                       <li class="out" >
                           <a href="<c:url value='/UserServlet?method=quit'/>">退出账户</a>
                       </li>
                       <li class="center" >
                           <a href="<c:url value='/CartItemServlet?method=myCart'/>">我的购物车</a>
                       </li>
                       <li>
                           <a href="index.jsp">${sessionScope.sessionUser.loginname}</a>
                       </li>

                   </ul>
               </div>
           </div>
        </c:otherwise>
    </c:choose>
    <div class="header-ctl">
        <ul class="search-ctl">
            <li class="wlogo"><a href="/"><img src="image/wlogo.png" /></a></li>

        </ul>
    </div>




    <div class="nav-top">
        <div class="nav-ctl">
            <div class="catalogs">
                <div class="catalogs-title"><a href="">全部商品<s></s></a></div>
          </div>
            </div>

    </div>

    <!--头部导航 end-->
    <!--Content begin-->


    <!--轮播-->
    <%--<div id="ad-slider" class="ad-slider">--%>
        <%--<div class="bd">--%>
            <%--<ul>--%>
                <%--<li style="height:500px;background:url(https://wochu.oss-cn-hangzhou.aliyuncs.com/WebImage/20160817/pcLunbotu.jpg);background-position:center top;background-size:cover;">--%>
                    <%--<a href="http://www.wochu.cn/Member/Register" target="_blank">--%>

                    <%--</a>--%>
                <%--</li>--%>
            <%--</ul>--%>
        <%--</div>--%>
        <%--<div class="hd">--%>
            <%--<div class="hd-nav">--%>
                <%--<ul>--%>
                    <%--<li class="on"></li>--%>
                <%--</ul>--%>
            <%--</div>--%>
        <%--</div>--%>
        <%--<a href="javascript:void(0);" class="prev"><img class="arrow" id="al" src="/Content/img/arrowl.png" alt="prev" width="20" height="35"></a>--%>
        <%--<a href="javascript:void(0);" class="next"><img class="arrow" id="ar" src="/Content/img/arrowr.png" alt="next" width="20" height="37"></a>--%>
    <%--</div>--%>
</body>
</html>

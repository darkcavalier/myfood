<%--
  Created by IntelliJ IDEA.
  User: zouyi
  Date: 2017/7/1
  Time: 6:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
  <head>
    <title>$Title$</title>
    <link href="css/common.css" rel="stylesheet" />
    <link href="/css/homePage.css" rel="stylesheet" />
    <%--<link href="/css/list.css" rel="stylesheet" />--%>
  </head>
  <body>
  <jsp:include page="head.jsp"></jsp:include>
  <div id="ad-slider" class="ad-slider">
    <div class="bd">
      <ul>

        <li style="height:500px;background:url(https://wochu.oss-cn-hangzhou.aliyuncs.com/WebImage/20160817/pcLunbotu.jpg);background-position:center top;background-size:cover;">
          <a href="http://www.wochu.cn/Member/Register" target="_blank">

          </a>
        </li>
      </ul>
    </div>
    <div class="hd">
      <div class="hd-nav">
        <ul>
          <li class="on"></li>
        </ul>
      </div>
    </div>
    <a href="javascript:void(0);" class="prev"><img class="arrow" id="al" src="image/arrowl.png" alt="prev" width="20" height="35"></a>
    <a href="javascript:void(0);" class="next"><img class="arrow" id="ar" src="image/arrowr.png" alt="next" width="20" height="37"></a>
  </div>

  <div class="ad-position">
    <ul class="ad-item">
      <li>
        <a href="/Product/Deatail/3c141502-d14c-4e9e-a1aa-9b47e9032597" target="_blank"><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/40796324-7c25-476a-83c0-2fe0f859d335.jpg"/></a>
      </li>
      <li>
        <a href="/Product/Deatail/c1096626-b7b0-40d3-a692-4067ec9eb333" target="_blank"><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/064b24dd-9670-4fab-86d1-cd8eeb49fa20.jpg" /></a>
      </li>
      <li>
        <a href="/Product/Deatail/332c0d24-0c60-48fb-ac56-0699db894368" target="_blank"><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e94fdc85-438e-4f36-bfd6-e106fd61ccfa.jpg" /></a>
      </li>
      <li>
        <a href="/Product/Deatail/33624cfd-09aa-44a2-b3d7-1cf938b7a5fc" target="_blank"><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/20989fda-16e1-40f6-8d63-8b348310347e.jpg" /></a>
      </li>
    </ul>
  </div>

  <jsp:include page="center.jsp"></jsp:include>





















  </div>
  <jsp:include page="bottom.jsp"></jsp:include>
  </body>
</html>

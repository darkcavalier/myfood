<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: zouyi
  Date: 2017/7/4
  Time: 9:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="<c:url value='/jquery/jquery-1.5.1.js'/>"></script>
    <link href="css/shop.css" rel="stylesheet">
    <script src="<c:url value='/js/shop.js'/>"></script>
</head>
<body>
<jsp:include page="head.jsp"></jsp:include>
<div class="divBookName">${good.gname }</div>
<div>
    <img align="top" src="<c:url value='/${good.image_a }'/>" width="350"height="400" class="img_image_w"/>
    <div class="divBookDesc">
        <ul>
            <li>商品编号：${good.gid }</li>
            <li>现价：<span class="price_n">&yen;${good.price }</span></li>
            <li>原价：<span class="spanPrice">&yen;${good.cp }</span>　
        </ul>
        <hr class="hr1"/>
        <table>
            <tr>
                <td colspan="3">
                    描述：${good.describe }
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    产地：${good.place }
                </td>
            </tr>
            <tr>
                <td colspan="3">保质期：${good.date }天</td>
            </tr>
            <tr>
                <td>规格：${good.spc }</td>
                <td>存储条件：${good.term }</td>

            </tr>

        </table>
        <div class="divForm">
            <form id="form1" action="<c:url value='/CartItemServlet'/>" method="post">
                <input type="hidden" name="method" value="add"/>
                <input type="hidden" name="gid" value="${good.gid }"/>
                我要买：<input id="cnt" style="width: 40px;text-align: center;" type="text" name="quantity" value="1"/>件
            </form>
            <a id="btn" href="javascript:$('#form1').submit();"></a>
        </div>
    </div>
</div>

</body>
</html>

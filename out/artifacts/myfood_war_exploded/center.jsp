<%--
  Created by IntelliJ IDEA.
  User: zouyi
  Date: 2017/7/6
  Time: 13:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>Title</title>
    <link href="/css/list.css" rel="stylesheet" />
    <script type="text/javascript" src="<c:url value='/js/list.js'/>"></script>
</head>
<body>
<c:forEach items="${goodsList }" var="good">
    <li>
        <div class="inner">
            <a class="pic" href="<c:url value='/GoodsServlet?method=load&gid=${good.gid }'/>"><img src="<c:url value='/${good.image_a }'/>"width="200"height="200" border="0" /></a>
            <p class="price">
                <span class="price_n">&yen;${good.price }</span>
                <span class="price_r">&yen;${good.cp }</span>

            </p>
            <p><a id="bookname" title="${good.gname }" href="<c:url value='/GoodsServlet?method=load&gid=${good.gid }'/>">${good.gname }</a></p>
                <%-- url标签会自动对参数进行url编码 --%>




        </div>
    </li>

</c:forEach>
</body>
</html>

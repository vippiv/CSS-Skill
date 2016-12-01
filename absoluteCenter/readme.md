<h1>position: absolute; margin:auto; top:0px; bottom: 0px; left: 0px; right: 0px;为什么能够实现居中</h1>
1、margin的默认值是0，对于从左往右读的语言，margin-left的初始值是0，margin-right由用户代理计算，对于从右往左读的语言则相反<br>
2、去掉top:0px; bottom: 0px; left: 0px; right: 0px;你会发现元素并没有居中，此时用户代理将margin-left，margin-top计算为0，它居定位的元素左上角摆放<br>
3、position: absolute; margin:auto; top:0px; bottom: 0px; left: 0px; right: 0px;为什么能够实现居中一起使用，代表外边距由用户代理计算并且要满足元素框到父元素内边框的距离为0，此时要么占据满父元素（不设置宽高的情况下），要么居中<br>
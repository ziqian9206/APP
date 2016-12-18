var element = document.getElementById('slider');
window.mySwipe = Swipe(element, {
  startSlide: 0,
  auto: 3000,
  autoRestart: true,
  continuous: true,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {},
  transitionEnd: function(index, element) {}
});

var JSON = {
  "success": true,
  "data": [
    {
      "url": "http://m.360buyimg.com/mobilecms/s357x458_jfs/t3139/341/4701004964/236676/b964160b/5853b6b1N19567abb.jpg!cc_357x458!q50.jpg",
      "name": "恒源祥（HYX）男士秋裤 纯棉薄款保暖裤 男款打底裤亲肤棉毛裤 藏青2条 175/100(XL)",
      "oldprice": 12,
      "price": 123
      
    },
    {
      "url": "http://m.360buyimg.com/mobilecms/s357x458_jfs/t3376/40/856986389/66157/595c0f53/5815d50aN4811fde7.jpg!cc_357x458!q50.jpg",
      "name": "北极绒德绒秋衣秋裤套装男士V领薄款发热纤维保暖内衣 墨绿V领 175/100(L)",
      "oldprice": 56,
      "price": 100          
    },
    {
      "url": "http://m.360buyimg.com/mobilecms/s357x458_jfs/t3403/348/2203951653/214922/692b0cb7/584768dfNf4c352c7.jpg!cc_357x458!q50.jpg",
      "name": " 俞兆林秋衣秋裤男青年时尚V领保暖内衣纯棉薄款棉毛衫 V领撞色麻灰色 XL(175/100",
      "oldprice": 56,
      "price": 100          
    },
    {
      "url": "http://m.360buyimg.com/mobilecms/s357x458_jfs/t3088/46/4495286887/220713/788eb00f/5847e568N8972ca75.jpg!cc_357x458!q50.jpg",
      "name": "南极人秋衣秋裤男女士圆领莱卡棉基础打底薄款保暖内衣套装 V领-深灰 XL(男175/100)",
      "oldprice": 56,
      "price": 100          
    },
    {
      "url": "http://img5q.duitang.com/uploads/item/201505/29/20150529140658_CSzcW.jpeg",
      "name": "【莫代尔】 秋衣秋裤 男士内衣套装女 精梳棉莫代尔 撞色高弹亲肤柔软丝质 男撞色麻灰 175/(100男L)(105女XXL)",
      "oldprice": 56,
      "price": 100          
    },
    {
      "url": "http://m.360buyimg.com/mobilecms/s357x458_jfs/t3088/46/4495286887/220713/788eb00f/5847e568N8972ca75.jpg!cc_357x458!q50.jpg",
      "name": "南极人秋衣秋裤男女士圆领莱卡棉基础打底薄款保暖内衣套装 V领-深灰 XL(男175/100)",
      "oldprice": 56,
      "price": 100          
    },
    {
      "url": "http://m.360buyimg.com/mobilecms/s357x458_jfs/t3088/46/4495286887/220713/788eb00f/5847e568N8972ca75.jpg!cc_357x458!q50.jpg",
      "name": "南极人秋衣秋裤男女士圆领莱卡棉基础打底薄款保暖内衣套装 V领-深灰 XL(男175/100)",
      "oldprice": 56,
      "price": 100          
    },
    {
      "url": "http://m.360buyimg.com/mobilecms/s357x458_jfs/t3088/46/4495286887/220713/788eb00f/5847e568N8972ca75.jpg!cc_357x458!q50.jpg",
      "name": "南极人秋衣秋裤男女士圆领莱卡棉基础打底薄款保暖内衣套装 V领-深灰 XL(男175/100)",
      "oldprice": 56,
      "price": 100          
    },
  ]
};

(function load(){
  var data = JSON;
  console.log(data);
  if (data.success) {
    var list = data.data,tmp = '';
    $.each(list,function(index,item){
      tmp += '<li>'+
                '<p class="img"><img src="'+ item.url +'" alt=""></p>'+
                '<p class="name text-ell">'+ item.name +'</p>'+
                '<p class="price"><i class="iconfont icon-renminbi"></i><del>'+ item.oldprice +'</del><span>'+ item.price +'</span></p>'+
              '</li>';
    });
    $('#list').html(tmp);
  }
})();
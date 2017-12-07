

//搜索功能
$('#SearchButton').click(function () {
    var searchVal = $('#search').val()
    window.location.href='../school/search.html?whereFrom='+searchVal
})
$('#search').keydown(function (e) {
    var curKey = e.which; //兼容火狐
    if( curKey == 13){
        var searchVal = $('#search').val()
        window.location.href='../school/search.html?whereFrom='+searchVal
    }
})


$('.nsiTool01').hover(function () {
    $('.nsiTool01 img').attr('src','../assets/img/index/nsi-img2.png')
    $('.nsiTool01 .nsiFadeOut').stop().fadeOut().hide()
    $('.nsiTool01 .nsiSlideUp').stop().animate({
        opacity:1,
        height:200
    },1000,'linear').show()
    // $('.nsiTool01 .nsiFadeOut').css('display','none')
    // $('.nsiTool01 .nsiSlideUp').css('display','block')
},function () {
    $('.nsiTool01 img').attr('src','../assets/img/index/nsi-img02.png')
    $('.nsiTool01 .nsiFadeOut').stop().fadeIn().show()
    $('.nsiTool01 .nsiSlideUp').stop().animate({
        opacity:0,
        height:0
    },100).hide()
    // $('.nsiTool01 .nsiFadeOut').css('display','block')
    // $('.nsiTool01 .nsiSlideUp').css('display','none')
})

$('.nsiTool02').hover(function () {
    $('.nsiTool02 img').attr('src','../assets/img/index/nsi-img4.png')
    $('.nsiTool02 .nsiFadeOut').stop().fadeOut().hide()
    // $('.nsiTool02 .nsiFadeOut').hide()
    $('.nsiTool02 .nsiSlideUp').stop().animate({
        opacity:1,
        height:200
    },1000,'linear').show()
 },function () {
    $('.nsiTool02 img').attr('src','../assets/img/index/nsi-img04.png')
    $('.nsiTool02 .nsiFadeOut').stop().fadeIn().show()
    $('.nsiTool02 .nsiSlideUp').stop().animate({
        opacity:0,
        height:0
    },100).hide()
})

$('.nsiTool03').hover(function () {
    $('.nsiTool03 img').attr('src','../assets/img/index/nsi-img3.png')
    $('.nsiTool03 .nsiFadeOut').stop().fadeOut().hide()
    $('.nsiTool03 .nsiSlideUp').stop().animate({
        opacity:1,
        height:200
    },1000,'linear').show()
},function () {
    $('.nsiTool03 img').attr('src','../assets/img/index/nsi-img03.png')
    $('.nsiTool03 .nsiFadeOut').stop().fadeIn().show()
    $('.nsiTool03 .nsiSlideUp').stop().animate({
        opacity:0,
        height:0
    },100).hide()
})

$('.nsiTool04').hover(function () {
    $('.nsiTool04 img').attr('src','../assets/img/index/nsi-img1.png')
    $('.nsiTool04 .nsiFadeOut').stop().fadeOut().hide()
    $('.nsiTool04 .nsiSlideUp').stop().animate({
        opacity:1,
        height:200
    },1000,'linear').show()
},function () {
    $('.nsiTool04 img').attr('src','../assets/img/index/nsi-img01.png')
    $('.nsiTool04 .nsiFadeOut').stop().fadeIn().show()
    $('.nsiTool04 .nsiSlideUp').stop().animate({
        opacity:0,
        height:0
    },100).hide()
})


//登录后的导航条状态
$(function () {
    // alert(0)
    console.log($.cookie('usertitle'))
    console.log($.cookie('username'))
    if($.cookie('usertitle') && $.cookie('username') ){
        //导航条登录显示控制
        // alert(1)
        $('.rightNav li').eq(1).css('display','none')
        $('.rightNav li').eq(2).css('display','none')
        $('.rightNav li').eq(3).css('display','block')
        $('.rightNav li').eq(4).css('display','block')
        $('.loginUser').text($.cookie('User_TureName'))
        $('#userLevel').text('Lv'+$.cookie('usertitle'))
    }else {
        // alert(2)
        $('.rightNav li').eq(1).css('display','block')
        $('.rightNav li').eq(2).css('display','block')
        $('.rightNav li').eq(3).css('display','none')
        $('.rightNav li').eq(4).css('display','none')
    }
})

//退出登录，删除cookie
function exitLogin() {
    $.cookie('usertitle', null , { expires: -1, path: '/'  });
    $.cookie('username',null , { expires: -1 ,path: '/'});
    $.cookie('User_TureName', null , { expires: -1 ,path: '/'});
    $.cookie('userVerifyCode', null , { expires: -1 ,path: '/'});
    window.location.href = '../user/login.html'
}

$('#exitLogin01').click(function () {
    exitLogin()
})


//返回顶部
$(function () {
    $('#backToTop').hide()
    $(window).scroll(function () {
        if($(this).scrollTop()>54){
            $('#backToTop').fadeIn()
        }else {
            $('#backToTop').fadeOut()
        }
    })
    $('#backToTop').click(function () {
        $('html , body').animate({scrollTop: 0},'slow');
    })
})

//意见反馈移动端消失
$(function () {
    var screenWidth = $(window).width()
    if(screenWidth < 768 ){
        $('#advice').hide()
    }
})

//学校数量
$(function () {
    $.ajax({
        type : "get",
        async:true,
        traditional :true,
        data: {
            'School_searchKey':'',
            'pageNum':1,
            'OnePageNum':10
        },//提交的参数
        url:"http://"+changeUrl.address+"/School_api?whereFrom=count",
        dataType : "jsonp",//数据类型为jsonp  
        jsonp: "Callback",//服务端用于接收callback调用的function名的参数  
        success : function(msg){
            // console.log(msg)
            $('.schoolNum').text(msg.countAllRS)
        },
        error:function(){
            alert('发生错误，请求数据失败！');
        }
    });
})


console.log('2017-11-29-14:33')

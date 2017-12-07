//除去搜索页面的获取cookie
function getCookie() {
    $(function () {
        $.ajax({
            type : "get",
            async:true,
            traditional :true,
            data: {
                'member_sign':$.cookie('usertitle'),
                'username':$.cookie('username'),
                'UserVerifyCode':$.cookie('userVerifyCode')
            },//提交的参数
            url:'http://'+changeUrl.address+'/User_api?whereFrom=verify',
            dataType : "jsonp",//数据类型为jsonp  
            jsonp: "Callback",//服务端用于接收callback调用的function名的参数  
            success : function(msg){
                // alert('成功')
                console.log(msg.verifyResult);
                if(msg.verifyResult<0){
                    alert('您还没有登录，登录后即可提交个人简历信息')
                    window.location.href="../user/login.html"   //未登录，跳回登录页面
                    console.log($.cookie('usertitle'))
                    console.log($.cookie('username'))
                    console.log($.cookie('userVerifyCode'))
                    console.log( $.cookie('User_TureName'))
                }else{
                    $('.loginUser').text(  $.cookie('User_TureName'))
                }
            },
            error:function(){
                alert('发生错误，请求数据失败！');
            }
        });
    })
}

//导航条登录状态显示
$(function () {
    var username =  $.cookie('User_TureName')
    if( username == undefined) {
        $('.rightNav li').eq(1).css('display','block')
        $('.rightNav li').eq(2).css('display','block')
        $('.rightNav li').eq(3).css('display','none')
        $('.rightNav li').eq(4).css('display','none')
    }else{
        $('.loginUser').text(username)
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

//退回登录删除cookie
$('#exitLogin02').click(function () {
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
        //页脚样式
        $('#mobileFooter').addClass('text-center')
    }
})

//用户等级显示
$(function () {
    $('#userLevel').text('Lv'+$.cookie('usertitle'))
})

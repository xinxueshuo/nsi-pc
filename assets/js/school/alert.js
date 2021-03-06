<!-- 省市联动 -->
//定义数组，存储省份信息
var province = ["","北京", "上海", "天津", "重庆", "浙江", "江苏", "广东", "福建", "湖南", "湖北", "辽宁",
    "吉林", "黑龙江", "河北", "河南", "山东", "陕西", "甘肃", "新疆", "青海", "山西", "四川",
    "贵州", "安徽", "江西", "云南", "内蒙古", "西藏", "广西", "宁夏", "海南", "香港", "澳门", "台湾"];

//定义数组,存储城市信息
var empty = []
var beijing = ["","东城区", "西城区", "海淀区", "朝阳区", "丰台区", "石景山区", "通州区", "顺义区", "房山区", "大兴区", "昌平区", "怀柔区", "平谷区", "门头沟区", "延庆县", "密云县"];
var shanghai = ["","浦东新区", "徐汇区", "长宁区", "普陀区", "闸北区", "虹口区", "杨浦区", "黄浦区", "卢湾区", "静安区", "宝山区", "闵行区", "嘉定区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县"];
var tianjing = ["","河东", "南开", "河西", "河北", "和平", "红桥", "东丽", "津南", "西青", "北辰", "塘沽", "汉沽", "大港", "蓟县", "宝坻", "宁河", "静海", "武清"];
var chongqing = ["","渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "万州区", "涪陵区", "黔江区", "长寿区", "江津区", "合川区", "永川区", "南川区"];
var jiangsu = ["","南京", "无锡", "常州", "徐州", "苏州", "南通", "连云港", "淮安", "扬州", "盐城", "镇江", "泰州", "宿迁"];
var zhejiang = ["","杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "利水","诸暨"];
var guangdong = ["","广州", "韶关", "深圳", "珠海", "汕头", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳"];
var fujiang = ["","福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"];
var hunan = ["","长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西土家苗族自治区"];
var hubei = ["","武汉", "襄阳", "黄石", "十堰", "宜昌", "鄂州", "荆门", "孝感", "荆州", "黄冈", "咸宁", "随州", "恩施土家族苗族自治州"];
var liaoning = ["","沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"];
var jilin = ["","长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边朝鲜族自治区"];
var heilongjiang = ["","哈尔滨", "齐齐哈尔", "鸡西", "牡丹江", "佳木斯", "大庆", "伊春", "黑河", "大兴安岭"];
var hebei = ["","石家庄", "保定", "唐山", "邯郸", "承德", "廊坊", "衡水", "秦皇岛", "张家口"];
var henan = ["","郑州", "洛阳", "商丘", "安阳", "南阳", "开封", "平顶山", "焦作", "新乡", "鹤壁", "许昌", "漯河", "三门峡", "信阳", "周口", "驻马店", "济源"];
var shandong = ["","济南", "青岛", "菏泽", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "滨州", "德州", "聊城", "临沂"];
var shangxi = ["","西安", "宝鸡", "咸阳", "渭南", "铜川", "延安", "榆林", "汉中", "安康", "商洛"];
var gansu = ["","兰州", "嘉峪关", "金昌", "金川", "白银", "天水", "武威", "张掖", "酒泉", "平凉", "庆阳", "定西", "陇南", "临夏", "合作"];
var qinghai = ["","西宁", "海东地区", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"];
var xinjiang = ["","乌鲁木齐", "奎屯", "石河子", "昌吉", "吐鲁番", "库尔勒", "阿克苏", "喀什", "伊宁", "克拉玛依", "塔城", "哈密", "和田", "阿勒泰", "阿图什", "博乐"];
var shanxi = ["","太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁"];
var sichuan = ["","成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"];
var guizhou = ["","贵阳", "六盘水", "遵义", "安顺", "黔南布依族苗族自治州", "黔西南布依族苗族自治州", "黔东南苗族侗族自治州", "铜仁", "毕节"];
var anhui = ["","合肥", "芜湖", "安庆", "马鞍山", "阜阳", "六安", "滁州", "宿州", "蚌埠", "巢湖", "淮南", "宣城", "亳州", "淮北", "铜陵", "黄山", "池州"];
var jiangxi = ["","南昌", "九江", "景德镇", "萍乡", "新余", "鹰潭", "赣州", "宜春", "上饶", "吉安", "抚州"];
var yunnan = ["","昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧", "楚雄彝族自治州", "大理白族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州"];
var neimenggu = ["","呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布"];
var guangxi = ["","南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "崇左"];
var xizang = ["","拉萨", "昌都地区", "林芝地区", "山南地区", "日喀则地区", "那曲地区", "阿里地区"];
var ningxia = ["","银川", "石嘴山", "吴忠", "固原", "中卫"];
var hainan = ["","海口", "三亚"];
var xianggang = ["","中西区", "湾仔区", "东区", "南区", "九龙城区", "油尖旺区", "观塘区", "黄大仙区", "深水埗区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区"];
var taiwan = ["","台北", "高雄", "基隆", "台中", "台南", "新竹", "嘉义"];
var aomeng = ["","澳门半岛", "氹仔岛", "路环岛"];

//页面加载方法
$(function () {
    //设置省份数据
    setProvince();
    //设置背景颜色
    setBgColor();
});
//设置省份数据
function setProvince() {
    //给省份下拉列表赋值
    var option, modelVal;
    var $sel = $("#selProvince");

    //获取对应省份城市
    for (var i = 0, len = province.length; i < len; i++) {
        modelVal = province[i];
        option = "<option value='" + modelVal + "'>" + modelVal + "</option>";

        //添加到 select 元素中
        $sel.append(option);
    }

    //调用change事件，初始城市信息
    provinceChange();
}


//根据选中的省份获取对应的城市
function setCity(provinec) {
    var $city = $("#selCity");
    var proCity, option, modelVal;
    //通过省份名称，获取省份对应城市的数组名
    switch (provinec) {
        case "":
            proCity = empty;
            break;
        case "北京":
            proCity = beijing;
            break;
        case "上海":
            proCity = shanghai;
            break;
        case "天津":
            proCity = tianjing;
            break;
        case "重庆":
            proCity = chongqing;
            break;
        case "浙江":
            proCity = zhejiang;
            break;
        case "江苏":
            proCity = jiangsu;
            break;
        case "广东":
            proCity = guangdong;
            break;
        case "福建":
            proCity = fujiang;
            break;
        case "湖南":
            proCity = hunan;
            break;
        case "湖北":
            proCity = hubei;
            break;
        case "辽宁":
            proCity = liaoning;
            break;
        case "吉林":
            proCity = jilin;
            break;
        case "黑龙江":
            proCity = heilongjiang;
            break;
        case "河北":
            proCity = hebei;
            break;
        case "河南":
            proCity = henan;
            break;
        case "山东":
            proCity = shandong;
            break;
        case "陕西":
            proCity = shangxi;
            break;
        case "甘肃":
            proCity = gansu;
            break;
        case "新疆":
            proCity = xinjiang;
            break;
        case "青海":
            proCity = qinghai;
            break;
        case "山西":
            proCity = shanxi;
            break;
        case "四川":
            proCity = sichuan;
            break;
        case "贵州":
            proCity = guizhou;
            break;
        case "安徽":
            proCity = anhui;
            break;
        case "江西":
            proCity = jiangxi;
            break;
        case "云南":
            proCity = yunnan;
            break;
        case "内蒙古":
            proCity = neimenggu;
            break;
        case "西藏":
            proCity = xizang;
            break;
        case "广西":
            proCity = guangxi;
            break;
        case "宁夏":
            proCity = ningxia;
            break;
        case "海南":
            proCity = hainan;
            break;
        case "香港":
            proCity = xianggang;
            break;
        case "澳门":
            proCity = aomeng;
            break;
        case "台湾":
            proCity = taiwan;
            break;
    }
    //先清空之前绑定的值
    $city.empty();
    //设置对应省份的城市
    for (var i = 0, len = proCity.length; i < len; i++) {
        modelVal = proCity[i];
        option = "<option value='" + modelVal + "'>" + modelVal + "</option>";
        //添加
        $city.append(option);
    }
    //设置背景
    setBgColor();
}

//省份选中事件
function provinceChange() {
    var $pro = $("#selProvince");
    setCity($pro.val());
}


//设置下拉列表间隔背景样色
function setBgColor() {
    var $option = $("select option:odd");
    $option.css({ "background-color": "#DEDEDE" });
}

//获取cookie
$(function () {
    getCookie();
})

var args =getQueryStringArgs();
var datailSchool = decodeURIComponent(args['School_name'])
$.ajax({
    type : "get",
    async:false,
    traditional :true,
    data: {
        'Id': datailSchool
    },//提交的参数
    url:'http://'+changeUrl.address+'/School_api?whereFrom=detail',
    dataType : "jsonp",//数据类型为jsonp  
    jsonp: "Callback",//服务端用于接收callback调用的function名的参数  
    success : function(msg){
        console.log(msg)
            // autoDeleteZero(msg[0].School_name)
             setCity(autoDeleteZero(msg[0].Areas))
            $('#School_name').val(autoDeleteZero(msg[0].School_name)),
            $('#School_EnglishName').val(autoDeleteZero(msg[0].School_EnglishName)),
            $('#School_properties').val(autoDeleteZero(msg[0].School_properties)),
            $("#selProvince option[value='" + autoDeleteZero(msg[0].Areas) + "']").attr("selected", true),
            // $('#selProvince').val(autoDeleteZero(msg[0].Areas)),
            // $('#selCity').val(autoDeleteZero(msg[0].Areas02)),
            $("#selCity option[value='" + autoDeleteZero(msg[0].Areas02) + "']").attr("selected", true),
            $('#Areas03').val(autoDeleteZero(msg[0].Areas03)),
            $('#Founded_time').val(autoDeleteZero(msg[0].Founded_time)),
            $('#OperationState').val(autoDeleteZero(msg[0].OperationState)),
            $('#School_system').val(autoDeleteZero(msg[0].School_system)),

                $('#Tuition01').val(autoDeleteZero(msg[0].Tuition01)),
                $('#Tuition02').val(autoDeleteZero(msg[0].Tuition02)),
                $('#Tuition03').val(autoDeleteZero(msg[0].Tuition03)),
                $('#Tuition04').val(autoDeleteZero(msg[0].Tuition04)),

            $('#TuitionHigh').val(autoDeleteZero(msg[0].TuitionHigh)),
            $('#Website').val(autoDeleteZero(msg[0].Website)),
            $('#Telephone').val(autoDeleteZero(msg[0].Telephone)),
            $('#Inter_Course_Founded_time').val(autoDeleteZero(msg[0].Inter_Course_Founded_time)),
            $('#Course').val(autoDeleteZero(msg[0].Course)),
            $('#Authentication').val(autoDeleteZero(msg[0].Authentication)),
            $('#Course_evaluation').val(autoDeleteZero(msg[0].Course_evaluation)),

                $('#Student_Num01').val(autoDeleteZero(msg[0].Student_Num01)),
                $('#Student_Num02').val(autoDeleteZero(msg[0].Student_Num02)),
                $('#Student_Num03').val(autoDeleteZero(msg[0].Student_Num03)),
                $('#Student_Num04').val(autoDeleteZero(msg[0].Student_Num04)),

            $('#Student_Num_All').val(autoDeleteZero(msg[0].Student_Num_All)),
            $('#Student_Capacity').val(autoDeleteZero(msg[0].Student_Capacity)),
            $('#Graduated_Stu_Num').val(autoDeleteZero(msg[0].Graduated_Stu_Num)),
            $('#Stu_Dominant_nationality').val(autoDeleteZero(msg[0].Stu_Dominant_nationality)),
            $('#Stu_Year_Investment').val(autoDeleteZero(msg[0].Stu_Year_Investment)),
            $('#Club_Num').val(autoDeleteZero(msg[0].Club_Num)),
            $('#President_Country').val(autoDeleteZero(msg[0].President_Country)),
            $('#Staff_Num').val(autoDeleteZero(msg[0].Staff_Num)),
            $('#Teacher_Num').val(autoDeleteZero(msg[0].Teacher_Num)),
            $('#Foreign_Teacher_num').val(autoDeleteZero(msg[0].Foreign_Teacher_num)),
            $('#Teacher_Year_Investment').val(autoDeleteZero(msg[0].Teacher_Year_Investment)),
            $('#Teacher_Retention').val(autoDeleteZero(msg[0].Teacher_Retention)),
            $('#Teacher_Salary').val(autoDeleteZero(msg[0].Teacher_Salary)),
            $('#Teacher_Stu_ratio').val(autoDeleteZero(msg[0].Teacher_Stu_ratio)),
            $('#Covered_Area').val(autoDeleteZero(msg[0].Covered_Area)),
            $('#Built_Area').val(autoDeleteZero(msg[0].Built_Area)),
            $('#Hardware').val(autoDeleteZero(msg[0].Hardware)),
            $('#Investment').val(autoDeleteZero(msg[0].Investment)),
            $('#Remark').val(autoDeleteZero(msg[0].Remark)),
            $('#Recent_Modifier').val(autoDeleteZero(msg[0].Recent_Modifier)),
            $('#Load_People').val(autoDeleteZero(msg[0].Load_People)),
            $('#Load_Time').val(autoDeleteZero(msg[0].Load_Time)),
            $('#VerifySign').val(autoDeleteZero(msg[0].VerifySign)),

           $('#alter_old_School_id').val(msg[0].Id)

    },
    error:function(){
        alert('发生错误，请求数据失败！');
    }
});

//全局查询结果定义
var checkSchoolNameResult = null;
var checkFoundTimeResult = null;
var checkIntCourseResult = null;
var checkIntResult = null;
var checkFloatResult = null;
var checkMuMeterResult = null;

var checkStudentNumResult = null;
var checkStuCapacityResult = null;
var checkGraduateStuResult = null;
var checkSchoolSystemResult = null;
var checkAddressResult = null;
var checkCourseResult = null;

//在校生人数不能为空且为整数验证
function checkStudentNum () {
    var partt02= /^$|^[1-9]\d*$/
    var studentNumValue = $('#Student_Num_All').val()
    if(!partt02.test(studentNumValue)){
        $('.hasError').eq(14).addClass('has-error')
        $('.hasError:eq(14) span').removeClass('hide')
        $('.studentNumCheck').text('*需要为整数')
        $('.studentNumCheck').css('color','red')
        checkStudentNumResult = false
    }else{
        $('.studentNumCheck').text('注意：需要为整数，例如：1000')
        $('.studentNumCheck').css('color','#999')
        $('.hasError').eq(14).removeClass('has-error')
        $('.hasError:eq(14) span').addClass('hide')
        checkStudentNumResult = true
    }
}

//总容量不能为空且为整数验证
function checkStuCapacity () {
    var partt02= /^$|^[1-9]\d*$/
    var StuCapacityValue = $('#Student_Capacity').val()
    if(!partt02.test(StuCapacityValue)){
        $('.hasError').eq(15).addClass('has-error')
        $('.hasError:eq(15) span').removeClass('hide')
        $('.stuCapacityCheck').text('*需要为整数')
        $('.stuCapacityCheck').css('color','red')
        checkStuCapacityResult = false
    }else{
        $('.stuCapacityCheck').text('注意：需要为整数，例如：1000')
        $('.stuCapacityCheck').css('color','#999')
        $('.hasError').eq(15).removeClass('has-error')
        $('.hasError:eq(15) span').addClass('hide')
        checkStuCapacityResult = true
    }
}

//毕业班人数不能为空且为整数验证
function checkGraduatedStuNum () {
    var partt02= /^$|^[1-9]\d*$/
    var graduatedStuNumValue = $('#Graduated_Stu_Num').val()
    if(!partt02.test(graduatedStuNumValue)){
        $('.hasError').eq(16).addClass('has-error')
        $('.hasError:eq(16) span').removeClass('hide')
        $('.graduateStuCheck').text('*需要为整数')
        $('.graduateStuCheck').css('color','red')
        checkGraduateStuResult = false
    }else{
        $('.graduateStuCheck').text('注意：需要为整数，例如：1000')
        $('.graduateStuCheck').css('color','#999')
        $('.hasError').eq(16).removeClass('has-error')
        $('.hasError:eq(16) span').addClass('hide')
        checkGraduateStuResult = true
    }
}

//学制不能为空的验证
function checkSchoolSystem(){
    if($('#School_system').val() ==''){
        $('.hasError').eq(6).addClass('has-error')
        $('.hasError:eq(6) span').removeClass('hide')
        $('.schoolSystemCheck').text('*学制不能为空')
        $('.schoolSystemCheck').css('color','red')
        checkSchoolSystemResult = false;
    }else{
        $('.schoolSystemCheck').text('')
        $('.hasError').eq(6).removeClass('has-error')
        $('.hasError:eq(6) span').addClass('hide')
        checkSchoolSystemResult = true;
    }
}

//国际课程不能为空的验证
function checkCourse(){
    if($('#Course').val() ==''){
        $('.hasError').eq(11).addClass('has-error')
        $('.hasError:eq(11) span').removeClass('hide')
        $('.courseCheck').text('*国际课程不能为空')
        $('.courseCheck').css('color','red')
        checkCourseResult = false;
    }else{
        $('.courseCheck').text('')
        $('.hasError').eq(11).removeClass('has-error')
        $('.hasError:eq(11) span').addClass('hide')
        checkCourseResult = true;
    }
}

//地址不能为空的验证
function checkAddress(){
    if($('#selProvince').val() =='' || $('#selCity').val() =='' || $('#Areas03').val() ==''){
        $('.addressCheck').text('*请完善地址信息')
        $('.addressCheck').css('color','red')
        $('.errColor').css('color','#a94442')
        checkAddressResult = false;
    }else{
        $('.addressCheck').text('注意：地址不能为空')
        $('.addressCheck').css('color','#999')
        $('.errColor').css('color','#333')
        checkAddressResult = true;
    }
}

//学校名不能为空的验证
function checkSchoolName(){
    // var checkSchoolNameResult = null;
    if($('#School_name').val() ==''){
        $('.hasError').eq(0).addClass('has-error')
        $('.hasError:eq(0) span').removeClass('hide')
        $('.SchoolNameCheck').text('*学校名不能为空')
        $('.SchoolNameCheck').css('color','red')
        checkSchoolNameResult = false;
        return checkSchoolNameResult;
    }else{
        $('.SchoolNameCheck').text('')
        $('.hasError').eq(0).removeClass('has-error')
        $('.hasError:eq(0) span').addClass('hide')
        checkSchoolNameResult = true;
        return checkSchoolNameResult;
    }
}

//成立时间验证 （匹配4位整数或者空）
function checkFoundTime() {
    var partt01= /^$|^\d{4}$/
    // var checkFoundTimeResult = null;
    var foundTimeValue = $('#Founded_time').val()

    if(!partt01.test(foundTimeValue)){
        $('.hasError').eq(4).addClass('has-error')
        $('.hasError:eq(4) span').removeClass('hide')
        $('.foundTimeCheck').text('必须为4位整数')
        $('.foundTimeCheck').css('color','red')
        checkFoundTimeResult = false
        return checkFoundTimeResult;
    }else{
        $('.foundTimeCheck').text('例如：2017，不添加月份')
        $('.foundTimeCheck').css('color','#999')
        $('.hasError').eq(4).removeClass('has-error')
        $('.hasError:eq(4) span').addClass('hide')
        checkFoundTimeResult = true
        return checkFoundTimeResult;
    }
}


//国际课程最早认证时间验证 （匹配4位整数或者空）
function checkIntCourse() {
    var partt01= /^$|^\d{4}$/
    // var checkIntCourseResult = null;
    var intnCourseValue = $('#Inter_Course_Founded_time').val()

    if(!partt01.test(intnCourseValue)){
        $('.hasError').eq(10).addClass('has-error')
        $('.hasError:eq(10) span').removeClass('hide')
        $('.intnCourseCheck').text('必须为4位整数')
        $('.intnCourseCheck').css('color','red')
        checkIntCourseResult = false
        return checkIntCourseResult;
    }else{
        $('.intnCourseCheck').text('例如：2017，不添加月份')
        $('.intnCourseCheck').css('color','#999')
        $('.hasError').eq(10).removeClass('has-error')
        $('.hasError:eq(10) span').addClass('hide')
        checkIntCourseResult = true
        return checkIntCourseResult;
    }
}

//正整数验证
function checkInt(idName,className,num) {
    var partt02= /^$|^[1-9]\d*$/
    var foundTimeValue = $(idName).val()
    // var checkIntResult = null;
    if(!partt02.test(foundTimeValue)){
        $('.hasError').eq(num).addClass('has-error')
        $('.hasError:eq('+ num +') span').removeClass('hide')
        $(className).text('必须为整数')
        $(className).css('color','red')
        checkIntResult = false
        return checkIntResult;
    }else{
        $(className).text('注意：需要为整数，例如：1000')
        $(className).css('color','#999')
        $('.hasError').eq(num).removeClass('has-error')
        $('.hasError:eq('+ num +') span').addClass('hide')
        checkIntResult = true
        return checkIntResult;
    }
}

//匹配浮点数
function checkFloat(idName,className,num) {
    var partt03= /^$|^(-?\d+)(\.\d+)?$/
    var foundTimeValue = $(idName).val()
    // var checkFloatResult = null
    if(!partt03.test(foundTimeValue)){
        $('.hasError').eq(num).addClass('has-error')
        $('.hasError:eq('+ num +') span').removeClass('hide')
        $(className).text('必须为数字')
        $(className).css('color','red')
        checkFloatResult = false
        return checkFloatResult;
    }else{
        $(className).text('注意：需要为数字')
        $(className).css('color','#999')
        $('.hasError').eq(num).removeClass('has-error')
        $('.hasError:eq('+ num +') span').addClass('hide')
        checkFloatResult = true
        return checkFloatResult;
    }
}

//提示框触发
$('#Covered_Area').focus(function () {
    $('.popover-content').css('color','#999')
    $('.hasError:eq(28)').popover('show')
})

//亩米匹配
function checkMuMeter(num) {
    var partt04= /^$|^(-?\d+)(\.\d+)?$/
    var foundTimeValue = $('#Covered_Area').val()
    // var checkMuMeterResult = null;
    if(!partt04.test(foundTimeValue)){
        $('.hasError').eq(num).addClass('has-error')
        $('.hasError:eq('+ num +') span').removeClass('hide')
        $('.popover-content').css('color','red')
        $('.hasError:eq(28)').popover('show')
        checkMuMeterResult = false
        return checkMuMeterResult;
    }else{
        $('.hasError').eq(num).removeClass('has-error')
        $('.hasError:eq('+ num +') span').addClass('hide')
        $('.hasError:eq(28)').popover('hide')
        $('.popover-content').css('color','#999')
        checkMuMeterResult = true
        return checkMuMeterResult;
    }
}

//过滤函数（如果为空，自动补零）
function autoAddZero( str ) {
    var strFilter = null;
    return strFilter = (str == '')? 0 : str;
}

//过滤函数（如果为零，变为空）
function autoDeleteZero( str ) {
    var strFilter = null;
    return strFilter = (str == 0)? '' : str;
}


//表单提交（注意：只能绑定在标签内部）
function formAlter() {
    checkSchoolName();
    checkFoundTime();
    checkIntCourse();
    checkInt('#Student_Num', '.studentNumCheck', 14);
    checkInt('#Student_Capacity', '.stuCapacityCheck', 15);
    checkInt('#Graduated_Stu_Num', '.graduateStuCheck', 16);
    checkFloat('#Club_Num', '.clubNumCheck', 19);
    checkInt('#Staff_Num', '.staffNumCheck', 21);
    checkInt('#Teacher_Num', '.teacherNumCheck', 22);
    checkInt('#Foreign_Teacher_num', '.foreignTeacherCheck', 23);
    checkMuMeter(28);
    checkFloat('#Built_Area', '.builtAreaCheck', 29);

    checkAddress()
    checkSchoolSystem()
    checkStudentNum()
    checkStuCapacity()
    checkGraduatedStuNum()
    checkCourse()

    if ( checkSchoolNameResult == true &&  checkFoundTimeResult == true && checkIntCourseResult == true && checkIntResult == true && checkFloatResult == true
        && checkMuMeterResult == true && checkCourseResult == true && checkStudentNumResult == true && checkStuCapacityResult == true && checkGraduateStuResult == true
        && checkSchoolSystemResult == true && checkAddressResult == true
    ) {
        var insertData = {
            'School_name': autoAddZero($('#School_name').val()),
            'School_EnglishName': autoAddZero($('#School_EnglishName').val()),
            'School_properties': autoAddZero($('#School_properties').val()),
            'Areas': autoAddZero($('#selProvince').val()),
            'Areas02': autoAddZero($('#selCity').val()),
            'Areas03': autoAddZero($('#Areas03').val()),
            'Founded_time': autoAddZero($('#Founded_time').val()),
            'OperationState': autoAddZero($('#OperationState').val()),
            'School_system': autoAddZero($('#School_system').val()),
            'TuitionHigh': autoAddZero($('#TuitionHigh').val()),

            'Tuition01': autoAddZero($('#Tuition01').val()),
            'Tuition02': autoAddZero($('#Tuition02').val()),
            'Tuition03': autoAddZero($('#Tuition03').val()),
            'Tuition04': autoAddZero($('#Tuition04').val()),


            'Website': autoAddZero($('#Website').val()),
            'Telephone': autoAddZero($('#Telephone').val()),
            'Inter_Course_Founded_time': autoAddZero($('#Inter_Course_Founded_time').val()),
            'Course': autoAddZero($('#Course').val()),
            'Authentication': autoAddZero($('#Authentication').val()),
            'Course_evaluation': autoAddZero($('#Course_evaluation').val()),
            'Student_Num_All': autoAddZero($('#Student_Num_All').val()),

            'Student_Num01': autoAddZero($('#Student_Num01').val()),
            'Student_Num02': autoAddZero($('#Student_Num02').val()),
            'Student_Num03': autoAddZero($('#Student_Num03').val()),
            'Student_Num04': autoAddZero($('#Student_Num04').val()),

            'Student_Capacity': autoAddZero($('#Student_Capacity').val()),
            'Graduated_Stu_Num': autoAddZero($('#Graduated_Stu_Num').val()),
            'Stu_Dominant_nationality': autoAddZero($('#Stu_Dominant_nationality').val()),
            'Stu_Year_Investment': autoAddZero($('#Stu_Year_Investment').val()),
            'Club_Num': autoAddZero($('#Club_Num').val()),
            'President_Country': autoAddZero($('#President_Country').val()),
            'Staff_Num': autoAddZero($('#Staff_Num').val()),
            'Teacher_Num': autoAddZero($('#Teacher_Num').val()),
            'Foreign_Teacher_num': autoAddZero($('#Foreign_Teacher_num').val()),
            'Teacher_Year_Investment': autoAddZero($('#Teacher_Year_Investment').val()),
            'Teacher_Retention': autoAddZero($('#Teacher_Retention').val()),
            'Teacher_Salary': autoAddZero($('#Teacher_Salary').val()),
            'Teacher_Stu_ratio': autoAddZero($('#Teacher_Stu_ratio').val()),
            'Covered_Area': autoAddZero($('#Covered_Area').val()),
            'Built_Area': autoAddZero($('#Built_Area').val()),
            'Hardware': autoAddZero($('#Hardware').val()),
            'Investment': autoAddZero($('#Investment').val()),
            'Remark': autoAddZero($('#Remark').val()),

            "Load_People":$.cookie('username'),
            "member_sign":$.cookie('usertitle'),

            "alter_old_School_id": $('#alter_old_School_id').val()

        }
        $.ajax({
            type: "get",
            async: true,
            traditional: true,
            data: insertData,//提交的参数
            url: 'http://'+ changeUrl.address +'/School_api?whereFrom=alter',
            dataType: "jsonp",//数据类型为jsonp  
            jsonp: "Callback",//服务端用于接收callback调用的function名的参数  
            beforeSend:function() { //触发ajax请求开始时执行
                $('#alertSubmit').text('修改数据中...');
                $('#alertSubmit').addClass('disabled')
                $('#alertSubmit').attr('onclick','javascript:void();');//改变提交按钮上的文字并将按钮设置为不可点击
            },
            success: function (msg) {
                if(msg.msg ==1){
                    alert('恭喜！数据修改成功')
                    $('#alertSubmit').text('立即修改');
                    $('#alertSubmit').removeClass('disabled')
                    window.location.href = './search.html'
                }else {
                    $('#alertSubmit').text('立即修改');
                    $('#alertSubmit').removeClass('disabled')
                    $('#alertSubmit').attr('onclick','formAlter();');//改变提交按钮上的文字并将按钮设置为可点击
                }
            },
            error: function () {
                alert('网络繁忙，请稍后再试！');
                $('#alertSubmit').text('立即提交');
                $('#alertSubmit').removeClass('disabled')
                $('#alertSubmit').attr('onclick','formAlter();');//改变提交按钮上的文字并将按钮设置为可点击
            }
        });
    } else {
        $('#myModalAlert').modal({
            keyboard: true
        })
    }
}


// 权限管理
function accsessControl() {
    console.log( $.cookie('usertitle'))
    var num = $.cookie('usertitle');
    if(num == undefined){
        //导航条登录显示控制
        //   alert(-2)
        $('.rightNav li').eq(0).css('display','block')
        $('.rightNav li').eq(1).css('display','block')
        $('.rightNav li').eq(2).css('display','none')
        $('.rightNav li').eq(3).css('display','none')
        //修改页面的删除按钮
        $('#deleteThisRecord').click(function () {
            $('#myModal').modal({
                keyboard: true
            })
        })
    }else if( num ==1 ){
           //修改页面的删除按钮
            $('#deleteThisRecord').click(function () {
                $('#myModal').modal({
                    keyboard: true
                })
            })
    }else if(num ==2){
        //修改页面的删除按钮
        $('#deleteThisRecord').click(function () {
            $('#myModal').modal({
                keyboard: true
            })
        })

    }else if(num ==3){
        //修改页面的删除按钮
        $('#deleteThisRecord').click(function () {
            $('#myModal').modal({
                keyboard: true
            })
        })
    }else{
        //修改页面的删除按钮
        $('#deleteThisRecord').click(function () {
            ConfirmDelete();
        })
    }

}
accsessControl()


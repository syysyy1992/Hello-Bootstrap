/**
 * Created by syy on 2017/7/16.
 */
$(document).ready(function(){
    //鼠标滑过时间轴
    $("div>ul>.time>a").hover(
        function(){
            $(this).stop().animate({"width":"100px"},200);
        },
        function(){
            $(this).stop().animate({"width":"80px"},200);
        }
    );
    //滚动条发生滚动
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        var menu = $("#menu");
        var items = $("#content").find(".item");
        var currentId = "";//当前所在位置#id
        items.each(function () {
            var m = $(this);
            var itemTop = m.offset().top;
            if( top > itemTop - 200){
                currentId = "#" + m.attr("id");
            }else{
                return false;
            }
           // console.log("itemTop:",itemTop);

        });
       // console.log("top:",top);
       // console.log("currentId:",currentId);
        //给相应位置的a设置current，取消其他链接的current
        var currentLink = menu.find(".timeLine");
       // console.log("currentLink:",currentLink);

        if(currentId && currentLink.attr("href") !== currentId){
            currentLink.removeClass("timeLine");
            menu.find("[href='" + currentId + "']").addClass("timeLine");
        }
      //  console.log("currentLink.attr('href'):",currentLink.attr("href"));

    });
    $(function(){
        $(".carousel").carousel({
            interval:2000,
            wrap:true
        })
    })
});
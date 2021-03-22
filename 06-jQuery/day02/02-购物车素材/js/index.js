$(function () {
    //购物车选择
    $(".checkall").click(function () {
        //全选控制
        //子同父
        $(".j-checkbox,.checkall").prop("checked", $(this).prop('checked'));

        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
             $(".cart-item").removeClass("check-cart-item");
        }
          getSum();
      
    })
    //选择长度===总长度
      $(".j-checkbox").click(function () {
          $(".checkall").prop("checked", $(".j-checkbox:checked").length === $(".j-checkbox").length);
          if ($(this).prop("checked")) {
           $(this).parent().parent().addClass("check-cart-item");
        } else {
            $(this).parent().parent().removeClass("check-cart-item");
          }
            getSum();
      })
    
    //购物车结算，增加减小
    $(".increment").click(function () {
        let n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        let p = $(this).parent().parent(".p-num").siblings(".p-price").html();
        let price = p.slice(1) * n;
        // console.log(price);
          getSum();
        $(this).parent().parent(".p-num").siblings(".p-sum").text('￥'+price.toFixed(2));
    })
        $(".decrement").click(function () {
        let n = $(this).siblings(".itxt").val();
           
            if (n === "1") {
                return false;
            }
            n--;
              getSum();
            $(this).siblings(".itxt").val(n);
            let p = $(this).parent().parent('.p-num').siblings('.p-price').html();
            $(this).parent().parent('.p-num').siblings('.p-sum').text("￥"+(p.slice(1) * n).toFixed(2));
    })
     //购物车，商品数量修改
    $('.itxt').change(function () {
        let n = $(this).val();
        if (parseInt(n) != n || n < 1) {
            n = 1;
            $(this).val(1);
            alert('无效的商品数量！');

        }
             let p = $(this).parent().parent('.p-num').siblings('.p-sum').html();
            $(this).parent().parent('.p-num').siblings('.p-sum').text("￥"+(p.slice(1) * n).toFixed(2));
  getSum();
    })
//购物车总金额结算
    getSum();
    function getSum() {
        let money = 0;
        let count = 0;
        $(".j-checkbox:checked").each(function (i,n) {
            count += $(this).parent().siblings('.p-num').find('input').val()*1 ;
            money += $(this).parent().siblings('.p-sum').html().slice(1)*1 ;
            
        })
        // console.log(count,money);
        $('.amount-sum em').html(count);
        $('.price-sum em').html('￥' + money.toFixed(2));
    }
    //删除管理
    //单个删除
    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove();
            getSum();
        
    })
// 多个删除
     $('.remove-batch').click(function () {
         $('.j-checkbox:checked').parents('.cart-item').remove();
            getSum();
        
    })
    // 全部删除
    $('.clear-all').click(function () {
     console.log(1);
         $('.j-checkbox').parents('.cart-item-list').empty();
            getSum();
        
    })


    //parent父亲    parents父亲+祖父等
})
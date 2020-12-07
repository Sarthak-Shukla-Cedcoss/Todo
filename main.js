
$("#btn1").click(function(){
    var inputval=$("#inp").val();
    $("#ul1").append("<li><input type='checkbox'>"
            +inputval+"  <input type='text' class='inpedit'> <button class='edit'> EDIT </button> <button class='del'> DELETE </button> </li>");   
            $("#inp").val("");
            $(".del").click(function(){
                $(this).parent('li').remove();    
            });
            $(".edit").click(function(){
                $(this).val(inputval);
            });
        });

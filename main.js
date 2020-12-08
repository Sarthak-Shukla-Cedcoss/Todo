function len(){
    var len1= $('#ul1 > li').length;
    var len2= $('#ul2 > li').length;
    $("#todo").text("To-Do Tasks : "+len1);
    $("#comp").text("Compleated Task : "+len2);
    $("#pend").text(" Pending Tasks : "+len1);
    $("#comp1").text("Completed : "+len2);
}
$("#btn1").click(function () {
    var inputval = $("#inp").val();
    if (inputval == ""){
        alert("Plese enter any task ");
    }
    else{
    $("#ul1").append("<li class='li11'><input type='checkbox' class='check'> <span class='input1'>"
        + inputval + "</span>  <input type='text' class='inpedit' style='display:none;'> <button class='edit'> EDIT </button> <button class='save' style='display:none;'> EDIT </button> <button class='del'> DELETE </button> </li>");
    $("#inp").val("");
    len();
    $(".del").click(function () {
        $(this).parent('li').remove();
        len();
    });
    $(".edit").click(function () {
        var y = $(this).siblings('.input1').text();
        $(this).parent('li').find(".inpedit").val(y);
        $(this).parent('li').find(".save").show() && $(this).parent('li').find(".edit").hide() && $(this).parent('li').find(".inpedit").show();
    });
    $(".save").click(function () {
        var z = $(this).siblings('.inpedit').val();
        $(this).parent('li').find(".input1").text(z);
        $(this).parent('li').find(".save").hide() && $(this).parent('li').find(".edit").show()  && $(this).parent('li').find(".inpedit").hide();       
    });
    $(".check").click(function () {
        var x = $(this).parent('li');
        if ($(this).prop("checked") == true) {
            $("#ul2").append(x);
        }
        if ($(this).prop("checked") == false) {
            $("#ul1").append(x);
        }
        len();
    });
    }
});

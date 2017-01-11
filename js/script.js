$(document).ready(function() {
    $("#tabs").on("click", ".tab", function(){
    	$("#tabs .tab").removeClass("active"); //удаляем класс во всех вкладках
    	$(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
});
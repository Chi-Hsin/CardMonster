$(function(){
	$(".skill_note").each(function(){      //底下兩個this分別指向不同的對象
		$(this).find("a").each(function(){ //技能說明處找出底下有超連結標籤的
			$(this).attr({"class":"skill_name","href":"#"+$(this).text()});//所有相關的超連結賦予連結
		})
	})

	$("h1:not(h1:first)").hover(function(){ //排除第一個標題的情況
		var skill_name = $(this).text();
		function note_word() //提醒文字
		{
			var obj = document.createElement("span");
			obj.textContent = "點擊查看擁有"+skill_name+"的卡片";
			return obj;
		}
		$(this).append(note_word());
		},function(){$(this).find("span").remove()} //滑鼠移開後移除
	)
})
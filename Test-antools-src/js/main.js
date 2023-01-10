$(document).ready(()=>{
    //Плавная прокрутка к якорным ссылкам
    $("a[href^='#']").click(function(){
        let _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    let tool_hovered_classname = 'tool-hovered';
    function sublightActiveTool(el) { el.classList.add(tool_hovered_classname); }
    function dislightActiveTool(el) { el.classList.remove(tool_hovered_classname); }

    let tool_items = document.querySelectorAll(".border-gradient-wrapper");
	for (let t of tool_items) {
		t.addEventListener("mouseenter", function(e) {
            sublightActiveTool(e.target);
        });
        t.addEventListener("mouseleave", function(e) {
            dislightActiveTool(e.target);
        });
	}
    
})
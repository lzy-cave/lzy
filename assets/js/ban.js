document.onkeydown = function(){

    if(window.event && window.event.keyCode == 123) {
        alert("F12������");
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        alert(str+"\n��ʹ��Del�������ַ���ɾ��������");
        window.event.returnValue=false;
    }

}
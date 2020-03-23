function $id(id) {
    return document.getElementById(id);
}


// 開燈箱-檢舉揪團
function showEventReport() {
    let eventreport_back = $id('eventreport_back');
    eventreport_back.style.display = "flex";
}







//註冊每個...的click事件
$(document).on('click', '.lightReport', showEventReport);



// date picker 


// 


var radioItems = [];

function addRadio (name)
{
    radioItems.push(name);
}
function appendRadioElement(id,title,groupName) {
    // 
    // 
    $("#" + id + "").append("<div><h5>" + title + "</h5><form>");
    radioItems.forEach(function (element) {
        $("#" + id + "").append("<label class='radio-inline'><input type='radio' name='" + groupName + "'>" + element + "</label>");
    });
    $("#" + id + "").append("</form></div>");
};
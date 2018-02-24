class progressbar {

constructor(divname,barcolor,barpercentage,elementid)
{
    this.divname = divname;
    this.barcolor = barcolor;
    this.barpercentage = barpercentage;
    this.elementid = elementid;
    console.log(this.divname+" "+this.barcolor+" "+this.barpercentage)
}

    get render() {
        // JS
        this.append_notification();
    }

    check_elementExistence(elementID)
    {
        if ($("#"+elementID+"").length === 1){
            $("#"+elementID+"").remove();
        }   
    }

    append_notification() {
        // id : HTML Element ID; (STRING);
        // value: Progress bar value; (INT);
        // barColor: the background color (red,blue,#231SDE); (STRING);
        this.check_elementExistence(this.elementid);
        var com = "<div id ='"+this.elementid+"' class='progress'><div  class='progress-bar progress-bar-striped progress-bar-animated active' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width:" + this.barpercentage + "%;background-color:" + this.barcolor + "'></div></div>";
        var element = $("#" + this.divname + "");
        element.append(com);
    }



}



class notification{
    constructor (idOfDiv,colorOfPanel,BodyOfPanel,idOfPanel)
    {
        // id : div id
        // color : primary -suucess; 
        // body : text message;
        this.idOfDiv = idOfDiv;
        this.colorOfPanel = colorOfPanel;
        this.BodyOfPanel = BodyOfPanel;
        this.idOfPanel = idOfPanel;
    }

    check_elementExistence(elementID)
    {
        if ($("#"+elementID+"").length === 1){
            $("#"+elementID+"").remove();
        }
    }

    get render()
    {
        this.create_panel();
    }

    create_panel()
    {
        this.check_elementExistence(this.idOfPanel);
        var com = "<div id='"+this.idOfPanel+"' class='alert alert-"+this.colorOfPanel+"' role='alert'>"+this.BodyOfPanel+"</div>"
        var element = $("#" + this.idOfDiv + "");
        element.append(com);
 
    }

}
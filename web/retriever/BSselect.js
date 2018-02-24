class select {

    constructor(id,selectid,selecttexttitle,desc) {
        // === Input Paramaters ===
        // *id : div element id (STRING)
        // *selectid :HTML element id
        // *selecttitle: String
        // desc
  
    

        this.id = id;
        this.selectid = selectid;
        this.selecttexttitle = selecttexttitle;
        this.selectdesc  = desc;
        
    }
    get render()
    {
        this.create_select();
    }

    check_elementExistence(elementID)
    {
        if ($("#"+elementID+"").length === 1){
            // found
            $("#"+elementID+"").remove();
        }
    }

    create_select()
    {
        this.check_elementExistence(this.selectid);
        var com = "<span>"+this.selecttexttitle+"</span>  <select id='"+this.selectid+"'><option>Select</option></select><small id='emailHelp' class='form-text text-muted'>" + this.selectdesc + "</small>";
        var element = $("#" + this.id + "");
        element.append(com);
        
    }
}



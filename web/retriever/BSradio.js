class radiobutton {

    constructor(id,radiobuttonid,radiotexttitle,radiolabeltext,radiogroup,radiodisplay) {
        // === Input Paramaters ===
        // *id : div element id (STRING)
        // *radiobuttonid :HTML element id
        //   *radiotexttitle : the title of the elements (TEXT)
        //   *radiolabeltext : label (TEXT);
        //   *radiogroup : element group id (TEXT)
        //   *radiodisplay : inline ;
    

        this.id = id;
        this.radiobuttonid = radiobuttonid;
        this.radiolabeltext = radiolabeltext;
        this.radiotexttitle = radiotexttitle;
        this.radiogroup = radiogroup;
        this.radiodisplay = radiodisplay;
    }
    get render()
    {
        this.create_radiobutton();
    }

    check_elementExistence(elementID)
    {
        if ($("#"+elementID+"").length === 1){
            // found
            $("#"+elementID+"").remove();
        }
    }

    create_radiobutton()
    {
        this.check_elementExistence(this.radiobuttonid);
        var com = "<p>"+this.radiotexttitle+"</p> <label class='radio-inline' id ='"+this.radiobuttonid+"' ><input   type='radio' name='"+this.radiogroup+"'>"+this.radiolabeltext+"</label>";
        var element = $("#" + this.id + "");
        element.append(com);
        
    }
}



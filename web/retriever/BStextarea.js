class textarea {

    constructor(id,textboxid,textboxtype,textboxlabelFor,textboxtitle,textboxdesc,textboxplaceholder,textng) {
        // === Input Paramaters ===
        // *id : element id (STRING)
        // *textbox id : HTML element id  (STRING)
        // *textbox type: ex. email,text.(STRING) 
        // *textbox for : label tagging.(STRING)
        // *textbox title:   span title.(STRING)
        // textbox desc : desclimar text.(STRING)
        // textbox placeholder.(STRING)

        this.id = id;
        this.textboxid = textboxid;
        this.textboxtype = textboxtype;
        this.textboxlabelFor = textboxlabelFor;
        this.textboxtitle = textboxtitle;
        this.textboxdesc = textboxdesc;
        this.textboxplaceholder = textboxplaceholder;
        this.textng = textng;
    }

    get render()
    {
        this.create_textbox();
    }

    check_elementExistence(elementID)
    {
        if ($("#"+elementID+"").length === 1){
            // found
            $("#"+elementID+"").remove();
        }
    }

    create_textbox()
    {
        this.check_elementExistence(this.textboxid);
        var com = " <div style='text-align:left;' id='" + this.textboxid + "'  class='form-group'><label  for='" + this.textboxlabelFor + "'>" + this.textboxtitle + " </label><textarea "+this.textng+" type='" + this.textboxtype + "' class='form-control'  placeholder='" + this.textboxplaceholder + "'/><small id='emailHelp' class='form-text text-muted'>" + this.textboxdesc + "</small></div>";
        var element = $("#" + this.id + "");
        element.append(com);
        
    }
}



// class for textbox operations (read values..)
// 
class textareaops {
constructor (idOfdiv,typeOfElement)
{
    this.idOfdiv = idOfdiv ; 
    this.typeOfElement = typeOfElement;

}    

get getArrayOfValues()
{
    this.read_inputValues();
}

read_inputValues() {
    // reads a group of html elements and push values to an array list.

    // list of input values 
    var valuesOfelements = [];
    $("#" + this.idOfdiv + " " + this.typeOfElement + "").each(function (i, v) {

        // iterates through all HTML elements
        var valueOfElement = $(this).val();
        console.log(valueOfElement);
        valuesOfelements.push(valueOfElement);
    });

    console.log(valuesOfelements);
}
}

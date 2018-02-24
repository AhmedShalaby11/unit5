class datepicker {

    constructor(id,datepickerid,datepickertype,datepickerlabelFor,datepickertitle,datepickerdesc,datepickerplaceholder) {
        // === Input Paramaters ===
        // *id : element id (STRING)
        // *datepicker id : HTML element id  (STRING)
       
        // *datepicker type: ex. email,text.(STRING) 
        // *datepicker for : label tagging.(STRING)
        // *datepicker title:   span title.(STRING)
        // datepicker desc : desclimar text.(STRING)
        // datepicker placeholder.(STRING)


        this.id = id;
        this.datepickerid = datepickerid;
        this.datepickertype = datepickertype;
        this.datepickerlabelFor = datepickerlabelFor;
        this.datepickertitle = datepickertitle;
        this.datepickerdesc = datepickerdesc;
        this.datepickerplaceholder = datepickerplaceholder;
    
    }

    get render()
    {
        this.create_datepicker();
    }

    check_elementExistence(elementID)
    {
        if ($("#"+elementID+"").length === 1){
            // found
            $("#"+elementID+"").remove();
        }
    }

    create_datepicker()
    {
        this.check_elementExistence(this.datepickerid);
        var com = " <div style='text-align:left;' id='" + this.datepickerid + "'  class='form-group'><label  for='" + this.datepickerlabelFor + "'>" + this.datepickertitle + " </label><input  type='" + this.datepickertype + "' class='form-control datepicker'  placeholder='" + this.datepickerplaceholder + "'><small id='emailHelp' class='form-text text-muted'>" + this.datepickerdesc + "</small></div>";
        var element = $("#" + this.id + "");
        element.append(com);
        
    }
}



// class for datepicker operations (read values..)
// 
class datepickerops {
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

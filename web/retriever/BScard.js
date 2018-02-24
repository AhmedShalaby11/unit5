class card {

    constructor(id, cardid, cardtitle, cardtext, cardbuttontext, cardbuttonclass, cardwithbutton,image,ngfunction) {
        // === Input Paramaters ===
        // *id : div element id (STRING)
        //    *cardid : elementid;
        //  *cardtitle :the title (STRING)
        //  *cardtext : sub title (STRING)
        //  cardbuttontext : button title (STRING)
        // cardbuttonclass : DANGER,SUCCESS,PRIMARY
        //  *cardwithbutton: append button or not 'Y,N';
        //  ngfunction : if you have any function (AngularJS) onClick Event (fn).
        //  image :image url
        this.id = id;
        this.cardid = cardid;
        this.cardtitle = cardtitle;
        this.cardtext = cardtext;
        this.cardbuttontext = cardbuttontext;
        this.cardbuttonclass = cardbuttonclass;
        this.cardwithbutton = cardwithbutton;
        this.ngfunction = ngfunction;
        this.image = image;

    }

    get render() {
        this.create_card();
    }

    check_elementExistence(elementID) {
        if ($("#" + elementID + "").length === 1) {
            // found
            $("#" + elementID + "").remove();
        }
    }

    create_card() {
        this.check_elementExistence(this.cardid);

        if (this.cardwithbutton =='Y')
        {
        var com = "<div id='" + this.cardid + "' class='card' style='width: 18rem;'><img class='card-img-top' src='"+this.image+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+this.cardtitle+"</h5><p class='card-text'>"+this.cardtext+"</p><button ng-click='"+this.ngfunction+"' class='btn btn-"+this.cardbuttonclass+"'>"+this.cardbuttontext+"</button></div></div>";
        var element = $("#" + this.id + "");
        element.append(com);
        }
        else if(this.cardwithbutton == 'N')
        {
            var com = "<div id='" + this.cardid + "' class='card' style='width: 18rem;'><img class='card-img-top' src='"+this.image+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+this.cardtitle+"</h5><p class='card-text'>"+this.cardtext+"</p></div></div>";
            var element = $("#" + this.id + "");
            element.append(com);  
        }
    }
}


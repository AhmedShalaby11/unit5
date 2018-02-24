


class core {


    get load() {
        // On load event
//        this.reg_doctorForm();
        // 
        this.load_datePicker();

    }

    reg_doctorForm() {
        
        //div_doctorPersonalInfo
        //div_doctorProfessionalInfo
        //div_doctorPersonalPhoto
        // =======
        const doctorName = new textbox('div_doctorPersonalInfo', 'text1', 'input', 'forlabel', 'Full Name', '', 'ex.Mohamed/Ahmed', '','ng-model="fullname"');
        const doctorDateOfBirth = new datepicker('div_doctorPersonalInfo', 'text2', 'text', '', 'Date of birth', '', '');
        const doctorDegree = new textbox('div_doctorProfessionalInfo', 'text3', 'input', 'forlabel', 'Degree', 'Your current degree', '', '','');
        const doctorTitle = new textbox('div_doctorPersonalInfo', 'text4', 'input', 'forlabel', 'Title', 'Your current title.', '', '','');
        const doctorBechYear = new datepicker('div_doctorProfessionalInfo', 'text5', 'text', '', 'Bach. Year', '', '');
        const doctorMSCYear = new datepicker('div_doctorProfessionalInfo', 'text6', 'text', '', 'MCS Year', '', '');
        const doctorPHDYear = new datepicker('div_doctorProfessionalInfo', 'text7', 'text', '', 'PHD Year', '', '');
        const doctorStaffID = new textbox('div_doctorPersonalInfo', 'text8', 'input', 'forlabel', 'Staff ID', 'Your currelntly registered ID in hospital.', 'ex.5542', '','');
        const otherDegrees = new textarea('div_doctorPersonalInfo', 'text9', 'textarea', 'forlabel', 'Other Degrees', 'Additional Degrees ', '','');
        const otherQualifications = new textarea('div_doctorPersonalInfo', 'text10', 'textarea', 'forlabel', 'Other Qualifications', 'Conferences,Researches', '','');
        const personalPhotoCard = new card('div_doctorPersonalPhoto', 'card1', 'Personal Photo', 'upload your personal photo', 'Upload', 'danger', 'Y', './images/doctor_avatar.png', '');
        const doctorPersence = new select('div_doctorProfessionalInfo', 'select1', 'Doctor Presence', 'ex.Available,Abroad');
        
        
        // render;
//        doctorName.render;
        
//        doctorDateOfBirth.render;
        // doctorStaffID.render;
//        doctorDegree.render;
//        doctorTitle.render;
        // 
//        doctorBechYear.render;
        // 

//        doctorMSCYear.render;
        // 

//        doctorPHDYear.render;

//        otherDegrees.render;
//        otherQualifications.render;
//        personalPhotoCard.render;
        // 
//        doctorPersence.render;
        // 

        
   
    }

    load_datePicker() {
        $('.datepicker').datepicker(
            {
                yearRange: "1940:",
                changeMonth: true,
                changeYear: true,
                showButtonPanel: true,
                    dateFormat: 'yy/mm/dd',
                    // onClose: function(dateText, inst) { 
                    //     $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
                    // }
            }
        );
    }
}
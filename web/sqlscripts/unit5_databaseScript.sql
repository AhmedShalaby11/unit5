CREATE TABLE `hospital`.`conf_child_presentation` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `presentation_name` varchar(150) DEFAULT NULL,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`conf_child_state` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(150) DEFAULT NULL,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`conf_cs_indication` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `cs_indication_name` varchar(150) DEFAULT NULL,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`conf_degree` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `degree_name` varchar(100) DEFAULT NULL,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`conf_Intervention` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `intervention_name` varchar(150) DEFAULT NULL,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`conf_Outcome` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `Outcome_name` varchar(150) DEFAULT NULL,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`conf_Outcome_State` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(150) DEFAULT NULL,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`conf_title` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `title_name` varchar(100) DEFAULT NULL,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `hospital`.`doctor_profile` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `doctor_name` varchar(200) DEFAULT NULL,
  `doctor_title` varchar(45) DEFAULT NULL,
  `doctor_degree` varchar(100) DEFAULT NULL,
  `doctor_bach_year` date DEFAULT NULL,
  `doctor_MCS_year` date DEFAULT NULL,
  `doctor_PHD_year` date DEFAULT NULL,
  `doctor_birthdate` datetime DEFAULT NULL,
  `doctor_other_degrees` text,
  `doctor_other_qualifications` text,
  `doctor_image_URL` text,
  `doctor_precense` varchar(50) DEFAULT NULL,
  `record_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`patient_diagnose` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `GA` varchar(200) DEFAULT NULL,
  `child_Presentation` varchar(200) DEFAULT NULL,
  `child_state` varchar(200) DEFAULT NULL,
  `Positive_date` datetime DEFAULT NULL,
  `Intervention` text,
  `Outcome` text,
  `Outcome_sex` text,
  `Outcome_weight` double DEFAULT NULL,
  `Outcome_State` text,
  `cs_indication` text,
  `Surgeon` text,
  `Assistant` text,
  `Supervisor` text,
  `Complications` text,
  `Dynamics` text,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hospital`.`patient_profile` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `Patient_name` varchar(200) DEFAULT NULL,
  `patient_id` text,
  `patient_birthdate` date DEFAULT NULL,
  `patient_age` double DEFAULT NULL,
  `patient_sex` varchar(20) DEFAULT NULL,
  `patient_contact` text,
  `patient_address` text,
  `patient_email` varchar(45) DEFAULT NULL,
  `patient_image_url` text,
  `rec_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

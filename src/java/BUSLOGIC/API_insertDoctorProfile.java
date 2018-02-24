/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package BUSLOGIC;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author AhmedShalaby
 */
public class API_insertDoctorProfile extends HttpServlet {

    db_mysqlops mysql = new db_mysqlops();
    FN_toJSON json = new FN_toJSON();
    var_env env = new var_env();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            String method = request.getParameter("method");
//            insertDoctorProfile
            if (("insertDoctorProfile").equals(method)) {

//            n, t, od, oq, deg, prec
                String n = request.getParameter("n").replace("%20", " ").trim();
                String t = request.getParameter("t").replace("%20", " ").trim();
                String od = request.getParameter("od").replace("%20", " ").trim();
                String oq = request.getParameter("oq").replace("%20", " ").trim();
                String deg = request.getParameter("deg").replace("%20", " ").trim();
                String prec = request.getParameter("prec").replace("%20", " ").trim();
                String bachyear = request.getParameter("bdate");
                String masteryear = request.getParameter("mdate");
                String phdyear = request.getParameter("pdate");
                String birthdate = request.getParameter("d");

                mysql.openmySQLconnection();
                String q = "INSERT INTO `hospital`.`doctor_profile`\n"
                        + "(\n"
                        + "`doctor_name`,\n"
                        + "`doctor_title`,\n"
                        + "`doctor_degree`,\n"
                        + "`doctor_bach_year`,\n"
                        + "`doctor_MCS_year`,\n"
                        + "`doctor_PHD_year`,\n"
                        + "`doctor_birthdate`,\n"
                        + "`doctor_other_degrees`,\n"
                        + "`doctor_other_qualifications`,\n"
                        + "`doctor_image_URL`,\n"
                        + "`doctor_precense`\n"
                        + ")\n"
                        + "VALUES\n"
                        + "(\n"
                        + "'"+n+"',\n"
                        + "'"+t+"',\n"
                        + "'"+deg+"',\n"
                        + "'"+bachyear+"',\n"
                        + "'"+masteryear+"',\n"
                        + "'"+phdyear+"',\n"
                        + "'"+birthdate+"',\n"
                        + "'"+od+"',\n"
                        + "'"+oq+"',\n"
                        + "'',\n"
                        + "'"+prec+"'\n)";
                mysql.executeSQL(q);
                mysql.closemySQLconnection();
                out.print("Profile Inserted");

            }

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(API_insertDoctorProfile.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(API_insertDoctorProfile.class.getName()).log(Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            Logger.getLogger(API_insertDoctorProfile.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            Logger.getLogger(API_insertDoctorProfile.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(API_insertDoctorProfile.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(API_insertDoctorProfile.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

import React from "react";
import "../css/contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <>
      <section className="contact_wrapper" id="contactMainContainer">
        <div className="contact_info">
          <h3 className="title">Contact Info</h3>
          <ul className="icons_wrapp">
            <li>
              <div className="icon">
                <span className="material-icons-outlined"> place </span>
              </div>
              <div className="text">
                4, Nutan Shaktinagar SOC, Nr. Old Aradhna School Cross Road,
                Maninagar, Ahemdabad 380008
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="material-icons-outlined"> mail_outline </span>
              </div>
              <div className="text">Octa.servicez@gmail.com</div>
            </li>
            {/* <li>
              <div className="icon">
                <span className="material-icons-outlined"> phone_in_talk </span>
              </div>
              <div className="text">
                123-456-789
              </div>
            </li> */}
          </ul>
        </div>

        <div className="contact_msg">
          <h3 className="title">Send a Message</h3>
          <form id="form">
            <div className="form_fild">
              <div className="input_group w_50">
                <input type="text" className="input" required id="Fname" />
                <label className="placeholder">First Name</label>
              </div>

              <div className="input_group w_50">
                <input type="text" className="input" required id="Lname" />
                <label className="placeholder">Last Name</label>
              </div>

              <div className="input_group w_50">
                <input type="text" className="input" required id="MailID" />
                <label className="placeholder">Emal Address</label>
              </div>

              <div className="input_group w_50">
                <input type="tel" className="input" required id="PhoneNO" />
                <label className="placeholder">Mobile Number</label>
              </div>

              <div className="input_group w_100">
                <textarea
                  className="input input_textarea "
                  rows="6"
                  required
                  id="EQRMessage"
                ></textarea>
                <label className="placeholder textarea">
                  Write your message here...
                </label>
              </div>

              <div className="input_group">
                <input
                  type="submit"
                  className="btn"
                  id="button"
                  value="Send Email"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

emailjs.init("68H9HdHkizlk2mfRs");
const btn = document.getElementById("button");
var formVar = document.getElementById("form");

if (btn) {
  formVar.addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_dlj9c2u";
    const templateID = "template_x5h6xcp";

    emailjs
      .send(serviceID, templateID, {
        Fname: document.getElementById("Fname").value,
        Lname: document.getElementById("Lname").value,
        MailID: document.getElementById("MailID").value,
        PhoneNO: document.getElementById("PhoneNO").value,
        EQRMessage: document.getElementById("EQRMessage").value,
      })
      .then(
        () => {
          btn.value = "Send Email";
        },
        () => {
          btn.value = "Send Email";
        }
      );
  });
}

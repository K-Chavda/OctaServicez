import React, {useRef} from "react";
import "../css/contact.css";
import emailjs from "@emailjs/browser";



 function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const btn = document.getElementById("button");
    btn.value = "Sending...";
    emailjs.sendForm('service_dlj9c2u', 'template_rzxi1y6', form.current, '68H9HdHkizlk2mfRs')
      .then(() => {
        btn.value = "Send Email";
      }, (error) => {
        btn.value = "Send Email";
      });
  };
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
          <form ref={form} onSubmit={sendEmail}  >
            <div className="form_fild">
              <div className="input_group w_50">
                <input type="text" className="input" name="Fname" required/>
                <label className="placeholder">First Name</label>
              </div>

              <div className="input_group w_50">
                <input type="text" className="input" name="Lname" required/>
                <label className="placeholder">Last Name</label>
              </div>

              <div className="input_group w_50">
                <input type="text" className="input" name="MailID" required/>
                <label className="placeholder">Emal Address</label>
              </div>

              <div className="input_group w_50">
                <input type="tel" className="input" name="PhoneNO" required/>
                <label className="placeholder">Mobile Number</label>
              </div>

              <div className="input_group w_100">
                <textarea
                  className="input input_textarea "
                  rows="6"
                  name="EQRMessage"
                  required
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
// function sendMail(){
  // const btn = document.getElementById("button");
  // var formVar = document.getElementById("form");
  
  // if (btn) {
  //   // emailjs.init("68H9HdHkizlk2mfRs");
  //   formVar.addEventListener("submit", function (event) {
  //     event.preventDefault();
  
  //     btn.value = "Sending...";
  
  //     const serviceID = "service_dlj9c2u";
  //     const templateID = "template_rzxi1y6";
  
  //     emailjs
  //       .send(serviceID, templateID, {
  //         Fname: document.getElementById("Fname").value,
  //         Lname: document.getElementById("Lname").value,
  //         MailID: document.getElementById("MailID").value,
  //         PhoneNO: document.getElementById("PhoneNO").value,
  //         EQRMessage: document.getElementById("EQRMessage").value,
  //       })
  //       .then(
  //         () => {
  //           btn.value = "Send Email";
  //         },
  //         () => {
  //           btn.value = "Send Email";
  //         }
  //       );
  //   });
  // }
// }

export default Contact;


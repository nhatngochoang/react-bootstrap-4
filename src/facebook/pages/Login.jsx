import React from "react";
import ModalExample from "../components/ModalExample.jsx";

export default function Login() {
   return (
      <div>
         <div className="container d-flex flex-column flex-lg-row justify-content-evenly mt-5 pt-5">
            {/* heading */}
            <div className="text-center text-lg-start mt-lg-5 pt-lg-5">
               <h1 className="text-primary fw-bold fs-0">flexbook</h1>
               <p className="w-75 mx-auto mx-lg-0 fs-4">
                  Facebook helps you connect and share with people in your life
               </p>
            </div>
            {/* form */}
            <div style={{ width: "100%", maxWidth: "28rem" }}>
               <div className="bg-white shadow rounded p-3 input-group-lg">
                  <input
                     type="email"
                     className="form-control my-3"
                     placeholder="Email address or phone number"
                  />
                  <input type="password" className="form-control my-3" placeholder="Password" />
                  <a href="#button">
                     <button className="btn btn-primary w-100 my-3">Log in</button>
                  </a>
                  <a href="#forgot" className="text-decoration-none text-center">
                     <p>Forgotten Password?</p>
                  </a>
                  {/* create form */}
                  <hr />
                  {/* create modal */}
                  <ModalExample />
               </div>
               <div className="my-5 pb-5 text-center">
                  <p className="fw-bold">
                     <a href="#footer" className="text-decoration-none text-dark">
                        Createa a Page
                     </a>{" "}
                     <span className="fw-normal">for a celebrity, band or business.</span>
                  </p>
               </div>
            </div>
         </div>
         {/* footer */}
         <footer className="bg-white p-4 text-muted">
            <div className="container">
               {/* language  */}
               <div className="d-flex flex-wrap">
                  <p className="mx-2 fs-7 mb-0">English (US)</p>
                  <p className="mx-2 fs-7 mb-0">Tiếng Việt</p>
                  <p className="mx-2 fs-7 mb-0">中文(台灣)</p>
                  <p className="mx-2 fs-7 mb-0">한국어</p>
                  <p className="mx-2 fs-7 mb-0">日本語</p>
               </div>
               <hr />
               {/* actions */}
               <div className="d-flex flex-wrap">
                  <p className="mx-2 fs-7 mb-0">Sign Up</p>
                  <p className="mx-2 fs-7 mb-0">Login</p>
                  <p className="mx-2 fs-7 mb-0">Messenger</p>
                  <p className="mx-2 fs-7 mb-0">Facebook Lite</p>
                  <p className="mx-2 fs-7 mb-0">Watch</p>
               </div>
               {/* copy  */}
               <div className="mt-4 mx-2">
                  <p className="fs-7">Flexbook © 2021</p>
               </div>
            </div>
         </footer>
      </div>
   );
}

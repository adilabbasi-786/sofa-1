import React from "react";

const Footer = ({ data }) => {
  return (
    <>
      <footer id="footer" className="footer position-relative">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename">Sofa</span>
              </a>
              <div className="footer-contact pt-3">
                <p>{data?.address}</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>{data?.phone}</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>{data?.email}</span>
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
              </ul>
            </div> */}

            {data?.fb_url && (
              <div className="col-lg-6 col-md-12">
                <h4>Follow Us</h4>
                <p>You can directly contact us via social medial</p>
                <div className="social-links d-flex">
                  {/* <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a> */}
                  <a href={data?.fb_url} target="_blank">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href={data?.whatsapp_url} target="_blank">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  {/* <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a> */}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            <span>This website Developed By</span>
            <strong className="px-1 sitename">
              <a target="_blank" href="https://ftssolution.tech/">
                FTS TECH
              </a>
            </strong>
            <span></span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

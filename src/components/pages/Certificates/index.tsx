import React from "react";
import CertificateDetail from "./Api";
import Certificate from "./Certificate";

const Certificates = ({ active }: { active: number }) => {
  return (
    <section
      className={`container  ${active === 3 ? "active" : ""}`}
      id="certificates"
    >
      <div className="blogs-content">
        <div className="main-title">
          <h2>
            My <span>Certifications</span>
            <span className="bg-text">My Certifications</span>
          </h2>
        </div>
        <div className="certificates">
          {[...CertificateDetail].map((item, index) => (
            <Certificate
              title={item.title}
              image={item.image}
              link={item.link}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

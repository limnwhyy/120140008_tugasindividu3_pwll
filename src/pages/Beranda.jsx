import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Beranda = () => {
  return (
    <div className="container col">
      <Header
        title="Muhammad Muslim Nur Wahyudi"
        desc="Student, Developer, and Writer"
      />
      <main
        className="about col"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="content col">
          <h2>About Me</h2>
          <p
            style={{
              width: "60%",
              alignSelf: "center",
            }}
          >
            Student at Institut Teknologi Sumatera majoring in Informatics
            Engineering. I am interested in web development, mobile development,
            and machine learning. I am also interested in writing, especially
            about technology.
          </p>
        </div>
        <div className="content col">
          <h2>Tech</h2>
          <div className="tech content row">
            <div className="content tech language-container col">
              <h3>Language</h3>
              <div className="logo-container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="js.png"
                  width={60}
                />
              </div>
              <div className="logo-container">
                <img
                  src="https://www.php.net//images/logos/new-php-logo.svg"
                  alt="php.png"
                  width={60}
                />
              </div>
              <div className="logo-container">
                <img
                  src="https://badoystudio.com/wp-content/uploads/2018/07/dart_language-1024x272.png"
                  alt="dart.png"
                  width={60}
                />
              </div>
            </div>
            <div className="content tech language-container col">
              <h3>Frontend</h3>
              <div className="logo-container">
                <img
                  src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png"
                  alt="flutter.png"
                  width={60}
                />
              </div>
              <div className="logo-container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="react.png"
                  width={60}
                />
              </div>
              <div className="logo-container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                  alt="vuejs.png"
                  width={60}
                />
              </div>
            </div>
            <div className="content tech language-container col">
              <h3>Backend</h3>
              <div className="logo-container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                  alt="expressjs.png"
                  width={60}
                />
              </div>
              <div className="logo-container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"
                  alt="laravel.png"
                  width={60}
                />
              </div>
              <div className="logo-container">
                <img
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png"
                  alt="nest.png"
                  width={60}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Beranda;

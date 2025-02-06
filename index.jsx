import React from 'react';
import './style.css'; // Assuming you have an associated CSS file (style.css)

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          FiNova News
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#ALLnews">ALL</a></li>
            <li><a href="#businessNews">Business</a></li>
            <li><a href="#financenews">Finance</a></li>
          </ul>
          <div className="bar">
            <i className="open fa-solid fa-bars-staggered"></i>
            <i className="close fa-solid fa-xmark"></i>
          </div>
        </nav>
      </header>

      <div className="topHeadlines">
        <div className="left">
          <div className="title">
            <h2>Breaking News</h2>
          </div>
          <div className="img" id="breakingImg">
            <img src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg" alt="Breaking News Image" />
          </div>
          <div className="text" id="breakingNews">
            <div className="title">
              <a href="#">
                <h2>Global Stock Markets Plunge Amid Economic Uncertainty</h2>
              </a>
            </div>
            <div className="description">
              Global stock markets have taken a significant hit following the latest economic reports indicating a slowdown in major economies. Investors are scrambling for safe havens as inflation fears grow.
            </div>
          </div>
        </div>

        <div className="right">
          <div className="title">
            <h2>Top Headlines</h2>
          </div>
          <div className="topNews">
            <div className="news">
              <div className="img">
                <img src="https://themeapesite.hocalwire.in/h-upload/2023/06/28/500x300_1516114-spacex-sixteennine.webp" alt="News Image" />
              </div>
              <div className="text">
                <div className="title">
                  <a href="#">
                    <p>SpaceX Successfully Launches New Satellite into Orbit</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="news">
              <div className="img">
                <img src="https://etimg.etb2bimg.com/photo/111299715.cms" alt="News Image" />
              </div>
              <div className="text">
                <div className="title">
                  <a href="#">
                    <p>AI Technology Revolutionizes Healthcare Industry</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="news">
              <div className="img">
                <img src="https://www.currencytransfer.com/wp-content/uploads/2022/11/ev-2-edit.min_.jpg" alt="News Image" />
              </div>
              <div className="text">
                <div className="title">
                  <a href="#">
                    <p>Electric Vehicles Set to Overtake Gas Cars by 2030</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="news">
              <div className="img">
                <img src="https://www.businessoutreach.in/wp-content/uploads/2023/01/Green-Initiatives1-1-1024x1024.jpg" alt="News Image" />
              </div>
              <div className="text">
                <div className="title">
                  <a href="#">
                    <p>Government Introduces New Green Initiatives for 2025</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page2">
        <div className="news" id="ALL">
          <div className="title">
            <h2>ALL</h2>
          </div>
          <div className="newsBox">
          </div>
        </div>
        <div className="news" id="businessNews">
          <div className="title">
            <h2>Business News</h2>
          </div>
          <div className="newsBox">
          </div>
        </div>
        <div className="news" id="Finance">
          <div className="title">
            <h2>Finance</h2>
          </div>
          <div className="newsBox">
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="box">
          <div className="left">
            <div className="categories">
              <p>Categories</p>
              <div>
                <p>ALL</p>
              </div>
              <div>
                <p>Business</p>
              </div>
              <div>
                <p>Finance</p>
              </div>
            </div>
            <div className="contactUs">
              <div className="contact">
                <p>Contact Us</p>
                <div>Phone No. - <span>9876543210</span></div>
                <div>Email - <span>finova@gmail.com</span></div>
                <div>Address - <span>Delhi, India</span></div>
              </div>
              <div className="icon">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="newsletter">
              <p>Subscribe to Our Newsletter</p>
              <div className="email">
                <input type="email" placeholder="Enter Your Email Here" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
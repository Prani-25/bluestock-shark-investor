import React,{useState} from 'react'
import './app.css'
import { FiMenu, FiX } from "react-icons/fi";

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <div>
    <header>
      <div className="logo">
        <img src="./src/assets/logo" alt="Bluestock Logo" />
        BLUESTOCK
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">IPO</a>
        <a href="#">Community</a>
        <a href="#">Products</a>
        <a href="#">Brokers</a>
        <a href="#">Live News</a>
      </nav>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up Now</button>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      
    </header>

  <div class="container">
    <nav class="breadcrumb">
      <a href="#">Home</a>&gt; <span>Shark Investor</span>
    </nav>
    <div class="home-heading">
        <h1>Shark Investors</h1>
        <p class="subtext">Look into the portfolio of these Super Investors to find out their favourite stocks.</p>
    </div>


    <div class="search-box">
       <span > Search by Name<br/></span>
      <input type="text" placeholder="eg: Damani" />
    </div>

    <div class="cards">
      {/* <!-- Card template, repeat for each investor --> */}
      <div class="card">
        <img src="./src/assets/1516825496993-removebg-preview.png" alt="Rakesh Jhunjhunwala" />
        <h3>Rakesh Jhunjhunwala</h3>
        <p>He starting investment in the 90's<br/>His investment st...</p>
        <button>View Holdings</button>
      </div>

      <div class="card">
        <img src="./src/assets/1624005931412-removebg-preview.png" alt="Anil Goel" />
        <h3>Anil Goel</h3>
        <p>He starting investment in the 90's<br/>His investment st...</p>
        <button>View Holdings</button>
      </div>

      <div class="card">
        <img src="./src/assets/Anil Goel.png" alt="Ashish Dhawan" />
        <h3>Ashish Dhawan</h3>
        <p>He starting investment in the 90's<br/>His investment st...</p>
        <button>View Holdings</button>
      </div>

      <div class="card">
        <img src="./src/assets/Ashish Dhawan.png" alt="Ashish Kacholia" />
        <h3>Ashish Kacholia</h3>
        <p>He starting investment in the 90's<br/>His investment st...</p>
        <button>View Holdings</button>
      </div>

      <div class="card">
        <img src="./src/assets/Ashish Kacholia.png" alt="Dolly Rajeev Khanna" />
        <h3>Dolly Rajeev Khanna</h3>
        <p>He starting investment in the 90's<br/>His investment st...</p>
        <button>View Holdings</button>
      </div>

      <div class="card">
        <img src="./src/assets/Dolly Rajeev Khanna.png" alt="Hemendra Kothari" />
        <h3>Hemendra Kothari</h3>
        <p>He starting investment in the 90's<br/>His investment st...</p>
        <button>View Holdings</button>
      </div>

      <div class="card">
        <img src="./src/assets/Hemendra Kothari.png" alt="Nemish Shah" />
        <h3>Nemish Shah</h3>
        <p>He starting investment in the 90's<br/>His investment st...</p>
        <button>View Holdings</button>
      </div>

      <div class="card">
        <img src="./src/assets/Nemish Shah.png" alt="Porinju Veliyath" />
        <h3>Porinju Veliyath</h3>
        <p>He starting investment in the 90's<br/>His investment st...</p>
        <button>View Holdings</button>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default App



import "./AskMara.css";

import { Link } from 'react-router-dom';

let alertHello2 = () => 
  alert("test");

function alertHello() {
  window.close(``, `_parent`, ``);
}

function AskMara() {

  return (
    <div className='body-mara'>
      <header className="navbar navbar-dark bg-purple"></header>
      <div className="container-mara">
        <div className="row page-1">

          <p>
            By clicking on the link provided, you will be redirected to a
            third-party website. This website is not owned or managed by Bayer.
            Bayer is not responsible for the content and terms of use of the
            third-party website. Their data privacy policies may be different, so
            please make sure to read their terms and policies carefully. In case
            of questions about the services and products offered on the linked
            third-party site, please contact them directly.
          </p>
          <div className="col-md-12 mt-20">
            <Link className="btn btn-purple btn-lg" to={"/Proceed"}>PROCEED</Link>
          </div>

          <div className="col-md-12 mt-20">
            <button className="btn btn-blue btn-lg" onClick= {alertHello}>EXIT</button>
          </div>
        </div>
      </div>
      <footer className="footer-page1"></footer>
    </div>
  );
}

function windowClose() {

    alert('test')
  }

export default AskMara;
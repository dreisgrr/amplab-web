

import "./AskMara.css";


function AskMara() {

  return (
    <div className='body-mara'>
      <header class="navbar navbar-dark bg-purple"></header>
      <div class="container-mara">
        <div class="row page-1">

          <p>
            By clicking on the link provided, you will be redirected to a
            third-party website. This website is not owned or managed by Bayer.
            Bayer is not responsible for the content and terms of use of the
            third-party website. Their data privacy policies may be different, so
            please make sure to read their terms and policies carefully. In case
            of questions about the services and products offered on the linked
            third-party site, please contact them directly.
          </p>
          <div class="col-md-12 mt-20">
            <button class="btn btn-purple btn-lg">PROCEED</button>
          </div>

          <div class="col-md-12 mt-20">
            <button class="btn btn-blue btn-lg">EXIT</button>
          </div>
        </div>
      </div>
      <footer class="footer-page1"></footer>
    </div>
  );
}

export default AskMara;
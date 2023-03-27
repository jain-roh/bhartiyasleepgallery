function scriptNavBottomBar(activeClasses){
    document.getElementById('topbar').innerHTML=`
    <div class="container d-flex justify-content-center justify-content-md-between">
    <div class="contact-info d-flex align-items-center">
      <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@bhartiyasleepgallery.com">contact@bhartiyasleepgallery.com</a></i>
      <i class="bi bi-phone d-flex align-items-center ms-4"><span>+91 9833 474083</span></i>
    </div>
    <div class="social-links d-none d-md-flex align-items-center">
      <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
      <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
    </div>
  </div>`;

    document.getElementById('navbar').innerHTML=`<ul>
    <li><a class="home" href="index.html">Home</a></li>
    <!--<li class="dropdown"><a class="sleepwell" href="#"><span>Sleepwell Mattress</span> <i class="bi bi-chevron-down"></i></a>
      <ul>
        <li class="dropdown"><a class="backsupportmattress" href="#"><span>Back Support Mattress</span> <i class="bi bi-chevron-right"></i></a>
          <ul>
            <li><a class="spinetech" href="product_details.html?&product=sleepwell&category=backsupportmattress&productId=spinetech">Spinetech</a></li>
            <li><a class="spinetechair" href="product_details.html?&product=sleepwell&category=backsupportmattress&productId=spinetechair">Spinetech Air</a></li>
            <li><a class="spinetechairluxury" href="product_details.html?&product=sleepwell&category=backsupportmattress&productId=spinetechairluxury">Spinetech Air Luxury</a></li>
            <li><a class="dignity" href="product_details.html?&product=sleepwell&category=backsupportmattress&productId=dignity">Dignity</a></li>
          </ul>
        </li>
        <li class="dropdown"><a class="comfortmattress" href="#"><span>Comfort Mattress</span> <i class="bi bi-chevron-right"></i></a>
          <ul>
            <li><a class="revital4" href="product_details.html?&product=sleepwell&category=comfortmattress&productId=revital4">Revital 4.0</a></li>
            <li><a class="revital2" href="product_details.html?&product=sleepwell&category=comfortmattress&productId=revital2">Revital 2.0</a></li>
            <li><a class="impressions" href="product_details.html?&product=sleepwell&category=comfortmattress&productId=impressions">Impressions</a></li>
            <li><a class="genx3" href="product_details.html?&product=sleepwell&category=comfortmattress&productId=genx3">GenX 3.0</a></li>
            <li><a class="genx2" href="product_details.html?&product=sleepwell&category=comfortmattress&productId=genx2">GenX 2.0</a></li>
            <li><a class="genx1" href="product_details.html?&product=sleepwell&category=comfortmattress&productId=genx1">GenX 1.0</a></li>
            <li><a class="latexplus" href="product_details.html?&product=sleepwell&category=comfortmattress&productId=latexplus">Latex Plus</a></li>
          </ul>
        </li>
        <li class="dropdown"><a class="springmattress" href="#"><span>Spring Mattress</span> <i class="bi bi-chevron-right"></i></a>
          <ul>
            <li><a class="esteem" href="product_details.html?&product=sleepwell&category=springmattress&productId=esteem">Esteem</a></li>
            <li><a class="eminence" href="product_details.html?&product=sleepwell&category=springmattress&productId=eminence">Eminence</a></li>
            <li><a class="naturalle1" href="product_details.html?&product=sleepwell&category=springmattress&productId=naturalle1">Naturalle 1.0</a></li>
          </ul>
        </li>
        <li class="dropdown"><a class="budgetedmattress" href="#"><span>Budgeted Mattress</span> <i class="bi bi-chevron-right"></i></a>
          <ul>
            <li><a class="ultra" href="product_details.html?&product=sleepwell&category=budgetedmattress&productId=ultra">Ultra(Basic Mattress)</a></li>
            <li><a class="activa" href="product_details.html?&product=sleepwell&category=budgetedmattress&productId=activa">Activa(Balance)</a></li>
            <li><a class="prithvi" href="product_details.html?&product=sleepwell&category=budgetedmattress&productId=prithvi">Prithivi</a></li>
            <li><a class="vaayu" href="product_details.html?&product=sleepwell&category=budgetedmattress&productId=vaayu">Vaayu</a></li>
            <li><a class="aakash" href="product_details.html?&product=sleepwell&category=budgetedmattress&productId=aakash">Aakash</a></li>
          </ul>
        </li>
      </ul>
    </li>-->
    <li><a class="customised" href="customised.html">Customised Mattress</a></li>
    <li class="dropdown cutainsblinds"><a href="#"><span>Curtains & Blinds</span> <i class="bi bi-chevron-down"></i></a>
      <!-- <li><a href="#"></a></li> -->
      <ul>
      <li class="dropdown curtains"><a href="product_list.html?&product=curtains"><span>Curtains</span> <i class="bi bi-chevron-right"></i></a>
        <ul>
          <li><a class="eyelet" href="product_details.html?&product=curtains&category=cutainsblinds&productId=eyelet">Eyelet</a></li>
          <li><a class="pleated" href="product_details.html?&product=curtains&category=cutainsblinds&productId=pleated">Pleated</a></li>
          <li><a class="loop" href="product_details.html?&product=curtains&category=cutainsblinds&productId=loop">Loop</a></li>
        </ul>
      </li>
      <li class="dropdown blinds"><a href="product_list.html?&product=blinds"><span>Blinds</span> <i class="bi bi-chevron-right"></i></a>
        <ul>
          <li><a class="vertical" href="product_details.html?&product=blinds&category=cutainsblinds&productId=vertical">Vertical</a></li>
          <li><a class="roller" href="product_details.html?&product=blinds&category=cutainsblinds&productId=roller">Roller</a></li>
          <li><a class="roman" href="product_details.html?&product=blinds&category=cutainsblinds&productId=roman">Roman</a></li>
          <li><a class="woodchickblind" href="product_details.html?&product=blinds&category=cutainsblinds&productId=woodchickblind">Wood & Chick Blind</a></li>
        </ul>
      </li>
    </ul>
    </li>
    <li class="dropdown sofaaccessories"><a href="#"><span>Sofa & Accessories</span> <i class="bi bi-chevron-down"></i></a>
      <!-- <li><a href="#"></a></li> -->
    <ul>
      <li class="dropdown sofa"><a href="product_list.html?&product=sofa"><span>Sofa</span> <i class="bi bi-chevron-right"></i></a>
        <ul>
          <li><a class="chestersofa" href="product_details.html?&product=sofa&category=sofaaccessories&productId=chestersofa">Chester Sofa</a></li>
          <li><a class="sofacumbed" href="product_details.html?&product=sofa&category=sofaaccessories&productId=sofacumbed">Sofa cum Bed</a></li>
          <li><a class="lshapesofa" href="product_details.html?&product=sofa&category=sofaaccessories&productId=lshapesofa">L-Shape Sofa</a></li>
          <li><a class="customisedsofa" href="product_details.html?&product=sofa&category=sofaaccessories&productId=accessories">Customised Sofa</a></li>
        </ul>
      </li>
      <li><a class="accessories" href="#">Accessories</a></li>
    </ul>
      <!-- <li class="dropdown"><a href="#"><span>Accessories</span> <i class="bi bi-chevron-right"></i></a> -->
        <!-- <ul>
          <li><a href="#">Vertical</a></li>
          <li><a href="#">Roller</a></li>
          <li><a href="#">Roman</a></li>
          <li><a href="#">Wood & Chick Blind</a></li>
        </ul> -->
      </li>
    <!-- </li> -->
    <!--<li class="dropdown"><a class="stories" href="#"><span>Stories</span> <i class="bi bi-chevron-down"></i></a>
      <ul>
        <li><a class="about" href="about.html">About</a></li>
        <li><a class="mission_vision" href="mission_vision.html">Mission & Vision</a></li>
        <li><a class="why_us" href="why_us.html">Why Us?</a></li>
      </ul>
      </li>-->
      <li><a class="contact" href="contact.html">Contact</a></li>
   
    <!-- <li><a href="services.html">Services</a></li> -->
    <!-- <li><a href="testimonials.html">Testimonials</a></li> -->
    <!-- <li><a href="pricing.html">Pricing</a></li> -->
    <!-- <li><a href="portfolio.html">Portfolio</a></li> -->
    <!--<li><a class="blog" href="blog.html">Blog</a></li>-->
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
  `;
  document.getElementById('footer').innerHTML=`  <div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h3>Bhartiya Sleep Gallery</h3>
        <p>
        Gemstar Commercial Complex, Shop No.13,<br> 
        Raigad Military, New Link Rd, <br>
        Lokhandwala Complex, Andheri West, <br>
        Mumbai, Maharashtra 400053, India
          <br><br>
          <strong>Phone:</strong> +91 9833474083<br>
          <strong>Email:</strong> contact@bhartiyasleepgallery.com<br>
        </p>
      </div>

      <div class="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
          <!--<li><i class="bx bx-chevron-right"></i> <a href="about.html">About us</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="mission_vision.html">Mission & Vision</a></li>-->
          <li><i class="bx bx-chevron-right"></i> <a href="contact.html">Contact</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="blog.html">Blogs</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Products</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="customised.html">Customised Mattress</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="product_list.html?&product=curtains">Curtains</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="product_list.html?&product=blinds">Blinds</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="product_list.html?&product=sofa">Sofas</a></li>
        </ul>
      </div>


    </div>
  </div>
</div>

<div class="container d-md-flex py-4">

  <div class="me-md-auto text-center text-md-start">
    <div class="copyright">
      &copy; Copyright <strong><span>Bhartiya Sleep Gallery</span></strong>. All Rights Reserved
    </div>
    <!-- <div class="credits">
    
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div> -->
  </div>
  <div class="social-links text-center text-md-right pt-3 pt-md-0">
    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
  </div>
</div>`;
  for (let i = 0; i < activeClasses.length; i++) {
    document.getElementsByClassName(activeClasses[i])[0].classList.add("active")
}

}

function populateGallery(){
  var data=[

  {
    'img':'assets/img/portfolio/sleepwell_gallery_34.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  },
  
  
  {
    'img':'assets/img/portfolio/sleepwell_gallery_43.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  },
  {
    'img':'assets/img/portfolio/sleepwell_gallery_56.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  },
 
  {
    'img':'assets/img/portfolio/sleepwell_gallery_3.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  },
  {
    'img':'assets/img/portfolio/sleepwell_gallery_2.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  },
  
  {
    'img':'assets/img/portfolio/sleepwell_gallery_72.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  },
  {
    'img':'assets/img/portfolio/sleepwell_gallery_1.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  },

  {
    'img':'assets/img/portfolio/sleepwell_gallery_39.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  },
  
 
  {
    'img':'assets/img/portfolio/sleepwell_gallery_57.jpg',
    'name':'App 1',
    'details':'App',
    'link':'customised.html',
    'filter':'filter-test'
  }
]
for (const image of data) {
  document.getElementById('gallery').innerHTML+=`
          <div class="col-lg-4 col-md-6 portfolio-item filter-test">
            <img src="`+image['img']+`"class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>`+image['name']+`</h4>
              <p`+image['details']+`</p>
              <a href="`+image['img']+`" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="`+image['link']+`" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>`
}
}

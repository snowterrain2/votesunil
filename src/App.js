import React from "react";
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import Endors from './Endors';


import logo from './logo.svg';

//import './scss/style.scss';

//import './css/bootstrap.min.css';

//import './css/bootstrap.min.css';
//import './css/open-iconic-bootstrap.min.css';
//import './css/animate.css';
//import './css/owl.carousel.min.css';
//import './css/owl.theme.default.min.css';

//import './css/style.css';



function App() {
  return (
    <Router>

<Switch>
              <Route exact path='/' component={Body} />
             
              <Route path='/about' component={About} />
              <Route path='/keymessages' component={KeyMessages} />
              <Route path='/endorsements' component={Endors} />
              <Route path='/blog' component={Blog} />
              <Route path='/donate' component={Donate} />
              <Route path='/media' component={Media} />
              <Route path='/contact' component={Contact} />
          </Switch>
      <div>
     {/*  <header className="App-header">

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />

       
       
        
      </header>
      <Body/> */}
    

      </div>
    </Router>


    

    
  );
}


function Media() {
  return (
<section className="ftco-section bg-light ftco-slant ftco-slant-white" id="section-media">
   <div class="container"><div class="row">
		<div class="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
		<h2 class="ftco-uppercase">Minesh Baxi with Sunil</h2>
		</div>

		<div class="col-md-6 text-center ftco-animate embed-responsive embed-responsive-16by9 fadeInUp ftco-animated">
			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/41u1z5PRdF8"></iframe>
		</div>

		<div class="col-md-6 text-center ftco-animate embed-responsive embed-responsive-16by9 fadeInUp ftco-animated">
			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/mmKmzGMJRlI">
			</iframe>
		</div>
    			<div class="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
			<h2 class="ftco-uppercase">2019 Candidate Interview: Sunil Sivaraman for Troy City Council

				(Crystal A. Proxmire, Oct. 7, 2019)</h2></div>
			</div>
   	
<div class="row">
<div class="col-md-12 text-center ftco-animate fadeInUp ftco-animated">
				<iframe name="Framename" src="https://onyourballot.vote411.org/race-detail.do?id=19415712" width="500" height="700" frameborder="0" scrolling="yes">
 </iframe>
</div>
</div>
			
   	



</div>
  </section>
 
 

 
        
 

  );
}

function Contact() {
  return (

        <Header/>
        
       

  );
}

function Home() {
  return (

        <Header/>
        
       

  );
}


function Donate() {
  return (


    <section className="ftco-section bg-light ftco-slant ftco-slant-white" id="section-pricing">
    <div className="container">

    <div className="row">
          <div className="col-md-12 text-center ftco-animate">
            <h2 className="text-uppercase ftco-uppercase">Support Me</h2>
            <iframe src="https://secure.anedot.com/sunil-sivaraman-for-troy-city-council/donate?embed=true" width="100%" height="525"  frameBorder="0"></iframe>
          </div>
      
          <p>
        I am truly grateful for your support. Thank you so much for contributing to my campaign. Donations through this website can be accepted in any denomination up to $2,100.00 with maximum individual contribution of $1,050.00 ($2,100.00 per couple).

Additionally, when contributing, you attest that:
</p>

<ul className="navbar-nav navbar-left ml-auto">
              <li className="nav-item active"><span className="oi oi-check mr-3 text-primary"/> You are not a foreign national who lacks permanent residence in the United States;</li>
              <li className="nav-item active"><span className="oi oi-check mr-3 text-primary"/> This contribution is made from your own funds, and not those of another;</li>
              <li className="nav-item active"><span className="oi oi-check mr-3 text-primary"/> This contribution is not made from the funds of a corporation or labor organization;</li>
              <li className="nav-item active"><span className="oi oi-check mr-3 text-primary"/>  This contribution is made on a personal credit card or debit card for which you have the legal obligation to pay, and is not made either on a corporate or business entity card or on the card of another person; You are at least eighteen years old.</li>



              </ul>


Personal checks can be made payable to: "Friends of Sunilkumar Sivaraman" and can be mailed to 723 Palermo, Troy, MI 48084. Please be sure to include your correct mailing address, telephone number, email address, occupation, employer and employer address.

  

        </div>

       
        </div>
        </section>
        
       

  );
}

function END2(){
  return(

    <section className="ftco-section bg-light ftco-slant ftco-slant-white" id="section-pricing">
    <div className="container">

    <div className="row">
          <div className="col-md-12 text-center ftco-animate">
            <h2 className="text-uppercase ftco-uppercase">Endorsements</h2>
            <div className="row justify-content-center mb-5">
              <div className="col-md-7">
                <p className="lead">Sunil Sivaraman For Troy City Council</p>
              </div>
            </div>
          </div>
        </div>

    <div className="row">
    
    
      <div className="col-lg-4 col-md-12 mb-4">
    
      <h5 className="mt-0">Mayor Jeanne Stine</h5>
        <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
    
         
            <div className="modal-content">
    
       
              <div className="modal-body mb-0 p-0">
    
                <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Uwu9Sr3598g"
                    allowfullscreen></iframe>
                </div>
               
              </div>
    
        
              <div className="modal-footer justify-content-center">
                <span className="mr-4">Sunil Sivaraman for Troy city council</span>
              
    
                <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
    
              </div>
    
            </div>
     
    
          </div>
        </div>

    
        <a><img className="img-fluid z-depth-1" src="https://img.youtube.com/vi/Uwu9Sr3598g/hqdefault.jpg" alt="video"
            data-toggle="modal" data-target="#modal1"/></a>
    
      </div>

      <div className="col-lg-4 col-md-12 mb-4">
    
    <h5 className="mt-0">Wade Fleming</h5>
      <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
  
       
          <div className="modal-content">
  
     
            <div className="modal-body mb-0 p-0">
  
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VtT_Aqu5A-E"
                  allowfullscreen></iframe>
              </div>
             
            </div>
  
      
            <div className="modal-footer justify-content-center">
              <span className="mr-4">Sunil Sivaraman for Troy city council</span>
            
  
              <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
  
            </div>
  
          </div>
   
  
        </div>
      </div>

  
      <a><img className="img-fluid z-depth-1" src="https://img.youtube.com/vi/W14ZoXfutow/hqdefault.jpg" alt="video"
          data-toggle="modal" data-target="#modal1"/></a>
  
    </div>
 
 
    
 
      <div className="col-lg-4 col-md-6 mb-4">
      <h5 className="mt-0">Congressman Dave Trott</h5>
     
        <div className="modal fade" id="modal6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
    
        
            <div className="modal-content">
    
          
              <div className="modal-body mb-0 p-0">
    
                <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VtT_Aqu5A-E"
                    allowfullscreen></iframe>
                </div>
    
              </div>
    
     
              <div className="modal-footer justify-content-center">
                <span className="mr-4">Sunil Sivaraman for Troy city council</span>
              
    
                <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
    
              </div>
    
            </div>

    
          </div>
        </div>
    
    
        <a><img className="img-fluid z-depth-1" src="https://img.youtube.com/vi/VtT_Aqu5A-E/hqdefault.jpg" alt="video"
            data-toggle="modal" data-target="#modal6"/></a>
    
      </div>

    

 
      <div className="col-lg-4 col-md-6 mb-4">
      <h5 className="mt-0">Principal Gary Wood</h5>

        <div className="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
    
      
            <div className="modal-content">
    
       
              <div className="modal-body mb-0 p-0">
    
                <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/4MzSFXQvVaU"
                    allowfullscreen></iframe>
                </div>
    
              </div>
    
 
              <div className="modal-footer justify-content-center">
                <span className="mr-4">Sunil Sivaraman for Troy city council</span>
               
    
                <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
    
              </div>
    
            </div>
  
    
          </div>
        </div>
      
    
        <a><img className="img-fluid z-depth-1" src="https://img.youtube.com/vi/4MzSFXQvVaU/hqdefault.jpg" alt="video"
            data-toggle="modal" data-target="#modal4"/></a>
    
      </div>
    
    
    </div>
    <div className="row">
    <div className="col-lg-4 col-md-12 mb-4">
 
      <h5 className="mt-0">Precinct Delegate Ray Watts</h5>
        <div className="modal fade" id="modal7" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
    
         
            <div className="modal-content">
    
       
              <div className="modal-body mb-0 p-0">
    
                <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/S_XtE6RE_kM"
                    allowfullscreen></iframe>
                </div>
                <div className="modal-footer justify-content-center">
                
                </div>
              </div>
    
        
              <div className="modal-footer justify-content-center">
                <span className="mr-4">Sunil Sivaraman for Troy city council</span>
              
    
                <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
    
              </div>
    
            </div>
     
    
          </div>
        </div>

    
        <a><img className="img-fluid z-depth-1" src="https://img.youtube.com/vi/S_XtE6RE_kM/hqdefault.jpg" alt="video"
            data-toggle="modal" data-target="#modal7"/></a>
    
      </div>
    
      <div className="col-lg-4 col-md-12 mb-4">
 
 <h5 className="mt-0">Former State Rep &amp; House leader Rocky Raczkowski</h5>
   <div className="modal fade" id="modal8" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
     <div className="modal-dialog modal-lg" role="document">

    
       <div className="modal-content">

  
         <div className="modal-body mb-0 p-0">

           <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
             <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/b8I3Jke6yX8"
               allowfullscreen></iframe>
           </div>
           <div className="modal-footer justify-content-center">
           
           </div>
         </div>

   
         <div className="modal-footer justify-content-center">
           <span className="mr-4">Sunil Sivaraman for Troy city council</span>
         

           <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>

         </div>

       </div>

     </div>
   </div>


   <a><img className="img-fluid z-depth-1" src="https://img.youtube.com/vi/b8I3Jke6yX8/hqdefault.jpg" alt="video"
       data-toggle="modal" data-target="#modal8"/></a>

 </div>
    </div>


    </div>
    </section>


  );
}

function About() {
  return (
   
    <section className="ftco-section ftco-slant ftco-slant-light" id="section-about">
        <div className="container">
  
          <div className="row mb-5">
            <div className="col-md-6 text-center ftco-animate">
              {/* <h2 className="text-uppercase ftco-uppercase">About Sunil</h2> */}
              <div className="row justify-content-center mb-5">
                <div className="col-md-12">
                  <p className="lead">Sunil Sivaraman calls Troy his home and he wants to make Troy a better place starting now and moving into the future. Sunil is an IT manager at Ford Motor Company, where he has worked for 24 years. He is married with 2 children in the Troy Public school system, a dad who wants to make Troy a better place tomorrow than it is today.
                    I have been involved with our community in various capabilities like </p>
                  
                  <ul className="list-unstyled ftco-list-check text-left">
                  <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>City of Troy Traffic Committee Member</span></li>
                  <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>City of Troy Finance and Incentive Team Member</span></li>
                  <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>Troy Youth Assistance Board Member</span></li>
                    <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>Troy Historic Village Board Member (Trustee)</span></li>
                    <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>Member Friends of Troy Seniors (FOTS)</span></li>
                    <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>Troy School District Facilities Board member 2015-2016</span></li>
                </ul>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center ftco-animate">
              {/* <h2 className="text-uppercase ftco-uppercase">About Sunil</h2> */}
              <div className="col-md-12 mb-md-0 mb-5">
              <img src="images/family.jpeg" alt="Sunils family picture" className="img-fluid"/>
            </div>
            </div>
          </div>
       
  
  
         {/*  <div className="row no-gutters align-items-center ftco-animate">
            <div className="col-md-12 mb-md-0 mb-5">
              <img src="images/family.jpeg" alt="Sunils family picture" className="img-fluid"/>
            </div>
          
          </div> */}


         
        </div>
      </section>
  )
}

function Body(){


  const styles = {
    color: 'red'
  }
  return (
   <div>
    <section className="ftco-cover" id="section-home">
     
	  	<header>
	   <div className="overlay"></div>
  <video playsInline="playsInline" control='true' muted autoPlay loop>
    <source src="https://votesunil.s3.us-east-2.amazonaws.com/BGV.mp4" type="video/mp4"/>
    <source src="https://votesunil.s3.us-east-2.amazonaws.com/family.ogg" type="video/ogg"/>
    

  </video>
  
  
  
  <div className="container h-100">
    <div className="d-flex h-75 text-center align-items-center">
      <div className="w-100 text-white">
        <h1 className="display-3 text-white">Sunil Sivaraman</h1>
        <h3 className="text-white"><p className="font-weight-bold text-white">For Troy City Council</p></h3>
        <h3 className="text-white"><p className="font-weight-bold text-white">Against Overbuilding in Troy</p></h3>
        <h3 className="text-white"><p className="font-weight-bold text-white">Pledge to provide a Transparent & Efficient Government</p></h3>
       
      </div>
    </div>

    <div className="d-flex h-25 text-center align-items-center">
        <div className="w-100 text-white">
         
         
         
        </div>
      </div>
   
   
  </div>

</header>

    </section>


<section className="ftco-section ftco-slant ftco-slant-light pt-0" style={{styles}} id="section-about">
<div className="container">

  <div className="row mb-5">
    <div className="col-md-12 text-center ftco-animate">
      <h2> &quot;I am Sunil Sivaraman and want to announce my candidacy for Troy City Council.
              I am not an insider, what Troy needs right now is Change. I stand for a Clean,
              Transparent and Efficient government, moving Troy forward beyond politics. I
              want to be Your Voice, the voice of the citizens of Troy, on the Council. I will
              protect the green space in Troy. I will work to ensure fiscal discipline. I will strive
              to lower taxes. I will support our amazing Fire and Police services. I will support
              the right growth in our City. <b>I promise to be the Best City Councilman I can be.</b>&quot;</h2>
     
    </div>

   
  </div>


{/* 
  <div className="row no-gutters align-items-center ftco-animate">
    <div className="col-md-12 mb-md-0 mb-5">
      <img src="images/family.jpeg" alt="Sunils family picture" className="img-fluid"/>
    </div>
  
  </div> */}

 
</div>
</section>

</div>
  )
  
  ;
}

function KeyMessages({ match }) {
  return (
<section className="ftco-section bg-light  ftco-slant ftco-slant-white pt-1" id="section-features">
      <div className="container">
        
        <div className="row">
         

 <div className="col-md-12 text-center mb-5 ftco-animate">
 <h2 className="font-weight-bold">Open letter to Troy Residents</h2>

             <iframe id="testiframe" 
name="testiframe" title="Advertisement" src="/images/OpenLetter2.pdf" width="100%" height="800"></iframe>

             


    </div>

          <div className="col-md-12 text-center mb-5 ftco-animate">
              <h2 className="font-weight-bold">I Pledge to you..</h2>
              <div className="row justify-content-center">
                <div className="col-md-7 pt-10">
                  <p className="lead">

                     

                 
                      <ul className="list-unstyled ftco-list-check text-left">
                          <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>More support for the Fire and Police departments</span></li>
                          <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>Revitalize Economic &amp; Community Development/Beautification</span></li>
                          <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>Support Troy Schools</span></li>
                            <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>Engaging our Youth, Senior Citizens and Veterans</span></li>
                            <li className="d-flex mb-2"><span className="oi oi-check mr-3 text-primary"></span> <span>Make Troy Government Transparent</span></li>
                                </ul>

                  </p>
                </div>
              </div>
            </div>
           

          <div className="col-lg-3 col-md-6">
            <div className="media d-block mb-4 text-center ftco-media p-md-5 p-4 ftco-animate">
              <div className="ftco-icon mb-3"><span className="oi oi-dollar display-4 text-success"></span></div>
	
              <div className="media-body">
                <h5 className="mt-0">Fight against tax increase</h5>
                <p className="mb-5">Get Good Value for our hard earned Money. Taxes pay for a lot of our amenities, but we need to protect ourselves against frivolous increases of taxes. We must find innovative ways of reducing these too. 
                  This will help our retirees, families, and the common person.</p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="media d-block mb-4 text-center ftco-media p-md-5 p-4 ftco-animate">
              
              <div className="ftco-icon mb-3"><span className="oi oi-people display-4 text-info"></span></div>
              <div className="media-body">
                <h5 className="mt-0">Encourage Free Market</h5>
                <p className="mb-5">This is the building block of this wonderful country of ours. 
                  Support Growth The Right Way while communicating and listening to the Citizens of Troy.</p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="media d-block mb-4 text-center ftco-media p-md-5 p-4 ftco-animate">
              <div className="ftco-icon mb-3"><span className="oi oi-globe display-4 text-success"></span></div>
              <div className="media-body">
                <h5 className="mt-0">Protect the Green Space</h5>
                <p className="mb-5">More green space within a city�s boundaries can improve the urban living space. The environment needs to be protected including the flora and fauna.</p>
               
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-6">
            <div className="media d-block mb-4 text-center ftco-media p-md-5 p-4 ftco-animate">
              <div className="ftco-icon mb-3"><span className="oi oi-bullhorn display-4 text-danger"></span></div>
              <div className="media-body">
                <h5 className="mt-0">Be Your Voice</h5>
                <p className="mb-5">The average citizen of Troy needs to be aware of the things that are happening around them and how it impacts them. Also the views, perspectives, and concerns of the average citizen must be heard at the leadership level. That is what I will strive for as a member of the Troy City Council.</p>
               
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>


  );
}

function Blog({ match }) {
  return (

    <section className="ftco-section ftco-slant pt-1" id="section-services">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center ftco-animate">
          <h2 className="text-uppercase ftco-uppercase">Blog</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-md-7">
             </div>
          </div>
        </div>
      </div>
     
     
      <div className="row">
  {/*   <div className="col-lg-6">
      <div className="col-md-12" ftco-animate text-center>
          <figure><img src="images/fund.JPG" alt="Sunil for Troy city Council Fund raiser" className="img-fluid"/></figure>
          <div className="p-3">
   
            <p className="mb-4"></p>
           
          </div>

        </div>
        </div> */}
       {/*  <div className="col-lg-6">
      <div className="col-md-12 ftco-animate text-center">
      <h3 className="h4">Find us on facebook <span class="icon-facebook text-primary"></span> </h3>
     
      <div className="fb-page" data-href="https://www.facebook.com/Sunil4Troy/" data-tabs="timeline" data-width="" data-height="500" data-small-header="false" data-adapt-container-width="true" 
      data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Sunil4Troy/" 
      className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Sunil4Troy/">Sunil 4 Troy City Council</a></blockquote></div>
</div>
</div> */}
	  
	     <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2121567851278309&width=500&show_text=true&appId=2086272388065348&height=250" 
	  width="500" height="250" scrolling="no" 
	  frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
	  
        </div>
	  
	   <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fvideos%2F521432278587329%2F&width=500&show_text=true&appId=2086272388065348&height=453"
	  width="500" height="453" 
	  scrolling="no" frameborder="0" allowTransparency="true" 
	  allow="encrypted-media" allowFullScreen="true"></iframe>  
	  
        </div>
	
    <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
          <figure><img src="images/sunil4troy.jpeg" alt="Troy has Sunil's back" className="img-fluid"/></figure>
          <div className="p-3">
       
            <p className="mb-4"></p>
          
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fvideos%2F560881368054787%2F&width=500&show_text=true&appId=2086272388065348&height=390" 
        width="500" height="390" 
        scrolling="no" frameborder="0" allowTransparency="true" 
        allow="encrypted-media" allowFullScreen="true"></iframe>
        </div>

	   <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2084492514985843&width=500&show_text=true&appId=2086272388065348&height=525" width="500" height="525" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
  </div>



 <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
	<iframe 
src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2084466484988446&width=500&show_text=true&appId=2086272388065348&height=525" width="500" height="525" 
scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
	  </div>
	  
 <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
	<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2081285301973231&width=500&show_text=true&appId=2086272388065348&height=727" width="500" height="727" 
	  scrolling="no" 
	  frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>  
	  </div>
	  
	  
	  <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2077365162365245&width=500&show_text=true&appId=2086272388065348&height=220" width="500" 
height="220" 
scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
</div>	
<div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2065462600222168&width=500&show_text=true&appId=2086272388065348&height=200" width="500" 
height="200" 
scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
</div>	  
	<div className="col-lg-6 col-md-12 mb-4 ftco-animate">  
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D741196339657394%26id%3D100013011045707&width=500&show_text=true&appId=2086272388065348&height=225" width="500" height="225" 
	  scrolling="no" frameborder="0" 

allowTransparency="true" allow="encrypted-media"></iframe>	  
	</div>	  
	  
<div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2057319141036514&width=500&show_text=true&appId=2086272388065348&height=514" width="500" 
height="514" 
scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
</div>

<div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2047071925394569%3A0&width=500&show_text=true&appId=2086272388065348&height=590" width="500" height="590" 
 scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
</div>
<div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fposts%2F2034091706692591&width=500&show_text=true&appId=2086272388065348&height=702" width="500" height="702" 
scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
</div>
<div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100013011045707%2Fvideos%2F729022047541490%2F&width=500&show_text=true&appId=2086272388065348&height=1081" 
width="500" height="1081" scrolling="no" frameborder="0" 
allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
</div>
<div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSunil4Troy%2Fvideos%2F611253739408333%2F&show_text=true&appId=2086272388065348" width="500" height="629" 
scrolling="no" 
frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
</div>

<div className="col-lg-6 col-md-12 mb-4 ftco-animate">

<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D709007759542919%26id%3D100013011045707&width=500&show_text=true&appId=2086272388065348&height=683" width="500" height="683" 
scrolling="no" 
frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> 
</div>



<div className="col-lg-6 col-md-12 mb-4 ftco-animate">
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D722145524895809%26id%3D100013011045707&width=500&show_text=true&appId=2086272388065348&height=394" width="500" height="394" 
 
scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> 
</div>

 <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
          <figure><img src="images/kids2kids.jpeg" alt="snack with Sunil" className="img-fluid"/></figure>
          <div className="p-3">
            <h3 className="h4">Kids2Kids</h3>
            <p className="mb-4">Kids2Kids is a non profit organization that was started by Shruthi Sunilkumar, an 11th grader at Troy High School. 
?We raise funds to be able to provide basic amenities to kids. This event went very successful. We had around 200 people join us at the fundraiser. We were able to donate 62 bikes, $700, and 20 helmets. Thank you to everyone who came to the Kite Festival making it a grand success! </p>
           
          </div>
        </div> 


{/* <div className="row">
  <br></br>
  </div> */}
        {/* <div className="row"> */}

        <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
          <figure><img src="images/img_2.jpeg" alt="Troy Welcomes Daisy Knight Dog Park" className="img-fluid"/></figure>
          <div className="p-3">
            <h3 className="h4">Troy Welcomes Daisy Knight Dog Park</h3>
            <p className="mb-4">A big thank you to all who helped make the first Dog Park in Troy a reality. 
              A true dream for every dog lover. Hats off to the Knight family, City of Troy Council, Administration, Stone Crest living and Zion Church.
              Special thanks to Zion Church for hosting the Pet</p>
           
          </div>
        </div>
      

      
        <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
          <figure><img src="images/sunil.jpeg" alt="snack with Sunil" className="img-fluid"/></figure>
          <div className="p-3">
            <h3 className="h4">snack with Sunil .. get to know your candidate</h3>
            <p className="mb-4"></p>
          
          </div>
        </div>

        <div className="col-lg-6 col-md-12 mb-4 ftco-animate">
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D727124974397864%26id%3D100013011045707&width=500&show_text=true&appId=2086272388065348&height=585" width="500" height="585" 
         scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> 
        </div>
     
        
{/* 
      </div> */}

</div>
    </div>
   
      
      
  </section>
        

  );
}

function Endorsements({ match }) {
  return (

    <section className="ftco-section bg-light ftco-slant ftco-slant-white" id="section-pricing">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center ftco-animate">
            <h2 className="text-uppercase ftco-uppercase">Endorsements</h2>
            <div className="row justify-content-center mb-5">
              <div className="col-md-7">
                <p className="lead">Sunil Sivaraman For Troy City Council</p>
              </div>
            </div>
          </div>
        </div>
    
        <div className="row">
          <div className="col-md-12">
            <div className="owl-carousel ftco-owl">
              
                <div className="item ftco-animate">
                    <div className="media d-block text-left ftco-media p-md-2 p-1">
                      <div className="ftco-icon mb-3"></div>
                      <div className="media-body">
                          <h5 className="mt-0">Mayor Jeanne Stine</h5>
                        
                          <div className="embed-responsive embed-responsive-4by3">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vi/xW5ONjDgKK0?rel=0" allowFullScreen></iframe>
</div>
                                     </div>
                    </div>
                  </div>

                  <div className="item ftco-animate">
                <div className="media d-block text-left ftco-media p-md-2 p-1">
                 
                  <div className="media-body">
                    <h5 className="mt-0"> Former County Commissioner and Troy City Council member Wade Fleming</h5>

                    <div className="embed-responsive embed-responsive-4by3">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vi/W14ZoXfutow?rel=0" allowFullScreen></iframe>
</div>
                         </div>
                </div>
              </div>

              <div className="item ftco-animate">
                <div className="media d-block text-left ftco-media p-md-2 p-1">
                 
                  <div className="media-body">
                    <h5 className="mt-0">Congressman Dave Trott</h5>

                    <div className="embed-responsive embed-responsive-4by3">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vi/QRA7z1jCIk8?rel=0" allowFullScreen></iframe>
</div>
                         </div>
                </div>
              </div>

              <div className="item ftco-animate">
                <div className="media d-block text-left ftco-media p-md-2 p-1">
                  <div className="ftco-icon mb-3"></div>
                  <div className="media-body">
                  
                    <h5 className="mt-0">Principal Gary Wood</h5>
                  
                    <div className="embed-responsive embed-responsive-4by3">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/MKhHq-mwBco?rel=0" allowFullScreen></iframe>
</div>

                  </div>
                </div>
              </div>

              <div className="item ftco-animate">
                <div className="media d-block text-left ftco-media p-md-2 p-1">
                  <div className="ftco-icon mb-3"></div>
                  <div className="media-body">
                    <h5 className="mt-0">Precinct Delegate Ray Watts</h5>
                    
                    <div className="embed-responsive embed-responsive-4by3">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/GEGjzZ86Dow?rel=0" allowFullScreen></iframe>
</div> 
                 
                  </div>
                </div>
              </div>

              <div className="item ftco-animate">
                <div className="media d-block text-left ftco-media p-md-2 p-1">
                  <div className="ftco-icon mb-3"></div>
                  <div className="media-body">
                      <h5 className="mt-0">Former State Rep &amp; House leader Rocky Raczkowski</h5>
                    
                      <div className="embed-responsive embed-responsive-4by3">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6VMhRfHibuw?rel=0" allowFullScreen></iframe>
</div>         
                                
                                 </div>


                </div>
              </div>
             

            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}



function Header() {
  return (
   ''
  );
}




export default App;




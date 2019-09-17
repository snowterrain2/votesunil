import React from "react";
import * as ConstantsY from './yjson';



class Endors extends React.Component  {

  constructor() {
    super();
    this.state={};
   
  }


  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./endorsscript.js";
    script.async = true;

    document.body.appendChild(script);
}

  
    render() {

          

    var arr = [];
    Object.keys(ConstantsY.youtubeEndorsements).forEach(function(key) {
      arr.push(ConstantsY.youtubeEndorsements[key]);
    });
      
   
      const { res, invalid } = this.state;
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

        {arr.map((item,index) => 
        <MyAppChild label={item.label} value={item.value} id={'modal'+index} target={'#modal'+index} url={'https://www.youtube.com/embed/'+item.value}
          image={'https://img.youtube.com/vi/'+item.value+'/hqdefault.jpg'} />
          )}




</div>
        </div>
        </section>

      

  
      
  
      
    );
  }
}

class MyAppChild extends React.Component {
    render() {
   //  return <li>{this.props.label + " - " + this.props.url+ " - " + this.props.id}</li>;
 return(

<div className="col-lg-4 col-md-12 mb-4">
    
<h5 className="mt-0">{this.props.label}</h5>
  <div className="modal fade" id={this.props.id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">

   
      <div className="modal-content">

 
        <div className="modal-body mb-0 p-0">

          <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe className="embed-responsive-item" src={this.props.url}
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


  <a><img className="img-fluid z-depth-1" src={this.props.image} alt="video"
      data-toggle="modal" data-target={this.props.target}/></a>

</div>
     
 
); 

      
    }
  }


  export default Endors;
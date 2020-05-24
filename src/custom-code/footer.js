import React from 'react';

const Footer = function() {
    return(
        <footer className="fixed-bottom bg-dark w-100">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-5 col-lg-8 text-left">
                        <a className="text-center text-white" href="#">Social Midia</a>
                    </div>

                    <div className="row col-7 col-lg-4">

                        <div className="col-12 col-lg-4 d-flex justify-content-center">
                            <a className="m-1 text-white" href="#">Instagram</a>
                        </div>

                        <div className="col-12 col-lg-4 d-flex justify-content-center">
                            <a className="m-1 text-white" href="#">Linkedin</a>
                        </div>

                        <div className="col-12 col-lg-4 d-flex justify-content-center">
                            <a className="m-1 text-white" href="#">GitHub</a>
                        </div>

                    </div>

                </div>
            </div>  
        </footer>
    )
}

export default Footer;
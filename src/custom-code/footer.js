import React from 'react';

const Footer = function() {
    return(
        <footer class="fixed-bottom bg-dark w-100">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-6 col-lg-8 text-left">
                        <a class="text-left text-white mx-3" href="#">Social Midia</a>
                    </div>

                    <div class="row">

                        <div class="col-12 col-lg-4">
                            <a class="m-1 text-white" href="#">Instagram</a>
                        </div>

                        <div class="col-12 col-lg-4">
                            <a class="m-1 text-white" href="#">Linkedin</a>
                        </div>

                        <div class="col-12 col-lg-4">
                            <a class="m-1 text-white" href="#">GitHub</a>
                        </div>

                    </div>

                </div>
            </div>  
        </footer>
    )
}

export default Footer;
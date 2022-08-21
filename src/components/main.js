
import "./style.css";
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';


const PriceCart=()=>{
    return(
        <>
        <section className="pricing py-5">
            <div className="container">
                <div className="row">

                <Bounce left>

                   <div className="col-lg-4">
                     <div className="card mb-5 mb-lg-0">
                        <div className="card-body">
                        <Roll left>
                            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                            </Roll>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                            </ul>
                            <div class="d-grid">
                            <aa href="#" className="btn btn-primary text-uppercase">Button</aa>
                            </div>
                        </div>

                      </div>

                    </div>
                    </Bounce>

                    <Bounce top>
                    <div className="col-lg-4">
                     <div className="card mb-5 mb-lg-0">
                        <div className="card-body">
                        <Roll top>
                            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                            </Roll>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>5 User</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                            <li ><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
                            <li ><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                            </ul>
                            <div class="d-grid">
                            <aa href="#" className="btn btn-primary text-uppercase">Button</aa>
                            </div>
                        </div>

                      </div>

                    </div>
                     </Bounce>

                     <Bounce right>
                     <div className="col-lg-4">
                     <div className="card mb-5 mb-lg-0">
                        <div className="card-body">
                            <Roll right>
                            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                            </Roll>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited User</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                            <li ><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong>Free Subdomain</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
                            </ul>
                            <div class="d-grid">
                            <aa href="#" className="btn btn-primary text-uppercase">Button</aa>
                            </div>
                        </div>

                      </div>

                    </div>
                    </Bounce>
                </div>
            </div>
        </section>






        </>
    )
}
export default PriceCart;

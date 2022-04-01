import { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.selectcategory = this.selectcategory.bind(this);
    }

    selectcategory(id, name) {
        window.localStorage.setItem("category_id", id);
        window.localStorage.setItem("category_name", name);
        this.props.history.push('/product-category');
    }

    render(){
        return (
        <div className="footer">
            <div  >
                <table width="90%" style={{marginLeft: "16px"}}>
                    <br></br>
                    <tr>
                    <td>
                    <tr>
                        <a href="/aboutus" className="nav-link">
                            <h6 className="nameColor13">About Us</h6>
                        </a>
                    </tr>
                    <tr>
                        <a href="/contactus" className="nav-link">
                            <h6 className="nameColor13">Contact Us</h6>
                        </a>
                    </tr>
                    <tr>
                        <a href="/termsnconditions" className="nav-link">
                            <h6 className="nameColor13">Terms & Conditions</h6>
                        </a>
                    </tr>

                    <tr>
                        <a href="/privacypolicy" className="nav-link">
                            <h6 className="nameColor13">Privacy Policy</h6>
                        </a>
                    </tr>

                    <tr>
                        <a href="/faqs" className="nav-link">
                            <h6 className="nameColor13">FAQs</h6>
                        </a>
                    </tr>

                    <tr>
                        <img src={logo} class="img-fluid" alt="Logo" width="150px" height="50px" />
                    </tr>
                </td>

                <td className="float-end">
                    <div className="nameColor13">
                        {' '}
                        <h2>Contact Us</h2> WhatsApp us :{' '}
                        <span
                        style={{ display: 'inline-block;', marginBottom: '1rem;' }}>
                        <a>
                           8668259342 & 9673830095
                        </a>
                        </span>
                        <br />
                        <br /> <h2>Download App</h2> <br />
                        <a
                        style={{ marginRight: "16px" }}>
                        <img
                            src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                            alt="Download AnyKart App for Android from Play Store"
                        />
                        </a>
                        <a><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                            alt="Download AnyKart App for iOs from App Store"/></a>
                    </div>{' '}
                </td>
                </tr>
                </table>
                
                <div class="copyright">
                    <div>© By Rohit and Sagar 2022, AnyKart CDAC Project, INDIA</div>
                </div>
            </div>
            
        </div>
        )
    }
}
import React, { Component } from 'react'
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import Navigation from "../../components/Navigation";
import Swal from 'sweetalert2';
import { send } from 'emailjs-com';
class PaymentScreen extends Component {

    constructor(props) {
        super(props)
        this.state ={
            paymentInfo: '',
          message: '',
          errors: {
            cardNumber : '',
            CVV : '',
            expiryDate: '',
            password: '',
          }
      }
        this.payment = this.payment.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.addOrderDetail = this.addOrderDetail.bind(this);
        this.paymentDetails = this.paymentDetails.bind(this);
        this.selectCredit = this.selectCredit.bind(this); 
        this.selectDebit = this.selectDebit.bind(this);
        this.addOrderIdtoOrderAddress = this.addOrderIdtoOrderAddress.bind(this);
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    addOrder(){
        ApiCustomerService.addorders(window.localStorage.getItem("total_price"), window.localStorage.getItem("user_id"))
    .then(res => {
        JSON.stringify(window.localStorage.setItem("orderId", res.data.result))
        this.addOrderDetail();
    });
    
    }

    addOrderDetail(){
        ApiCustomerService.addDetails(window.localStorage.getItem("user_id"), JSON.parse(window.localStorage.getItem("orderId")))
        .then(res => {
            JSON.stringify(window.localStorage.setItem("deliveryBoyId", res.data.result))
            this.paymentDetails();
    });
   
    }
   
    paymentDetails(){
        this.state.payment = {paymentType: this.state.paymentInfo, 
                            deliveryBoyId: JSON.parse(window.localStorage.getItem("deliveryBoyId")), 
                            orderId : JSON.parse(window.localStorage.getItem("orderId"))};
        ApiCustomerService.addpaymentDetails(this.state.payment);
        this.addOrderIdtoOrderAddress();
    }

    addOrderIdtoOrderAddress(){
        ApiCustomerService.addOrderIdtoOrderAddress(window.localStorage.getItem("address_id"), window.localStorage.getItem("orderId"))
    }

    

    selectCredit() {
        this.state.paymentInfo= "CREDIT";
    }

    selectDebit() {
        this.state.paymentInfo= "DEBIT";
    }

    
    onMail() {


        let msg = 'Your Order has been placed. :)';

        let tosend = {
            from_name: 'AnyKart',
            to_name: localStorage.getItem('user_fname'),
            message: msg,
            reply_to: localStorage.getItem('user_email'),
        }
        send(
            'service_e6zmpmx',
            'template_7xlpzj1',
            tosend,
            '9AG5ifX8UgKlUDe_e'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mail Send Sucessfully!!')
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

    }
    payment() {
        this.addOrder();
       // alert('Payment Done')
       this.onMail();
       Swal.fire({
        icon: 'success',
        title: 'Email Done',
        showConfirmButton: true,
        confirmButtonText: 'OKAY',
      })
        Swal.fire({
            icon: 'success',
            title: 'Payment Done',
            showConfirmButton: true,
            confirmButtonText: 'OKAY',
          })
        window.localStorage.removeItem("cart_size");
        window.localStorage.removeItem("deliveryBoyId");
        window.localStorage.removeItem("orderId");

        this.props.history.push('/home');
    }

    render () {
        return (
            
            <div>
                <Navigation/>
                <div className="payment">
               <div>
                <div className="float-center">
                    <h5>Total Price : {window.localStorage.getItem("total_price")}</h5>
                    <br/>
                    <div className="position1">
                        
                             {/* <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                             Payment Type
                             </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" onClick={this.selectCredit}>Credit</a>
                                    <form>
                                        
                                    </form>
                                    <a className="dropdown-item" onClick={this.selectDebit}>Debit</a>
                                </div>     */}
                                <div className="form-group">
                                    <label>Payment Type</label>
                                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChange}>
                                        <option onClick={this.selectCredit}>Credit</option>
                                        <option onClick={this.selectCredit}>Debit</option>
                                    </select>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label>Card Number</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Card Number" name="cardNumber" required='true' />
                                    </div>
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter CVV" name="cvv" required='true' />
                                    </div>
                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Expiry Date" name="expiryDate" required='true' />
                                    </div>
                                </form>
                         </div>     
                     
                     <br/>  

                    <button className="btn4 btn-primary" style={{width:'150px'}} onClick={() => this.payment()}>Payment</button>
                </div>
                </div>
            </div>
            </div>
    
        );
    }
}

export default PaymentScreen
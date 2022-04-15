import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import Swal from 'sweetalert2';
class DeliveryBoyListScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          boys:[],
          message:'No Delivery Boy Available'
      }
        this.getDeliveryBoyList = this.getDeliveryBoyList.bind(this);
        this.addDeliveryBoy = this.addDeliveryBoy.bind(this);
    }
    showProfile(){
        this.props.history.push('/myaccount/profile');
    }
    editProfile(){
        this.props.history.push('/myaccount/editprofile');
    }
    changePassword(){
        this.props.history.push('/myaccount/change-password');
    }
    showPendingOrders(){
        this.props.history.push('/pendingorderforadmin');
    }
    showdeliveredOrders(){
        this.props.history.push('/deliveredorderforadmin');
    }
    showSupplier(){
        this.props.history.push('/showsupplier');
    }
    showDeliveryBoy(){
        this.props.history.push('/showdeliveryboy');
    }
    logout(){
        this.props.history.push('/logout');
    }
    
    componentDidMount() {
      this.getDeliveryBoyList();
    }

    getDeliveryBoyList() {
        ApiCustomerService.fetchDeliveryBoyList()
        .then((res) => {
            this.setState({boys: res.data.result})
        });
    }

    addDeliveryBoy() {
        this.props.history.push('/adddeliveryboy');
    }
    
    deleteDelBoy(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                icon : 'success',
                title : 'Deleted!',
                text : 'Your file has been deleted.',
                showConfirmButton: true,
                confirmButtonText: 'OKAY',
              })
              ApiCustomerService.deleteDelBoy(id)
              window.location.reload()
            }
            else{
                Swal.fire({
                    icon : 'error',
                    title : 'Cancelled',
                    text : 'Your file is safe',
                    showConfirmButton: true,
                    confirmButtonText: 'OKAY',
                })
            }
          });
       
    }


    render() {
    return (
       <div>
           <Navigation/>
            <div className="container">
            <div className="main1">
                <td><button className="btn4 btn-danger" onClick={() => this.showPendingOrders()} >Pending Orders</button></td>
                <td><button className="btn4 btn-success" onClick={() => this.showdeliveredOrders()}>Delivered Orders</button></td>
                <td><button className="btn4 btn-danger" onClick={() => this.showSupplier()}>Show Supplier</button></td>
                <td><button className="btn4 btn-success" onClick={() => this.showDeliveryBoy()}>Show Delivery Boy</button></td>
            </div>
        <h2 className="text-center">Delivery Boy List</h2>
        <table className="table">
            <thead class="table-dark">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Delete</th>
                </tr>
            </thead>
                <div className="container"><h5 className="nameColor1">{this.state.boys.length === 0 && this.state.message}</h5></div>
            <tbody>
                {this.state.boys.map(
                        boy =>
                        <tr key={boy.id}>
                                <td>{boy.firstName}</td>
                                <td>{boy.lastName}</td>
                                <td>{boy.email}</td>
                                <td >{boy.phone}</td>
                                <td><button className="btn btn-danger" onClick={() => this.deleteDelBoy(boy.id)}>Delete</button></td>
                            </tr>
                    )
                }
            </tbody>  
             
        </table>
        <button className="btn4 btn-success" onClick={() => this.addDeliveryBoy()}>Add Delivery Boy</button>     
    </div>
       </div>
    );
    }
}
export default DeliveryBoyListScreen
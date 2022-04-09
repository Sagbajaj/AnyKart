import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import Swal from 'sweetalert2';

class SupplierListScreen extends Component{

    constructor(props) {
        console.log("SupplierListScreen constructor");
        super(props)
        this.state = {
          suppliers:[],
          message:'No Supplier Available'
      }
        this.getSupplierList = this.getSupplierList.bind(this);
        this.addSupplier = this.addSupplier.bind(this);
    }
    
    componentDidMount() {
      this.getSupplierList();
    }

    getSupplierList() {
        ApiCustomerService.fetchSupplierList()
        .then((res) => {
            console.log("Rohit");
            console.log(res.data);
            this.setState({suppliers: res.data.result})
        });
    }

    addSupplier() {
        this.props.history.push('/addSupplier');
    }

    deleteSupplier(id){
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
              ApiCustomerService.deleteSupplier(id)
            }
          })
        
        .then((res) => {
           window.location.reload();
        });
    }

    render() {
    return (
       <div>
           <Navigation/>
            <div className="container">
        <h2 className="text-center">Supplier List</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Products</th>
                    <th>Check Available Products</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <div className="container"><h5 className="nameColor1">{this.state.suppliers.length === 0 && this.state.message}</h5></div>
                {this.state.suppliers.map(
                        supplier =>
                        <tr key={supplier.id}>
                                <td>{supplier.firstName}</td>
                                <td>{supplier.lastName}</td>
                                <td>{supplier.email}</td>
                                <td >{supplier.phone}</td>
                                <td><Link to={"/supplier/showproductsbysupplier/"+supplier.id} className="btn btn-success">Check Products</Link></td>
                                <td><Link to={"/addproductfromsupplier/"+supplier.id} className="btn btn-success">Check Available Products</Link></td>
                                <td><Link to={"/supplieraddress/"+supplier.id} className="btn btn-success">Address</Link></td>
                                <td><button className="btn btn-danger" onClick={() => this.deleteSupplier(supplier.id)}>Delete</button></td>
                            </tr>
                    )
                }
            </tbody>  
            <br></br>
            <button className="btn4 btn-success" onClick={() => this.addSupplier()}>Add Supplier</button>       
        </table>
    </div>
    
       </div>
    );
    }
}
export default SupplierListScreen
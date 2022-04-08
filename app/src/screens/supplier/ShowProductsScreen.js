import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"
import ApiSupplierService from "../../services/supplier/ApiSupplierService";
import Swal from "sweetalert2";
export default class ShowProductsScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            products: [],
            categoryName:''
        };
        this.deleteProduct = this.deleteProduct.bind(this);
    }
    showProfile(){
        this.props.history.push('/Supplier/myaccount/profile');
    }
    
    editProfile(){
        this.props.history.push('/myaccount/editprofile');
    }
    changePassword(){
        this.props.history.push('/myaccount/change-password');
    }
    showOrderHistory(){
        this.props.history.push('/myaccount/orderhistory');
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
    productDetails(){
        this.props.history.push('/supplier/showproducts');
    }
    addProduct(){
        this.props.history.push('/addproduct');
    }
    componentDidMount() {
        ApiSupplierService.fetchProductsBySupplierId(window.localStorage.getItem("user_id"))//Hard Coded Make Sure if the category id and supplier id is same
        .then((res) => {
            this.setState({products: res.data.result})
        });

        ApiSupplierService.fetchProductCategoryName(window.localStorage.getItem("user_id"))//Hard Coded Make Sure if the category id and supplier id is same
        .then((res) => {
            this.setState({categoryName: res.data.result})
        });
    }

    deleteProduct(productId) {
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
              ApiSupplierService.deleteProduct(productId)
            }
          })
        
        .then((res) => {
            window.location.reload();       
        });
       
    }

    render(){
        return (
            <div>
                <Navigation />
                <div className="container">
                <div className="main4">
            <table>
                <td><button className="btn4 btn-success" onClick={() => this.showProfile()}>Profile</button></td>
                 <td><button className="btn4 btn-success" onClick={() => this.addProduct()}>Add Product</button></td>
                <td><button className="btn4 btn-danger" onClick={() => this.productDetails()}>Product List</button></td>
                <td><button className="btn4 btn-danger" onClick={() => this.logout()}>Logout</button></td>
            </table>
        </div>
                <table class="table table-striped" >
                    <thead>
                        <tr>
                        <th scope="col" width="10%">Product id</th>
                        <th scope="col" width="20%">Product Name</th>
                        <th scope="col" width="20%">Category</th>
                        <th scope="col" width="10%">Rating</th>
                        <th scope="col" width="10%">Update Product</th>
                        <th scope="col" width="9%">Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products === null  ?
                            <tr align="center">
                                <td colSpan="6">Products Not Available.</td>
                            </tr> :
                            this.state.products !== null && this.state.products.map((product) => (
                                <tr >
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{this.state.categoryName}</td>
                                    <td>{product.rating}</td>
                                    <td><Link to={"/supplier/updateproduct/"+product.id} className="btn4 btn-success">Update Product</Link></td>
                                    <td><button className="btn4 btn-danger" onClick={() => this.deleteProduct(product.id)}>Delete Product</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    
                </table>
                </div>
            </div>
        );
    }
}

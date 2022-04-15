import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"
import ApiSupplierService from "../../services/supplier/ApiSupplierService";
import Swal from "sweetalert2";
export default class ShowProductsBySupplierScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            products: [],
            categoryName:''
        };
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        ApiSupplierService.fetchProductsBySupplierId(this.props.match.params.id)
        .then((res) => {
            this.setState({products: res.data.result})
        });

        ApiSupplierService.fetchProductCategoryName(this.props.match.params.id)
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
            if(result.isConfirmed) {
              Swal.fire({
                icon : 'success',
                title : 'Deleted!',
                text : 'Your file has been deleted.',
                showConfirmButton: true,
                confirmButtonText: 'OKAY',
              })
              ApiSupplierService.deleteProduct(productId)
              window.location.reload();
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
          })
    }

    render(){
        return (
            <div>
                <Navigation />
                <div className="container">
                <table class="table table-striped" >
                    <thead>
                        <tr>
                        <th scope="col" width="10%">Product id</th>
                        <th scope="col" width="20%">Product Name</th>
                        <th scope="col" width="20%">Category</th>
                        <th scope="col" width="10%">Rating</th>
                        <th scope="col" width="10%">Quantity</th>
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
                                    <td>{product.qty}</td>
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

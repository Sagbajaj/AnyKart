import "../../App.css"
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import logo from './banner.png';
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import Swal from "sweetalert2";
class HomeScreen extends Component {

    constructor(props) {
        super(props)
        console.log("HomeScreen constructor");
        this.state = {
            category:[],
            products: [],
            message:"",
        }
        this.selectcategory = this.selectcategory.bind(this);
        this.reloadCategoryList = this.reloadCategoryList.bind(this);
        this.reloadProductsList = this.reloadProductsList.bind(this);
        this.addProductToCart = this.addProductToCart.bind(this);
        this.productDetails = this.productDetails.bind(this);
    }

    componentDidMount() {
        let size = JSON.parse(window.localStorage.getItem("cart_size"))
        if(size === null)
            JSON.stringify(window.localStorage.setItem("cart_size", 0) );
        if(size !== null)
        JSON.stringify(window.localStorage.setItem("cart_size", size) );
        let uId = JSON.parse(window.localStorage.getItem("user_id"))
        if(uId === null)
            JSON.stringify(window.localStorage.setItem("user_id", 9999));
        if(uId !== null)
        JSON.stringify(window.localStorage.setItem("user_id", uId));
        this.reloadCategoryList();
        this.reloadProductsList();
    }

    reloadCategoryList() {
        ApiCustomerService.fetchAllCategory()
        .then((res) => {
            this.setState({category : res.data.result})
        });
    }

    reloadProductsList() {
        ApiCustomerService.fetchProductsForHomePage()
        .then((res) => {
            window.localStorage.setItem("msg", res.data.message)
            this.setState({products : res.data.result})
        });
    }


    selectcategory(id, name) {
        window.localStorage.setItem("category_id", id);
        window.localStorage.setItem("category_name", name);
        this.props.history.push('/product-category');
    }

    addProductToCart(product) {
        let productCartId = {userId: JSON.parse(window.localStorage.getItem("user_id")), 
            productId: product.id};
        ApiCustomerService.addProductToCart(productCartId)
        .then((res) => {
            this.setState({message: res.data.result})
        });
        //alert("!!! Items Added to Cart !!!");
        Swal.fire({
            icon: 'success',
            title: '!!! Items Added to Cart !!!',
            showConfirmButton: true,
            confirmButtonText: 'OKAY',
          })
        JSON.stringify(window.localStorage.setItem("cart_size", JSON.parse(window.localStorage.getItem("cart_size")) + 1) );      
        window.localStorage.setItem("addressStatus", false)
        this.props.history.push('/home');       
    }

    productDetails(product) {
        window.localStorage.setItem("product_id", product.id);
        this.props.history.push('/product-details');
    }


    render() {
        return (
            <div>
                <Navigation/>
                <br></br>
    
                <div>
                    <table>
                        <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel" >
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>
    
                               <div className="carousel-inner" >
                                    <div className="carousel-item active" data-bs-interval="2000">
                                    <Link to="/home">
                                    <img src="https://cdn.discordapp.com/attachments/920244765990207533/943961131939160094/D35259883_IN_PC-Laptops-December-BAU-Creatives-December_1500x300.jpg" className="d-block w-100 " alt="image1" />
                                    </Link>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="1000">
                                    <img src="https://cdn.discordapp.com/attachments/932171059178913862/943970889018519592/banmob.jpg" className="d-block w-100 " alt="image2"/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="1000">
                                    <img src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/15thFlip/AF/L1headers/SS22-PC-Header3000x770._CB628701441_.gif" className="d-block w-100 " alt="image3" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="1000">
                                    <img src="https://cdn.discordapp.com/attachments/932171059178913862/943963470708220055/1242x450_HPSP.jpg" className="d-block w-100 " alt="image4" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="1000">
                                    
                                        <img src="https://cdn.discordapp.com/attachments/932171059178913862/943960308173643806/banner.jpg"  className="d-block w-100 " alt="image5" />
                                    
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                </div>
                    </table>               
                </div>
                <br>
                </br>
                <img src="https://cdn.discordapp.com/attachments/932171059178913862/943977634583412746/fixban.jpg" width="100%"></img>
                <div className="container " style={{width: "90%"}}>
                        <div class="row">
                            <div className="col-md-5"><hr /></div>
                            <div className="col-md-2"><h4>Categories</h4></div>
                            <div className="col-md-5"><hr /></div>
                        </div>
                </div>
 

                <div className="container">
                    <div className="row row-center">
                    {this.state.category.map(cat => 
                        <div className="product col-md-3" key={cat.id}>
                            <div className="title"> 
                            <Link to="/product-category">
                            <a className="navbar-brand" name="Category" onClick={() => { this.selectcategory(cat.id, cat.categoryName) }}>
                            <img src={'/images/'+cat.categoryName+'.jpg'} className="d-block w-100 " alt="image" height="200px" width="200px" />
                            </a>
                            </Link> 
                                
                                <a className="nav-link" onClick={() => { this.selectcategory(cat.id, cat.categoryName) }}><h5 className="nameColor">{cat.categoryName}</h5></a>                               
                            </div>
                        </div>
                        )}         
                    </div>
                </div>

                <div className="container " style={{width: "90%"}}>
                        <div class="row">
                            <div className="col-md-5"><hr /></div>
                            <div className="col-md-2"><h4>Top Products</h4></div>
                            <div className="col-md-5"><hr /></div>
                        </div>
                </div>

                <div className="container">
                    <div className="row row-center">
                    {this.state.products.map(product => 
                        <div className="product col-md-3" key={product.id}>
                            <div className="title"> 
                                <img src={'/images/'+product.productName+'.jpg'} className="d-block w-100 " alt="image" height="150px" width="50px" />
                                <a className="nav-link" onClick={() => { this.productDetails(product) }}><h5 className="nameColor">{product.productName}</h5></a>
                                <h5 className="nameColor">Rs. {product.finalPrice}</h5>
                                <h5 className="nameColor">Rs. <strike>{product.price}</strike><span className="nameColor1">&nbsp; {product.discount}% off</span></h5>                                
                                <h5 className="nameColor">{product.grams}gms</h5>
                            </div>
                            <button
                            onClick={() => {
                            this.addProductToCart(product)
                            }}
                            className="btn btn-sm btn-success btn-add-to-cart">
                            Add To Cart
                        </button>
                        </div>
                        )}         
                    </div>
                </div>
            </div>
        )
    }
   
  }


export default HomeScreen
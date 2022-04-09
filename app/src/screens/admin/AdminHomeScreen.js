import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import React, { Component } from 'react'
import ApiCustomerService from '../../services/customer/ApiCustomerService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar,BarChart } from 'recharts';

class AdminHomeScreen extends Component {
    constructor(props) {
        super(props)
        
        this.showProfile = this.showProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.showPendingOrders = this.showPendingOrders.bind(this);
        this.showdeliveredOrders = this.showdeliveredOrders.bind(this);
        this.showSupplier = this.showSupplier.bind(this);
        this.showDeliveryBoy = this.showDeliveryBoy.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        this.getcountforadmin();
      }

      getcountforadmin = () => {
        ApiCustomerService.getcountforadmin()
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);

        return response;
      })
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            countlist: response.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

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

  
    
   render(){
    const { error, isLoaded, countlist, data, handleAdd, flag } = this.state;
    let mydata = [
        {
          name: "Supplier",
          Wholesaler: countlist[0],
        },
        {
          name: "Customer",
          Retailer: countlist[1],
        },
      ];
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        if (flag === true) {
          return (
            <div className="container-fluid ps-md-0">
              <div className="row g-0">
                <div className=" col-md-12 col-lg-12">
                  <div className="col-md-12 col-lg-12">
                    <div className="login d-flex align-items-right py-5">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-9 col-lg-11 mx-auto">
                            <table className="table table-sm table-dark text-center "></table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        } else {
    return (
        
        <div>
            <Navigation/>
           <div className="main2">
           <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                  width={500}
                  height={300}
                  data={mydata}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  {/* <YAxis dataKey="total" /> */}
                  <YAxis />
                  {/* <Tooltip /> */}
                  <Legend />
                  <Bar
                    dataKey="Wholesaler"
                    fill="lightslategrey"
                    maxBarSize={200}
                    label
                  />
                  <Bar
                    dataKey="Retailer"
                    fill="crimson "
                    maxBarSize={200}
                    label
                  />
                  {/* <Bar dataKey="fees" fill="#82ca9d" /> */}
                </BarChart>
              </ResponsiveContainer>
</div>
            <div className="main1">
            <table>
                {/* <td><button className="btn4 btn-success" onClick={() => this.showProfile()}>Profile</button></td>
                <td><button className="btn4 btn-danger" onClick={() => this.editProfile()}>Edit Profile</button></td>
                <td><button className="btn4 btn-success" onClick={() => this.changePassword()}>Change Password</button></td> */}
                <td><button className="btn4 btn-danger" onClick={() => this.showPendingOrders()}>Pending Orders</button></td>
                <td><button className="btn4 btn-success" onClick={() => this.showdeliveredOrders()}>Delivered Orders</button></td>
                <td><button className="btn4 btn-danger" onClick={() => this.showSupplier()}>Show Supplier</button></td>
                <td><button className="btn4 btn-success" onClick={() => this.showDeliveryBoy()}>Show Delivery Boy</button></td>
           {/*     <td><button className="btn4 btn-danger" onClick={() => this.logout()}>Logout</button></td> */}
            </table>
        </div>
        </div>
            
    );
    
   }
   
}
   }
}
export default AdminHomeScreen
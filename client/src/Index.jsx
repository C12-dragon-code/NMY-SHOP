import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Product from "./components/product.jsx";
import Signup from "./components/signUp.jsx";
import Signin from "./components/signIn.jsx";
import NavBar from "./navbar/navBar.jsx";
import Pro from "./components/pro.jsx";
import Admin from "./adminside/index.jsx";
import Prodetail from "./components/details.jsx";
import Navsignup from "./navbar/navsignup.jsx";
import Navsignin from "./navbar/navsignin.jsx";
import Navbarprod from './navbar/navbarprod.jsx';
import Userprod from "./userside/product.jsx";
import Userdetails from "./userside/productdetails.jsx";
import ShowOrders from './userside/showOrders.jsx'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      view: "details",
      product:null,
    };
    this.changeView=this.changeView.bind(this)
  }
  componentDidMount() {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "admin") {
      this.setState({ view: "pro" });
    } else if (localStorage.getItem("token") === "admin"){
      this.setState({ view: "admin" });
    }
    this.fetchData();
  }

  fetchData() {
    axios.get("/api/NMYShop/products").then((res) => {
      this.setState({ data: res.data });
    });
  }

  changeView(view,product) {
    this.setState({
      view: view,
      product: product,
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "details") {
      return <div><NavBar changeView={(data) => this.changeView(data)} /> <Product data={this.state.data} changeView={(view,product) => this.changeView(view,product) } /></div>;
    }
    if (view === "signup") {
      return <div> <Navsignup changeView={(data) => this.changeView(data)}/><Signup changeView={(view) => this.changeView(view)} /></div>;
    }
    if (view === "signin") {
      return <div><Navsignin changeView={(data) => this.changeView(data)}/><Signin changeView={(view) => this.changeView(view)} /></div>;
    }
    if (view === "pro") {
      return <div> <Navbarprod changeView={(data) => this.changeView(data)}/> <Pro data={this.state.data} changeView={(view,product) => this.changeView(view,product)} product={this.state.product}  /></div>;
    }
    if (view === "admin") {
      return <div><Admin changeView={(view,product) => this.changeView(view,product)} /></div>;
    }
    if (view === "Prodetail") {
      return <div><NavBar changeView={(data) => this.changeView(data)}/><Prodetail changeView={(view,product) => this.changeView(view,product) } product={this.state.product} /></div>;
    }
    if (view === "userprod") {
      return <div> <Navbarprod changeView={(data) => this.changeView(data)}/> <Userdetails changeView={(view,product) => this.changeView(view,product) } data={this.state.data} product={this.state.product} /></div>;
    }
    if (view === "showorder") {
      return <div><Navbarprod changeView={(data) => this.changeView(data)}/> <ShowOrders  changeView={(view,product) => this.changeView(view,product)} product={this.state.product}data={this.state.data}  /></div>;
    }
  }

  render() {
    {
    
      if (this.state.view !== "admin") {
        return (
          <div>
            
            <div>{this.renderView()}</div>
          </div>
        );
      }
      return (
        <div>
          
          <div>{this.renderView()}</div>
        </div>
      );
    }
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

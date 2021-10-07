import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home/Home";
import MyOrders from "../pages/MyOrders/MyOrders";
import Wishlist from "../pages/MyWishlist/Wishlist";
import Offers from "../pages/Offers/Offers";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import ProductLandingPage from "../pages/ProductLandingPage/ProductLandingPage";
import ProductListingPage from "../pages/productListingPage/productListingPage";
import ProfileManager from "../pages/ProfileManager/ProfileManager";
import ServiceLandingPage from "../pages/ServiceLandingPage/ServiceLandingPage";
import { RoutePaths } from "./PageRoutesConstant";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={RoutePaths.home} component={Home} />
            <Route path={RoutePaths.myOrders} component={MyOrders} />
            <Route path={RoutePaths.orderDetails} component={OrderDetails} />
            <Route exact path={RoutePaths.offers} component={Offers} />
            <Route exact path={RoutePaths.productListingPage} component={ProductListingPage} />
            <Route exact path={RoutePaths.profile} component={ProfileManager} />
            <Route exact path={RoutePaths.wishlist} component={Wishlist} />
            <Route exact path={RoutePaths.productLandingPage} component={ProductLandingPage} />
            <Route exact path={RoutePaths.serviceLandingPage} component={ServiceLandingPage} />
        </Switch>
    )
}

export default Routes;
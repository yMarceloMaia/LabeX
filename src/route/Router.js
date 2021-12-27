import AdminHomePage from "../components/pages/adminHomePage/AdminHomePage";
import ApplicationFormPage from "../components/pages/applicationFormPage/ApplicationFormPage";
import CreateTripPage from "../components/pages/createTripPage/CreateTripPage";
import HomePage from "../components/pages/homePage/HomePage";
import ListTripsPage from "../components/pages/listTripPage/ListTripsPage";
import LoginPage from "../components/pages/loginPage/LoginPage";
import TripDetailsPage from "../components/pages/tripDetailsPage/TripDetailsPage";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/listTrips"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/applicationForm"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/adminHomePage"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/createTrip"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/tripDetails/:id"}>
          <TripDetailsPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
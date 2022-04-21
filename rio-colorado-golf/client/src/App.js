import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Amenities from "./pages/Amenities";
import Course from "./pages/Course";
import Events from "./pages/Events";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch"

const httpLink = createHttpLink({
  // uri: "/graphql", uncomment for live server and delete row below
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/course" component={Course} />
              <Route exact path="/amenities" component={Amenities} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/admin" component={Admin} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

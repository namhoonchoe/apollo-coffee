import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: "http://localhost:4000"
  })
});


export default apolloProvider;

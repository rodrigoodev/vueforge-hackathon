import { createApp, provide, h } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/base.css";
import "@progress/kendo-theme-default/dist/all.css";
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

const httpLink = createHttpLink({
  uri: "https://api.8base.com/cl5bir51u00lb09id1nfmfozv",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

// apolloClient.query({
//   query: gql(`
//     query BoardsList{
//       boardsList {
//         items {
//           id
//           title
//           image {
//             downloadUrl
//           }
//         }
//       }
//     }
//   `),
// });

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router);
app.use(router).use(createPinia());

app.mount("#app");

import api from "./app/helpers/wp_api.js";
import { ajax } from "./app/helpers/ajax.js";

export function App() {
  document.getElementById(
    "root"
  ).innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;

  console.log(api);

  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);
    },
  });

  ajax({
    url: api.CATEGORIES,
    cbSuccess: (categories) => console.log(categories),
  });
}
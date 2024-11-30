
export default class Route {
      constructor(url, title, pathHtml, pathJS, authorize = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
      }
  }

  /*
  []-> Tout le monde peut y acceder.
  ["disconnected"]-> Reserver aux utilisateurs déconnectés
  ["client"] -> Réserver aux utilisateurs avec le rôle client 
  ["admin"] ->  Réserver aux utilisateurs avec le rôle admin 
  ["admin", "client"] ->Réserver aux utilisateurs avec le rôle client OU admin
  */
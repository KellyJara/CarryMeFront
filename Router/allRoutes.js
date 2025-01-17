import Route from "./Route1.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Home", "/pages/home.html", []),
    new Route("/usersignin","user's sign in","/pages/userauth/usersignin.html","pages/js/auth/usersignin.js", ["disconnected"]),
    new Route("/usersignup", "User's sign up", "/pages/userauth/usersignup.html","pages/js/auth/usersignup.js", ["disconnected"]),
    new Route("/carriersignin","carrier's sign in","/pages/carrierauth/carriersignin.html", "pages/js/auth/carriersignin.js", ["disconnected"]),
    new Route("/useraccount","User's account","/pages/userauth/useraccount.html", ["client", "admin"],"pages/js/auth/useraccount.js"),
    new Route("/changepassword","Reset password", "/pages/userauth/resetpassword.html", ["client","admin"], "pages/js/auth/resetpassword.js"),
    new Route("/usereditinfo","User's edit info","/pages/userauth/usereditinfo.html", ["client","admin"]),
    new Route("/photos","Photos","/pages/photos.html","pages/js/auth/photos.js"),
    new Route("/deliverytours","My Delivery Tour","/pages/deliverytour/deliverytour.html", ['client','admin'], "pages/js/auth/delverytour.js"),
    new Route("/imagehover","Imagen Hover","/pages/imagenhover.html"),
   ];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Carry Me";




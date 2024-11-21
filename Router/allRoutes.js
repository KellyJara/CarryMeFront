import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Home", "/pages/home.html"),
    new Route("/usersignin","user's sign in","/pages/userauth/usersignin.html"),
    new Route("/usersignup", "User's sign up", "/pages/userauth/usersignup.html","/js/auth/usersignup.js"),
    new Route("/carriersignin","carrier's sign in","/pages/carrierauth/carriersignin.html"),
    new Route("/carriersignup", "Carrier's sign up", "/pages/carrierauth/carriersignup.html","/js/auth/carriersignup.js"),
    new Route("/useraccount","User's account","/pages/userauth/useraccount.html"),
    new Route("/carrieraccount","Carrier's account","/pages/carrierauth/carrieraccount.html"),
    new Route("/carriereditinfo","Carrier's edit info","/pages/carrierauth/carriereditinfo.html"),
    new Route("/usereditinfo","User's edit info","/pages/userauth/usereditinfo.html"),
    new Route("/photos","Photos","/pages/photos.html"),
   ];
    

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Carry Me";
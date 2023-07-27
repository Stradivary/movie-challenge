import HeaderOption from "../../components/header/header";

export const RouteOptions = {
  onBoarding:{
    headerShown: false,
    title: "test",
    icon:'shopping-cart',
    fontFamily:'Feather',
    unmountOnBlur: true,
  },
  homeMenu: {
    headerShown: false,
    title: "Home Menu",
    icon:'home',
    fontFamily:'Feather',
    unmountOnBlur: true,
  },
  detailMovie: (props)=>{
    return{
      headerShown: true,
      title: "Details",
      fontFamily:'Feather',
      unmountOnBlur: true,
      headerTransparent: true,
      headerTitle:()=><HeaderOption {...props} />,
      headerStyle: {
        backgroundColor: 'transparent',
        height: 70,
      },
    };
  },
  home: {
    headerShown: false,
    title: "Home",
    icon:'home',
    fontFamily:'Feather',
    unmountOnBlur: true,
  },
  searchMoview: {
    headerShown: false,
    title: "Search",
    icon:'search',
    fontFamily:'Feather',
    unmountOnBlur: true
  },
  favorites: {
    headerShown: false,
    title: "Favorites",
    icon:'bookmark',
    fontFamily:'Feather',
    unmountOnBlur: true
  },
};

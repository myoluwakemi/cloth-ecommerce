import CategoryMenu from "../../components/category-menu/category-menu.component";
const directory = [
  {
    id: 1,
    title: "hats",
    imageUrl: "../assets/eCommerce/11.png"
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:  "../assets/eCommerce/banner-12.jpg"
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "../assets/eCommerce/17.png"
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
  },
   {
    id: 5,
    title: 'gadgets',
    imageUrl: "../assets/eCommerce/2.png"
  },
  {
    id: 6,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
  },
 
  
];

const Home = () => (
  <CategoryMenu directory={directory}/>
);
export default Home
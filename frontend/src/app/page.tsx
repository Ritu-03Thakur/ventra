
import  {  PolicyFeatured } from "@/Component/Common/CommonFeatured";
import FeaturedSection from "@/Component/Common/FeaturedSection";
import HeroSection from "@/Component/Layout/HeroSection";
import { productItems } from "@/Data";


export default function Home() {
  const clothesData = productItems.filter((product)=>  product.category === 'Clothes' ) ; 
  const RecomData = productItems.filter((product)=>  product.category === 'RClothes' ) ; 
 

  return (
    <>
      
    <div className="flex flex-col gap-7 p-1">
   <HeroSection/>
   <FeaturedSection 
   heading="BEST SELLER" 
   subHeading="Explore best-selling safe, natural, and 100% toxin-free  products from Ventra. Get amazing deals and start your toxin-free skin, hair, and baby care journey."
   bgcolor="#c6942830"
   productItems = {clothesData}
   />
    
   
<FeaturedSection 
   heading="RECOMMENDED" 
   subHeading="Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from PureGlow. Get amazing deals and start your toxin-free skin, hair, and baby care journey."
   bgcolor="#b1afa9"
   productItems = {RecomData}
   />

   <PolicyFeatured/>
    </div>
     
    </>
  );
}

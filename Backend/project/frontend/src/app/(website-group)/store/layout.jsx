import BrandFilter from "@/components/website/BrandFilter";
import CategoryFilter from "@/components/website/CategoryFilter";
import ColorFilter from "@/components/website/ColorFilter";
import PriceFilter from "@/components/website/PriceFilter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='w-full py-6 bg-[#01A49E]'>
        </div>
        <div className='max-w-7xl p-4 bg-white mx-auto   my-2 shadow-2xl rounded-sm'>
          Home/Shop/Top Cell Phones & Tablets
        </div>
        <div>
          <img src="banner.png" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-2 py-4 my-10 grid grid-cols-7 gap-2">
          <div className="col-span-2 px-6 py-8 ">
            <CategoryFilter />
            <BrandFilter />
            <ColorFilter />
            <PriceFilter/>
          </div>
          <div className="col-span-5 px-2 py-8 ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

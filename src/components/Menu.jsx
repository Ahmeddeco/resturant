import { menuData } from "../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
const Menu = () => {
  const { btnText, menuItems, modelImg, subtitle, title } = menuData;

  return (
    <section className='min-h-[780px]'>
      <div className='h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0'></div>
      <div className='relative z-10 top-72 lg:top-52 '>
        <div className='container mx-auto flex flex-col items-center text-center'>
          <h2 className='h2 capitalize text-white max-w-[400px] text-center'>
            {title}
          </h2>
          <p className='text-white/70 capitalize mb-8'>{subtitle}</p>
          <div className=''>
            <img src={modelImg} alt='' className='' />
          </div>
        </div>
      </div>
      {/* menu gallery */}
      <div className='relative top-80 lg:top-96'>
        <div className='container mx-auto'>
          <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>
              {menuItems.map((item, index) => {
                // destructure data
                const { description, image, name, price } = item;
                return (
                  <div key={index} className=''>
                    <div className='flex flex-row lg:flex-col h-full'>
                      {/* image */}
                      <div className=''>
                        <img src={image} alt={name} className='' />
                      </div>
                      {/* text */}
                      <div className='bg-[#fff3e4] flex flex-1 flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
                        <div className=''>{name}</div>
                        <div className=''>{price}</div>
                        <div className=''>{description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

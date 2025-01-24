import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section>
      <div className="flex items-center py-32">
        <div className="px-3 sm:basis-[70%] pt-12 lg:px-20">
          <sup className="caption small-2 uppercase text-p3">Video Editing</sup>
          <h1 className="mb-4 !text-[65px] h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl lg:!text-[90px] max-md:leading-[59px]">
            Amazingly simple
          </h1>
          <p className="sm:text-start max-w-440 mb-6 body-1 max-md:mb-10 ">
            We designed XORA AI Video Editor to be an easy to use, quick to
            learn, and surprisingly powerful.
          </p>
          <LinkScroll to="features" offset={-100} spy smooth>
            <Button icon="/images/zap.svg">Try it now</Button>
          </LinkScroll>
        </div>
     <div className="w-[360px]">

          <img src="/images/hero.png" alt="" className="  absolute sm:block hidden -right-[280px] w-full  top-[250px] scale-[3] -z-1 max-h-[50%] object-contain" />
     
     </div>
      </div>
    </section>
  );
};

export default Hero;

// import { Carousel } from "@material-tailwind/react";

// export function HeroSection() {
//   return (
//     <Carousel
// transition={{ type: "tween", duration: 2 }}
// autoplay={true}
// autoplayDelay={5000}
// loop={true}
//       className="">
//       <img
//         src="https://www.cleanchemlab.com/images/bg/2.png"
//         alt="image 1"
//         className="lg:w-[100%] lg:h-[30em]"
//       />
//       <img
//         src="https://www.cleanchemlab.com/images/bg/11.png"
//         alt="image 2"
//         className="lg:w-[100%] lg:h-[30em]"
//       />
//       <img
//         src="https://www.cleanchemlab.com/images/bg/4.png"
//         alt="image 3"
//         className="lg:w-[100%] lg:h-[30em]"
//       />
//     </Carousel>
//   );
// }

import { Carousel, IconButton } from "@material-tailwind/react";

export function HeroSection() {
  return (
    <Carousel
      transition={{ type: "tween", duration: 2 }}
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
      className=""
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full bg-[#e8e3e399] text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 rounded-full bg-[#e8e3e399] text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src="https://www.cleanchemlab.com/images/bg/11.png"
        alt="image 1"
        className="lg:w-[100%] lg:h-[30em]"
      />
      <img
        src="https://www.cleanchemlab.com/images/bg/1.png"
        alt="image 2"
        className="lg:w-[100%] lg:h-[30em]"
      />
      <img
        src="https://www.cleanchemlab.com/images/bg/2.png"
        alt="image 3"
        className="lg:w-[100%] lg:h-[30em]"
      />
      <img
        src="https://www.cleanchemlab.com/images/bg/4.png"
        alt="image 3"
        className="lg:w-[100%] lg:h-[30em]"
      />
    </Carousel>
  );
}
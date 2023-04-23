import React from "react";

const Shot = () => {
  return (
    <>
      <section className="Navbar fixed z-10 w-screen bg-white-100 opacity-90 text-black">
        <nav className="nav flex justify-between mx-4 my-8 z-10">
          <div className="w-[10%] lg:w-fit navbrand font-bold text-2xl md:text-xl ">
            Fents Luxury Hotel
          </div>

          <div
            id="nav-items"
            className="nav-items hidden lg:flex justify-center font-medium gap-10  md:font-normal"
          >
            <a href="#">HOME</a>
            <a href="#">ROOMS</a>
            <a href="#">AMENITIES</a>
            <a href="#">GALLERY</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT</a>
          </div>

          <div>
            <div className="nav-items hidden icons lg:flex gap-5 text-4xl md:text-2xl">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div id="burger" className="lg:hidden">
            <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
          </div>
        </nav>
      </section>

      <section className="Slideshow">
        <div className="slideshow">
          <div
            id="carouselExampleCaptions"
            className="relative"
            data-te-carousel-init
            data-te-carousel-slide
          >
            {/* <!--Carousel indicators--> */}
            <div
              className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators
            >
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="1"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* <!--Carousel items--> */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {/* <!--First item--> */}
              <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active
                data-te-carousel-item
                // className="backface-visibility: hidden"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              {/* <!--Second item--> */}
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                // className="backface-visibility: hidden"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              {/* <!--Third item--> */}
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                // className="backface-visibility: hidden"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button
              className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="prev"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
              className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="Featured container mx-0 md:mx-16">
        <div className="featured ">
          <h2 className="flex justify-center text-center font-extrabold text-2xl mt-24 mb-8 md:sectionHeader">
            Featured Rooms
          </h2>
          <hr className="border-b-1 w-[7%] border-black mx-[auto] mb-16 mt-2" />
        </div>

        <div className="block md:flex justify-center">
          <div className="featured-img ml-[15%] md:ml-0 my-5 relative">
            <div className="w-[40%] mt-[20%] md:mt-0 md:w-[50%]  h-[350px]  object-cover absolute md:mx-[10%] shadow-md">
              <img
                className="w-full h-full"
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                alt=""
              />
            </div>

            <div className="w-[60%] md:w-[70%] h-[600px] object-cover mx-[auto] mt-[10%] md:mx-[20%] shadow-md">
              <img
                className="w-full h-full"
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                alt=""
              />
            </div>
          </div>

          <div className="K-bedroom items-center justify-start my-[auto] w-[40%] mr-44">
            <h2 className="title">King Bedroom</h2>
            <span className="paragraph">
              A hotel is an establishment that provides paid lodging on a
              short-term basis. Facilities provided may range from a
              modest-quality mattress in a small room to large suites with
              bigger.
            </span>
            <h3 className="bDets">
              <a href="#">ROOM DETAILS</a>
            </h3>
            <div className="bedroom-img">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="block md:flex justify-center">
          <div className="Q-bedroom items-center grid justify-cneter my-[auto] w-[40%] ml-[auto] md:ml-44">
            <h2 className="title">Queen's Bedroom</h2>
            <span className="paragraph">
              A hotel is an establishment that provides paid lodging on a
              short-term basis. Facilities provided may range from a
              modest-quality mattress in a small room to large suites with
              bigger.
            </span>
            <h3 className="bDets">
              <a href="#">ROOM DETAILS</a>
            </h3>
            <div className="bedroom-img">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>

          <div className="featured-img ml-[15%] md:ml-0 my-5 relative ">
            <div className="w-[40%] md:w-[50%]  h-[300px] ml-[35%] md:ml-[55%] mt-[35%] absolute shadow-md">
              <img
                className="w-full h-full"
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                alt=""
              />
            </div>

            <div className="w-[55%] md:w-[70%] h-[800px] object-cover ml-0 md:ml-[10%] mt-[10%] shadow-md">
              <img
                className="w-full h-full"
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="amenities my-10">
          <h2 className="flex justify-center text-center font-extrabold text-2xl mt-24 mb-8 md:sectionHeader">
            Hotel Amenities
          </h2>
          <hr className="border-b-1 w-[7%] border-black mx-[auto] mb-16 mt-2" />

          <div className="A-cards block md:grid grid-cols-3">
            <div className="my-[10%] md:my-0 w-[80%] mx-[auto] text-center items-center border">
              <div className="w-[80%] mx-[auto]">
                <div className="w-[30%] ml-[35%] my-10">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/car-maintenance-and-service/32/parking-car-space-zone-256.png"
                    alt="car-park"
                  />
                </div>
                <h2 className="subTitle my-5">Free Self-parking</h2>
                <span>
                  <p className="paragraph my-5">
                    A hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality.
                  </p>
                </span>
                <span>
                  <h3 className="dets mb-10">Read more</h3>
                </span>
              </div>
            </div>

            <div className="my-[10%] md:my-0 w-[80%] mx-[auto] text-center items-center border">
              <div className="w-[80%] mx-[auto]">
                <div className="w-[30%] ml-[35%] my-10">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/complete-version-1/1024/globe4-512.png"
                    alt=""
                  />
                </div>
                <h2 className="subTitle my-5">High Speed Internet Access</h2>
                <span>
                  <p className="paragraph my-5">
                    A hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality.
                  </p>
                </span>
                <span>
                  <h3 className="dets mb-10">Read more</h3>
                </span>
              </div>
            </div>

            <div className="my-[10%] md:my-0 w-[80%] mx-[auto] text-center items-center border">
              <div className="w-[80%] mx-[auto]">
                <div className="w-[30%] ml-[35%] my-10">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/wi-fi-256.png"
                    alt=""
                  />
                </div>
                <h2 className="subTitle my-5">
                  Complimentary WiFi in public areas
                </h2>
                <span>
                  <p className="paragraph my-5">
                    A hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality.
                  </p>
                </span>
                <span>
                  <h3 className="dets mb-10">Read more</h3>
                </span>
              </div>
            </div>

            <div className="my-[10%] md:my-0 w-[80%] mx-[auto] text-center items-center border md:mt-[20%]">
              <div className="w-[80%] mx-[auto]">
                <div className="w-[30%] ml-[35%] my-10">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/accomodation-outline/60/052_-_Elevator-256.png"
                    alt="elevator-img"
                  />
                </div>
                <h2 className="subTitle my-5">Elevators</h2>
                <span>
                  <p className="paragraph my-5">
                    A hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality.
                  </p>
                </span>
                <span>
                  <h3 className="dets mb-10">Read more</h3>
                </span>
              </div>
            </div>

            <div className="my-[10%] md:my-0 w-[80%] mx-[auto] text-center items-center border md:mt-[20%]">
              <div className="w-[80%] mx-[auto]">
                <div className="w-[30%] ml-[35%] my-10">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/festivalization-and-exhibition/64/conference-room-seminar-meeting-lecture-state-512.png"
                    alt="conf-icon"
                  />
                </div>
                <h2 className="subTitle my-5">Meeting Rooms</h2>
                <span>
                  <p className="paragraph my-5">
                    A hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality.
                  </p>
                </span>
                <span>
                  <h3 className="dets mb-10">Read more</h3>
                </span>
              </div>
            </div>

            <div className="my-[10%] md:my-0 w-[80%] mx-[auto] text-center items-center border md:mt-[20%]">
              <div className="w-[80%] mx-[auto]">
                <div className="w-[30%] ml-[35%] my-10">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/ecologic-awareness-hand-drawn/512/Wash_only_full_loads-256.png"
                    alt=""
                  />
                </div>
                <h2 className="subTitle my-5">Laundry and Valet service</h2>
                <span>
                  <p className="paragraph my-5">
                    A hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality.
                  </p>
                </span>
                <span>
                  <h3 className="dets mb-10">Read more</h3>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Contact h-60 bg-gray-300 flex justify-center items-center">
        <div className="items-center">
          <span>
            <p className="text-2xl w-[60%] md:w-[80%] text-center ml-[20%] md:ml-[10%]">
              {" "}
              If you have any special requests, please feel free to call us.
              <a href="#">+12.345.678.9012</a>
            </p>
          </span>
        </div>
      </section>

      <section className="Navigation container mt-8 mx-[5%] md:mx-16">
        <div className="grid grid-cols-2 md:grid-cols-5">
          <div className="w-[80%] md:col-span-2 aboutUs">
            <h2 className="subTitle my-5">About Us</h2>
            <span>
              <p className="text-lg tracking font-light my-5">
                A hotel is an establishment that provides paid lodging on a
                short-term basis. Facilities provided may range from a
                modest-quality.
              </p>
            </span>
            <h3 className="text-sm font-extrabold tracking-wide my-10">
              READ MORE
            </h3>
          </div>

          <div className="navigation">
            <h2 className="subTitle my-5">Navigation</h2>
            <span>
              <div className="w-fit">
                <a
                  className="block text-sm font-semibold md:text-lg tracking md:font-normal my-2 "
                  href="#"
                >
                  HOME
                </a>
                <a
                  className="block text-sm font-semibold md:text-lg tracking md:font-normal my-2 "
                  href="#"
                >
                  ROOMS
                </a>
                <a
                  className="block text-sm font-semibold md:text-lg tracking md:font-normal my-2 "
                  href="#"
                >
                  AMENITIES
                </a>
                <a
                  className="block text-sm font-semibold md:text-lg tracking md:font-normal my-2 "
                  href="#"
                >
                  GALLERY
                </a>
                <a
                  className="block text-sm font-semibold md:text-lg tracking md:font-normal my-2 "
                  href="#"
                >
                  ABOUT US
                </a>
                <a
                  className="block text-sm font-semibold md:text-lg tracking md:font-normal my-2 "
                  href="#"
                >
                  CONTACT
                </a>
              </div>
            </span>
          </div>

          <div className="col-span-2">
            <div className="add$phone grid grid-cols-2 text-left">
              <div>
                <h2 className="subTitle my-5">Address</h2>
                <span>
                  <p className="text-lg tracking font-light my-5">
                    {" "}
                    273 South Riverview Rd. Nigeria.
                  </p>{" "}
                </span>
              </div>

              <div>
                <h2 className="subTitle my-5">Telephone</h2>
                <span>
                  {" "}
                  <p className="text-lg tracking font-light my-5">
                    +1 234 5678 910
                  </p>
                  <p className="text-lg tracking font-light my-5">
                    +1 234 5678 910
                  </p>
                </span>
              </div>
            </div>

            <div className="newsletter text-start  justify-start md:justify-center md:block">
              <h2 className="subTitle md:my-5">Join our newsletter</h2>
              <span>
                <p className="text-lg tracking font-light my-2 md:my-5">
                  {" "}
                  Be the first to know our latest updates and news!
                </p>{" "}
              </span>

              <div className="mt-2 block md:flex">
                <input
                  type="text"
                  className="px-[15%] md:px-[20%] py-2 bg-gray-300 rounded-lg"
                  placeholder="Your Email Please*"
                />
                <button className=" text-sm font-bold text-gray-50 tracking-widest bg-slate-800 py-2 px-4 rounded-lg block md:flex justify-center mt-2 md:mt-4 md:ml-[10%] md:mb-4">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Endicons flex justify-center">
        <div className="endIcons my-10 flex justify-center md:justify-end gap-5">
          <a href="#">
            <i className="fa-brands fa-facebook text-4xl"></i>
          </a>
          <a href="#">
            {" "}
            <i className="fa-brands fa-twitter text-4xl"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram text-4xl"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Shot;

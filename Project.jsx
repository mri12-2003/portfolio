import React from "react";

export default function Project() {
  const portfolio = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg=",
      href: "https://www.linkedin.com/feed/",
    },
    {
      id: 2,
      src: "https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg=",
    },
    {
      id: 3,
      src: "https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg=",
    },
    {
      id: 4,
      src: "https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg=",
    },
    {
      id: 5,
      src: "https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg=",
    },
    {
      id: 6,
      src: "https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg=",
    },
  ];

  return (
    <div
      name="Project"
      className="  bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects!!
          </p>
          <p className="py-6 text-3xl">Check out my Activity !!</p>
        </div>

        <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md border-2 shadow-white rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              ></img>

              <div className=" flex items-center justify-center ">
                <button className=" bg-white  rounded text-black w-1/2 px-2 py-3 m-4 duration-200 font-signatur2 text-2xl hover:scale-105 border">
                  Code
                </button>
                <button className=" bg-white  rounded w-1/2 px-2 py-3 m-4 duration-200  text-black hover:scale-105 font-signatur2  text-2xl border" href="#">
                  Click Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* <divmritunjay  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
            src="https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg="
              alt=""
              className="rounded-md duration-300 hover:scale-105"
            ></img>

            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code{" "}
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Click me{" "}
              </button>
            </div>
          </div>
        </divmritunjay> */
/* <divmritunajy className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
            src="https://media.istockphoto.com/id/1341437653/photo/abstract-composition-with-connecting-dots-and-lines-futuristic-network-background-for.jpg?b=1&s=170667a&w=0&k=20&c=dvHp0Kmr1AnjtiVHSe_fSRCzwUThDPx_SlW_n1UUiPg="
              alt=""
              className="rounded-md duration-300 hover:scale-105"
            ></img>

            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code{" "}
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Click me{" "}
              </button>
            </div>
          </div>
        </divmritunajy> */

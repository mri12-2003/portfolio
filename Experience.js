import React from "react";

export default function Experience() {
  const techs = [
    {
      id: 1,
      title: 'HTML/CSS',
      src: "https://w0.peakpx.com/wallpaper/214/158/HD-wallpaper-html5-logo-white-silk-texture-html5-emblem-programming-language-html-silk-background.jpg",
      

      
      
    },
    {
      id: 2,
      title: 'RestAPI',
     
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtN6UynAtuGE6YrW-nig9CYc2zLWiPXaBvQ&usqp=CAU",

      
     
    },
    {
      id: 3,
      title: 'JavaScript',
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpxx5MTGrNdxLuMJoD3ywthXIzbb9STDN2w&usqp=CAUg",

      
     
    },
    {
      id: 4,
      title: 'React',
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPEMXozhx44C1bHZg6Ux7cHqNBNSYCVWT6A&usqp=CAU",

    },
    {
      id: 5,
      title: 'Tailwind',
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrDagxItoUdmVQWYtYSfYqLGCuBYhoNZbpT-eA_CgzLSyX-6VBcCGdExHWZiRpgCQ1zM&usqp=CAU",

       
    },
    {
      id: 6,
      title: 'Node/Express js',
      src: "https://miro.medium.com/max/1400/0*7oDBZmPOxKGhHG1t",
    },
    {
      id: 7,
      title: 'MySQL',
      src: "https://thumbs.dreamstime.com/z/database-concept-glowing-text-mysql-hand-drawn-programming-icons-grunge-dark-room-wooden-floor-black-background-107002640.jpg",
     
      
    },
    {
      id: 8,
      title: 'GitHub',
      src: "https://e0.pxfuel.com/wallpapers/478/564/desktop-wallpaper-github-3d-logo-gray-brickwall-creative-social-networks-github-logo-3d-art-github.jpg",

      
    },
    {
      id: 9,
      title: 'UI/UX Design',
      src: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",

      
    }
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
          
            Experience
          </p>
          <p className="py-6 text-3xl">
           
            These are the technologies that I have worked with !!
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          
          {techs.map(({id,title,src}) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2  rounded-lg border-2  shadow-gray-100 "
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105 w-screen h-48 "
                
              ></img>
              <p className="mt-4 cursor-pointer">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

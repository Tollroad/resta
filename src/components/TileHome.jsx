import React from 'react'

function TileHome(props) {
  return (
   <>
    <div className=" mx-2 w-fit h-fit">
              <div className="rounded-md text-white border-2 bg-[#222] w-full h-64">
                <h1 className="m-4 font-bold text-2xl">{props.serial}</h1>
                <p className="flex text-center justify-center items-center text-5xl font-semibold">
                  Shop
                  <br /> Products
                </p>
              </div>
              <h1 className="text-left text-xs mt-8">
                Our full product line is still available online here on our
                site! Getting outside and hiking is still something you can do.
                Get your gear now!
              </h1>
            </div>
   </>
  )
}

export default TileHome
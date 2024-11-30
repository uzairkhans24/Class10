import exp from "constants"

function Course(){
    return(
        <main>            
            <div>
                 <h1 className="mt-12 text-center text-4xl font-bold text-blue-500">Certified Cloud Applied Generative AI Engineer (GenEng) <br />
          and Solopreneur Developing Billion-Dollar <br /> Valued Developers and Solopreneurs</h1>

        <p className="mt-5 ml-32 mr-32 text-xl font-sans text-justify">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model 
          and work independently and will not need to hire employees or other team members.</p>
        </div>

        {/* img sec */}

            <div className=" flex justify-center items-center p-8 gap-4 rounded-xl">
                <img src="/img1.jpg" alt="img" className="w-[400px] h-[320px] rounded-xl"/>
                <img src="/img2.jpg" alt="img" className="w-[400px] h-[320px] rounded-xl"/>
                <img src="/img3.jpg" alt="img" className="w-[400px] h-[320px] rounded-xl"/>
            </div>
            {/* slider */}
            <div className="flex justify-around p-8 gap-4 ">
                <img src="/gslider.jpg" alt="img" className="w-1/2 h-96"/>
                <img src="/gslider3.jpg" alt="img" className="w-1/2 h-96" />
            </div>

            <hr/>

            {/* {core courses} */}
            <div>
                    <h1 className="text-4xl text-blue-900 font-extrabold ml-16">
                    Core Courses Sequence
                    </h1>
                    <div className="flex justify-around mt-10">
                        {/* img-1 */}
                        <div className=" w-3/12 bg-gray-200">
                           <div className="flex justify-center"> 
                            <img src="/card1.jpg" alt="img" className=""/>
                           </div>
                            <div className="flex justify-center">
                            <h2 className="py-5 text-lg text-gray-600 font-bold">Programming Fundamentals</h2>
                            </div>
                             </div>

                             {/* img-2 */}
                             <div className=" w-3/12 bg-gray-200">
                           <div className="flex justify-center"> 
                            <img src="/card2.jpg" alt="img" className=""/>
                           </div>
                            <div className="flex justify-center">
                            <h2 className="py-5 text-lg text-gray-600 font-bold">Programming Fundamentals</h2>
                            </div>
                             </div>

                             {/* img-3 */}
                             <div className=" w-3/12 bg-gray-200">
                           <div className="flex justify-center"> 
                            <img src="/card3.jpg" alt="img" className=""/>
                           </div>
                            <div className="flex justify-center">
                            <h2 className="py-5 text-lg text-gray-600 font-bold">Programming Fundamentals</h2>
                            </div>
                             </div>
                              </div>
                    </div>



                    {/* {Advnace courses} */}
            <div>
                    <h1 className="text-4xl text-blue-900 font-extrabold ml-16 mt-16">
                    Advance Courses
                    </h1>
                    <div className="flex justify-around mt-10">
                        {/* img-4 */}
                        <div className=" w-4/12 bg-gray-200">
                           <div className="flex justify-center"> 
                            <img src="/card4.jpg" alt="img" className=""/>
                           </div>
                            <div className="flex justify-center">
                            <h2 className="py-5 text-lg text-gray-600 font-bold">Programming Fundamentals</h2>
                            </div>
                             </div>

                             {/* img-5 */}
                             <div className=" w-4/12 bg-gray-200">
                           <div className="flex justify-center"> 
                            <img src="/card5.jpg" alt="img" className=""/>
                           </div>
                            <div className="flex justify-center">
                            <h2 className="py-5 text-lg text-gray-600 font-bold">Programming Fundamentals</h2>
                            </div>
                             </div>

                             {/* img-6 */}
                             <div className=" w-4/12 bg-gray-200">
                           <div className="flex justify-center"> 
                            <img src="/card6.jpg" alt="img" className=""/>
                           </div>
                            <div className="flex justify-center">
                            <h2 className="py-5 text-lg text-gray-600 font-bold">Programming Fundamentals</h2>
                            </div>
                             </div>
                             
                             {/* img-7 */}
                             <div className=" w-4/12 bg-gray-200">
                           <div className="flex justify-center"> 
                            <img src="/card7.jpg" alt="img" className=""/>
                           </div>
                            <div className="flex justify-center">
                            <h2 className="py-5 text-lg text-gray-600 font-bold">Programming Fundamentals</h2>
                            </div>
                             </div>
                             
                            

                              </div>
                    </div>
            </main>


    )
}
export default Course
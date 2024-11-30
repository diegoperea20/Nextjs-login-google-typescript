

function DashboardPage() {
  return (
    <div className="font-haken  bg-gray-100 py-8 dark:bg-black ">
    
    <section className="w-[90%] max-w-md mx-auto bg-white shadow-2xl md:flex md:rounded-2xl md:max-w-4xl dark:bg-[#363B3D]">

    <article className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-b-2xl p-10 text-white text-center md:rounded-2xl md:w-1/2 md:grid md:content-center ">

            <p className="text-xl font-bold text-light-lavender"> Your Result</p>

            <div className="w-36 aspect-square bg-gradient-to-b from-violet-blue to-persian-blue rounded-full mx-auto my-8 grid content-center md:w-56">

                <p className="text-5xl font-bold mb-2 md:text-7xl">76</p>
                <p className="font-bold text-light-lavender"> of 100</p>

            </div>

            <h3 className="text-3xl mb-4 font-bold">Great</h3>
            <p className="text-light-lavender">You scored higher than 65% of the people who have taken these tests.</p>

        </article>

        <article className="p-10 grid gap-6 md:w-1/2 dark:bg-[#363B3D]">

            <h3 className="text-xl font-bold "> Summary</h3>

            <div className="bg-red-500/5 rounded-xl flex py-5 px-6 items-center">

              

               <p className="ml-3 text-red-500 text-lg">Reaction</p>

                <p className="ml-auto font-bold text-dark-gray-blue">
                    80
                    <span className="text-dark-gray-blue/70">/ 100</span>
                </p>

            </div>

            <div className="bg-orange-300/25 rounded-xl flex py-5 px-6 items-center">

          

                <p className="ml-3 text-orange-600 text-lg"> Memory</p>

                <p className="ml-auto font-bold text-dark-gray-blue">
                    92
                    <span className="text-dark-gray-blue/70">/ 100</span>
                </p>

            </div>

            <div className="bg-green-600/25 rounded-xl flex py-5 px-6 items-center">

               
                <p className="ml-3 text-green-600 text-lg"> Verbal</p>

                <p className="ml-auto font-bold text-dark-gray-blue">
                    61
                    <span className="text-dark-gray-blue/70">/ 100</span>
                </p>

            </div>

            <div className="bg-blue-600/25 rounded-xl flex py-5 px-6 items-center">

              

                <p className="ml-3 text-blue-600 text-lg"> Visual</p>

                <p className="ml-auto font-bold text-dark-gray-blue">
                    72
                    <span className="text-dark-gray-blue/70">/ 100</span>
                </p>

            </div>

            <a href="#" className="bg-blue-600 text-white rounded-full py-5 text-center font-bold hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue">Continue</a>

        </article>

    </section>


</div>)
  
}

export default DashboardPage
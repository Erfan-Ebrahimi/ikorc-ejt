import "./Shahid.scss";

const Shahid = () => {
    return (
        <div className="container mt-24 my-40" >
            <div className="container mx-auto w-1/2 text-center">
                <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 text-transparent  bg-clip-text bg-gradient-to-t from-rose-100 to-sky-600 dark:text-white">شهدای شرکت نفت</h2>
                <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 border-b border-red-500 pb-4 text-white">شادی روحشان صلوات</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-x-10 mt-10">

                <div className="w-1/2 flex items-center justify-center gap-x-1">
                    <div className="w-[300px]">
                        <img src="./assets/images/sh1.png" alt="" />
                    </div>
                    <div className="w-1/2  flex flex-col justify-between">
                        <h1 className="font-Nast text-4xl text-yellow-300/80 text-center">غلام علی سلیمانی</h1>
                        <div className=" font-Dana text-white mt-2 flex justify-evenly">
                            <span className="text-green-500">ولادت : </span>
                            <span className=" tracking-widest">1339/06/20</span>
                        </div>
                        <div className="font-Dana text-white flex justify-evenly">
                            <span className="text-red-500">شهادت : </span>
                            <span className=" tracking-widest">1362/07/26</span>
                        </div>
                    </div>
                </div>



                <div className="w-1/2 flex items-center justify-center gap-x-1">
                    <div className="w-[300px]">
                        <img src="./assets/images/sh2.png" alt="" />
                    </div>
                    <div className="w-1/2  flex flex-col justify-between">
                        <h1 className="font-Nast text-4xl text-yellow-300/80 text-center">محمد رایگان</h1>
                        <div className=" font-Dana text-white mt-2 flex justify-evenly">
                            <span className="text-green-500">ولادت : </span>
                            <span className=" tracking-widest">1334/01/07</span>
                        </div>
                        <div className="font-Dana text-white flex justify-evenly">
                            <span className="text-red-500">شهادت : </span>
                            <span className=" tracking-widest">1357/05/28</span>
                        </div>
                    </div>
                </div>






            </div>

        </div>
    )
}

export default Shahid;
export default function Box(){
    return (
        <div className="text-center bg-white text-black min-[801px]:w-[60%] w-[90%] my-auto rounded-2xl p-2">
            <h1 className="min-[801px]:text-[5.5vw] text-[14vw] font-extrabold">
                YOU GAINED
            </h1>
            <div className="border-8 border-black min-[801px]:w-[50%] w-[70%] mx-auto min-[800px]:mt-12 mt-6 mb-8 min-[800px]:mb-12 p-6 rounded-xl">
                <h3 className="font-semibold min-[800px]:text-[1.3vw] text-[4vw] text-gray-500">Potential Profit:</h3>
                <h2 className="font-bold min-[801px]:text-[4vw] text-[12vw]">
                    40201%
                </h2>
                <h3 className="font-semibold min-[801px]:text-[2vw] text-[4vw] text-gray-700">
                    40.2x + 5.12 ETH
                </h3>
            </div>

            <h3 className="min-[801px]:text-[3.4vw] text-[7vw] font-bold">YEE TO YOUR HAW</h3>
            <div className="pb-4">
                <h4 className="font-semibold min-[800px]:text-[1.3vw] text-[4vw]">Bought for: </h4>
                <h4 className="font-semibold min-[800px]:text-[1.3vw] text-[4vw]">Current value: </h4>
            </div>
        </div>
    )
}
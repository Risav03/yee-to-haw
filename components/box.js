import {useSelector} from "react-redux"
import axios from "axios";
import { useEffect, useState } from 'react'

export default function Box(){

    const [bought, setBought] = useState(0)
    const [current, setCurrent] = useState(0);
    const [profit, setProfit] = useState(0);

    const address = useSelector((state)=>state.click.account);
    console.log(address);

    const url = "https://profit-calculator-cjcy.onrender.com"


    async function fetchbought(){
        try{
            console.log("I AM GONNA FETCH bought");
            await axios.get(url+"/rest/getProfitData/boughtFor/"+address).then((res)=>{console.log(res); setBought(res.data.boughtFor)});
        }
        catch(err){
            setBought(0);
            console.log(err);
        }

    }

    async function fetchcurrent(){
        try{
            console.log("I AM GONNA FETCH current");
            await axios.get(url+"/rest/getProfitData/currentPrice/"+address).then((res)=>{console.log(res); setCurrent(res.data.currentValue)});
        }
        catch(err){
            setCurrent(0);
            console.log(err);
        }
    }

    async function fetchprofit(){
        try{
            console.log("I AM GONNA FETCH current");
            await axios.get(url+"/rest/getProfitData/currentProfit/"+address).then((res)=>{console.log(res); setProfit(res.data.profit)});
        }
        catch(err){
            setProfit(0);
            console.log(err);
        }
    }


    useEffect(()=>{
        fetchbought();
        fetchcurrent();
        fetchprofit();
    }, [address])
  

    return (
        <div className="text-center bg-white text-black min-[801px]:w-[60%] w-[90%] my-auto rounded-2xl p-2">
            <h1 className="min-[801px]:text-[5.5vw] text-[14vw] font-extrabold">
                YOU GAINED
            </h1>
            <div className="border-8 border-black min-[801px]:w-[50%] w-[70%] mx-auto min-[800px]:mt-12 mt-6 mb-8 min-[800px]:mb-12 p-6 rounded-xl">
                <h3 className="font-semibold min-[800px]:text-[1.3vw] text-[4vw] text-gray-500">Potential Profit:</h3>
                <h2 className="font-bold min-[801px]:text-[4vw] text-[12vw]">
                    {(profit/bought)*100}%
                </h2>
                <h3 className="font-semibold min-[801px]:text-[2vw] text-[4vw] text-gray-700">
                    {(profit/bought)}x + 5.12 ETH
                </h3>
            </div>

            <h3 className="min-[801px]:text-[3.4vw] text-[7vw] font-bold">YEE TO YOUR HAW</h3>
            <div className="pb-4">
                <h4 className="font-semibold min-[800px]:text-[1.3vw] text-[4vw]">Bought for: $ {bought}</h4>
                <h4 className="font-semibold min-[800px]:text-[1.3vw] text-[4vw]">Current value: $ {current}</h4>
            </div>
        </div>
    )
}
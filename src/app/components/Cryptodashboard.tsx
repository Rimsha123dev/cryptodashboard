 "use client"
import React from 'react'
import { useState,useEffect } from 'react' 
import axios from 'axios'



interface Coin {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

const Cryptodashboard = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
    const [loading,setLoading]=useState<boolean>(true);


    useEffect(()=>{
        const fetchCoinRates = async()=>{
            try{
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,
                    {
                        headers:{
                            Authorization: `Bearer${process.env.API_KEY}`,
                        }
                    }

                )
                setCoins(response.data);
            }
             catch(error){
                console.error("error in fetching data:",error);
             }
              finally{
                setLoading(false);
              }
        }
        fetchCoinRates()
    },[]);
    if (loading){
        return(
            <div className='text-center text-xl text-red-800'>
                Loading Data.............

            </div>

        )
    }
    return(
        <div className='mx-auto p-4 max-w-7xl'>
            <h1 className='text-black text-center mb-8 font-semibold text-4xl'>Crypto Currency Dashboard</h1>
            {/* grid me data fetch */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    coins.map((coin)=>(
                        <div
                        key={coin.id}
                        className='bg-white rounded-lg shadow-lg p-4 text-blue-800 transform transition duration-300 hover:scale-105 hover:shadow-2xl'
                        >
                            <h2 className='text-xl text-center text-red-600 mb-4 uppercase font-bold'>{coin.name}</h2>
                            <div className='mb-4'>
                                <p className='text-xl text-blue-600'>
                                    Price(USD):
                                </p>
                                <p className='font-bold text-slate-800 text-xl'>
                                    ${coin.current_price.toFixed(2)}
                                </p>
                            </div>

                            <div className='mb-4'>
                                <p className='text-lg text-slate-600 capitalize'>
                                    market cap:
                                </p>
                                <p className='font-bold text-slate-800 text-xl'>
                                    ${coin.market_cap}
                                </p>
                            </div>

                            <div className='mb-4'>
                                <p className='text-lg text-blue-600'>
                                    24h Change:
                                </p>
                                <p className={`font-semibold ${
                                    coin.price_change_percentage_24h < 0? "text-red-500": "text-green-500"
                                }`}>
                                    ${coin.price_change_percentage_24h.toFixed(2)}%
                                </p>
                            </div>


                        </div>
                    ))
                }

            </div>

        </div>
    )



}

export default Cryptodashboard



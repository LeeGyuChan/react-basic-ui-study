import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { throttle } from 'throttle-debounce';


interface Airline {
    id : number;
    name : string;
    country : string;
    logo : string;
    slogan : string;
    head_quaters : string;
    website : string;
    established : string;
}

interface Passenger{
    _id : string;
    name : string;
    trips : number;
    airline : Airline;
    __v : number;
}


export default function App2() {


    const scrollRef = useRef<HTMLUListElement | null>(null);

    const currentPageRef = useRef<number>(0);

    const [passengers, setPassengers] = useState<Array<Passenger>>([]); 
    const [isLast, setIsLast] = useState<boolean>(false);
    const [isScrollBotton, setIsScrollBotton] = useState<boolean>(false);


    const params = { page: currentPageRef.current, size : 30}

    const getPassengers = async (init?:boolean) => {
        try {
            const response = await axios.get('https://api.instantwebtools.net/v1/passenger', {params});

            const passengers = response.data.data;
            const isLast = response.data.totalPages  === currentPageRef.current;

            init ? setPassengers(passengers) : setPassengers(prev => [...prev, ...passengers]);
            setIsLast(isLast);

        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getPassengers(true);
    },[]);


    const handleScroll = throttle(1000,  () =>{
        if(scrollRef.current){
            const { scrollHeight, offsetHeight, scrollTop } = scrollRef.current;

            const offset = 50;

            setIsScrollBotton(scrollHeight - offsetHeight - scrollTop < offset);
        }
    })

    useEffect(()=>{
        if(isScrollBotton){
            currentPageRef.current +=1;

            !isLast && getPassengers();
        }
    },[isScrollBotton, isLast]);


  return (
    <div>
        <ul ref={scrollRef} className='list' onScroll={handleScroll}>
            {
                passengers.map(passenger => (<li key={passenger._id} className='item'>{passenger.name}</li>))
            }
        </ul>
    </div>
  )
}

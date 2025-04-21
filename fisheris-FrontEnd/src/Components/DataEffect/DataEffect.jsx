import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";


const DataEffect = () => {
    const [axiosPublic]=AxiosPublic();

    const {data:menu=[],isLoading,refetch}=useQuery({
        queryKey:["menu"],
        queryFn:async()=>{
            const res=await axiosPublic.get("/menu");
            return res.data;
        }
    })


    return [menu, isLoading,refetch];
};

export default DataEffect;
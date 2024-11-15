"use client"
import { Provider } from "react-redux";
import {store} from "@/lib/store/store" ;
import { ReactNode } from "react";


interface ProviderStoreProps {
    children: ReactNode; 
  }

export const  ProviderStore = ({children}:ProviderStoreProps)=>{

 return (<>
    <Provider store={store}>
       {children}
    </Provider>
   
 </>
    )
}
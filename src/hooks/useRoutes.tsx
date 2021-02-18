import {useEffect, Suspense} from "react";
import {useObserver} from "mobx-react-lite";
import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import {useHttp} from "./useHttp";

export const useRoutes = () => {
    const {loading, request} = useHttp()

    useEffect(() => {

    },[request])
  
    const isAuth = false
    return useObserver(() => (
        <Switch>
            <Suspense fallback={<div>Some load...</div>}>
                {loading? <>

                </>:<>
                    {isAuth? <>

                    </>:<>

                    </>}
                </>}
            </Suspense>
        </Switch>
    ))
}

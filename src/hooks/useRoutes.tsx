import {useEffect, Suspense} from "react";
import {useObserver} from "mobx-react-lite";
import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import {useHttp} from "./useHttp";
import {useUser} from "../context/userContext";
import {useCookies} from "react-cookie";
import {routes} from "../helpers/routes";
import {HomePage} from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const useRoutes = () => {
    const {loading, request} = useHttp()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const user = useUser()

    useEffect(() => {

    },[request])

    const isAuth = true
    return useObserver(() => (
        <Switch>
            <Suspense fallback={<div>Some load...</div>}>
                {loading? <>
                    <div>
                        Loading...
                    </div>
                </>:<>
                    {isAuth? <>
                        <Route path={routes.home}>
                            <HomePage/>
                        </Route>
                        <Redirect to={routes.home}/>
                    </>:<>
                        <Route path={routes.login}>
                            <LoginPage/>
                        </Route>
                        <Redirect to={routes.login}/>
                    </>}
                </>}
            </Suspense>
        </Switch>
    ))
}

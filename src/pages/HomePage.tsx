import {PageContainer} from "../containers/PageContainer";
import {
    Checkbox, IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/useHttp";
import TodoMob from "../store/TodoMob";
import { TodoProvider } from "../context/todoContext";
import {BASE_URL} from "../helpers/constants";


export const HomePage = () => {
    const [checked, setChecked] = useState([0]);
    const {loading, request} = useHttp()
    const [todos, setTodos] = useState<TodoMob>(new TodoMob())

    useEffect(() => {
        const getTodos = async () => {
            try{
                const data = await request(BASE_URL, 'GET')

            }catch (e){

            }
        }
    },[])


    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return(
        <PageContainer>
            <Typography component={'h1'} variant={"h4"} gutterBottom>That yours todos</Typography>
            <TodoProvider value={todos}>

            </TodoProvider>
        </PageContainer>
    )
}
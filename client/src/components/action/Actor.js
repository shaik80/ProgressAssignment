import axios from 'axios';
import { 
    AddActor_SUCCESS,
    AddActor_FAIL
} from "./type";


//Add Actor
export const addActor =({
    name,
    sex,
    dob,
    Bio,
    Movie
}) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body  = JSON.stringify({
        name,
        sex,
        dob,
        Bio,
        Movie
    });

    try {
        const res = await axios.post('https://cors-anywhere.herokuapp.com/http://localhost:5000/api/Actor/AddActor', body, config)
        dispatch({
            type: AddActor_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            console.log(errors)
        }
        dispatch({
            type:AddActor_FAIL
        });
    }
}  
import axios from "axios";

export const getRequests =(type)=> async(dispatch) => {
    
    try{
        let response = await axios.post('https://githubmonitors.herokuapp.com/type',{
            type:type
        })
        dispatch({
            type:type,
            payload:response.data
        })
        
    }
    catch(err) {
        console.log(err);
    }
}
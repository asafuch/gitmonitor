import axios from "axios";

export const getRequests =(type)=> async(dispatch) => {
    //sending a post request (since heruko declined all get request to the server i decided to send it a post request)
    
    try{
        let response = await axios.post('https://githubmonitors.herokuapp.com/type',{
            type:type
        })
        dispatch({
            //type is changing via the variable passed to the function when called, reducer then knows how to differ between the 2 arrays
            type:type,
            //the retrieved data is then passed on 
            payload:response.data
        })
        
    }
    catch(err) {
        console.log(err);
    }
}
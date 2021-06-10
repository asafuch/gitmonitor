const initialState={
    commit:[],
    pull:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "commit":
            return{
                ...state,
                commit:action.payload
            }
        case "pull":
            return{
                ...state,
                pull:action.payload
            }
        default:return{
            ...state
        }
    }

}

export default reducer
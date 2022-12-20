const API ='https://shy-tan-ostrich-wear.cyclic.app/api'

export const getAllQuetions = () =>{
    return fetch(`${API}/quetions`)
    .then((res)=>res.json())
    .catch(err=>console.log(err));
}

export const getSolvedQuetions = (userId,token) =>{
    return fetch(`${API}/quetions/user/${userId}`,{
        method : 'GET',
        headers : {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addCompletedQuetion = (userId,qId,token) =>{
    return fetch(`${API}/quetions/user/${userId}/${qId}`,{
        method : "PUT",
        headers : {
            "Content-Type" : 'application/json',
            Authorization : `Bearer ${token}`
        }
        
    }).then(res=>res.json())
    .catch(err=>console.log(err));
}

export const deleteCompletedQuetion = (userId,qId,token) =>{
    return fetch(`${API}/quetions/user/${userId}/${qId}`,{
        method : "DELETE",
        headers : {
            "Content-Type" :'application/json',
            Authorization : `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err));
}

export const createDifficulty = (userId,token,type) =>{
    return fetch(`${API}/difficulty/create/${userId}`,{
        method : 'POST',
        headers : { 
            "Content-Type" : 'application/json',
            Authorization : `Bearer ${token}`
        },
        body : JSON.stringify(type)
        
    })
    .then(response => response.json())
    .catch(err=>console.log(err));
    
}

export const fetchDifficulties = (userId,token) =>{
    return fetch(`${API}/difficulties/${userId}`,{
        method : 'GET',
        headers : { 
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addProblem = (userId,token,data) =>{
    return fetch(`${API}/quetion/add/${userId}`,{
        method: 'POST',
        headers : {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export const getUserPoints = (userId,token) =>{
    return fetch(`${API}/user/${userId}/points}`,{
        method: 'GET',
        headers : {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}`
        }
    })
}

export const incUserPoints = (userId,token,qId) =>{
    return fetch(`${API}/user/${userId}/${qId}/inc`,{
        method: 'POST',
        headers : {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}`
        }
    })
}

export const decUserPoints = (userId,token,qId) =>{
    return fetch(`${API}/user/${userId}/${qId}/dec`,{
        method: 'POST',
        headers : {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}`
        }
    })
}
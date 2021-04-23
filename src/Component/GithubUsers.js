import React, { useState, useEffect } from 'react'

function GithubUsers() {
    const url = 'https://api.github.com/users'

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    
    const getUsers = async ()=>{
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    setIsLoading(false)
    }

useEffect(()=>{
    getUsers()
}, [])

let load;

if(isLoading){
    load =<i class="fa fa-circle-o-notch fa-spin" ></i>

}

  

    return (
        <div className='git' >
            <h3>Github Users </h3>

            { load }
           <div className="container">
             
           { users.map((user)=>{
                const { login, avatar_url, id, html_url} = user;
                return (<div className='users'>
                    <img src={ avatar_url} alt=""/>
                    <div className="text">
                    <h4>{ login }</h4>
                    <a href={ html_url }>profile</a>
                    </div>
                </div>)
            })}
           </div>
        </div>
    )
}

export default GithubUsers

const url = 'https://api.github.com/users'
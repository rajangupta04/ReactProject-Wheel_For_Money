import React from 'react'

function Home({userdetails , setUserDetails}) 
{
    console.log(userdetails);

    function handleLout()
    {
        setUserDetails(null);
    }

    return (
    <div>
        <h1>Home page</h1>
        <h1>hello : {userdetails.username}</h1>
        <button onClick={handleLout}> logout </button>
        <hr />
    </div>
        
    )
}

export default Home

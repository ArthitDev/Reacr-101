import React, { Component, useState, useEffect } from "react"
import logo from './assets/react.svg'
import axios from 'axios'

const App = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])


    async function getUsers() {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUsers()
        //     axios
        //         .get('https://jsonplaceholder.typicode.com/users')
        //         .then(res => setUsers(res.data))
        //         .catch(err => console.log(err))
    }, [])




    return (
        <div className="flex flex-col justify-center items-center gap-y-6 h-screen">
            <img src={logo} className="w-40 cursor-pointer" alt="react-logo" />
            <h1 className="font-bold text-2xl underline">This is React-101</h1>
            <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="block text-lg text-white bg-green-600 p-3 rounded-lg"
            >
                Count is : {count}
            </button>

            <ul>
                {users.map((user) => (<li key={user.id}>{user.name}</li>))}
            </ul>



            <button
                type="button"
                onClick={() => setCount(0)}
                className="block text-lg text-white bg-red-600 p-3 rounded-lg"
            >
                Reset
            </button>
        </div>
    )
}
export default App

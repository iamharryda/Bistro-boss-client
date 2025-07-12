import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"
import useAuth from "./useAuth"

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    const interceptorsSet = useRef(false)

    useEffect(() => {
        if (!interceptorsSet.current) {
            // Request interceptor
            axiosSecure.interceptors.request.use(
                config => {
                    const token = localStorage.getItem('access-token')
                    config.headers.authorization = `Bearer ${token}`
                    return config
                },
                error => Promise.reject(error)
            )

            // Response interceptor
            axiosSecure.interceptors.response.use(
                response => response,
                async error => {
                    const status = error.response?.status
                    // for 401 and 403 logout the user and move the user to the login page
                    if (status === 401 || status === 403) {
                        await logOut()
                        navigate('/login')
                    }
                    return Promise.reject(error)
                }
            )

            interceptorsSet.current = true
        }
    }, [logOut, navigate])

    return axiosSecure
}

export default useAxiosSecure


/* import axios from "axios"
import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth();
    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    })

    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        const status = error.response.status;
        console.log('status error in the interceptor', status);
        if (status === 401 || status === 403) {
            await logOut();
            setTimeout(() => navigate('/login'), 100)

        }
        return Promise.reject(error)
    })
    return axiosSecure;
}

export default useAxiosSecure */
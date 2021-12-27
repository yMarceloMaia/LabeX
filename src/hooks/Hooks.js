import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../constants/Constants"

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            history.push("/login")
        }
    }, [])
}

export const useGetList = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get(`${url}/trips`,)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
            })
    }
    return trips
}

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const cleanFields = () => {
        setForm(initialState);
    };

    return { form, onChange, cleanFields };
};

export default useForm;

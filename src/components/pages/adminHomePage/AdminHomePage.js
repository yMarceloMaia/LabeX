import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { headers, url } from '../../../constants/Constants'
import { useProtectedPage } from '../../../hooks/Hooks'

import deleteIcon3 from '../../img/deleteIcon3.png'
import loading from '../../img/loading.gif'

import * as C from './Styles'

export default function AdminHomePage() {
    const [trips, setTrips] = useState([])

    useProtectedPage()

    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreateTripPage = () => {
        history.push("/createTrip")
    }

    const logout = () => {
        history.push("/login")
        localStorage.clear()
    }

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get(`${url}/trips`,)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log('b', err.response)
            })
    }

    const deleteTrip = (id) => {
        axios.delete(`${url}/trips/${id}`, headers)
            .then((res) => {
                alert("Viagem deletada com sucesso!")
                getTrips()
            })
            .catch((err) => {
                alert("Não foi possível deletar a viagem, por favor tente de novo!")
            })
    }

    const listNameTrips = trips.map((trip) => {
        return (
            <C.TripDiv key={trip.id}>
                <p onClick={() => { history.push(`/tripDetails/${trip.id}`) }}>{trip.name}</p>
                <img src={deleteIcon3} onClick={() => deleteTrip(trip.id)} title="Deletar viagem" />
            </C.TripDiv>
        )
    })

    return (
        <div>
            <C.HeaderDiv>
                <h1>Painel Administrativo</h1>
                <div>
                    <button onClick={goToHomePage}>Voltar</button>
                    <button onClick={goToCreateTripPage}>Criar Viagem</button>
                    <button onClick={logout}>Logout</button>
                </div>
            </C.HeaderDiv>
            {listNameTrips.length ?
                <C.CardTripDiv>
                    {listNameTrips}
                </C.CardTripDiv> : <C.Loading><img src={loading} /></C.Loading>}
        </div>
    )
}

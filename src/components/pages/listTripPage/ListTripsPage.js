import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import loading from '../../img/loading.gif'

import * as C from './Styles'
import { useGetList } from '../../../hooks/Hooks'

export default function ListTripsPage() {
    const history = useHistory()

    const goBack = () => {
        history.push("/")
    }

    const goToApplicationFormPage = () => {
        history.push("/applicationForm")
    }

    const tripList = useGetList().map((trip) => {
        return (
            <C.CardDiv>
                <p><b>Nome: </b>{trip.name}</p>
                <p><b>Descrição: </b>{trip.description}</p>
                <p><b>Planeta: </b>{trip.planet}</p>
                <p><b>Duração: </b>{trip.durationInDays} dias</p>
                <p><b>Data: </b>{moment(trip.date).format('DD/MM/YYYY')}</p>
            </C.CardDiv>
        )
    })

    return (
        <C.ContainerDiv>
 
            <C.HeaderDiv>
                <button onClick={goBack}>Home</button>
                <h1>Lista de viagens</h1>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            </C.HeaderDiv>
            {tripList.length ? <C.TripDiv>
                {tripList}
            </C.TripDiv> : <C.Loading><img src={loading} /></C.Loading>}
        </C.ContainerDiv>
    )
}

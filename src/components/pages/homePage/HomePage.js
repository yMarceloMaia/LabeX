import React from 'react'
import { useHistory } from 'react-router-dom'

import * as C from './Styles'

export default function HomePage() {
    const history = useHistory()

    const goToListTripPage = () => {
        history.push("/listTrips")
    }

    const goToAdminPage = () => {
        history.push("/adminHomePage")
    }

    return (
        <C.MainDiv>
            <h1>LabeX</h1>
            <div>
                <button onClick={goToListTripPage}>Lista de viagens</button>
                <button onClick={goToAdminPage}>Área de Admin</button>
            </div>
        </C.MainDiv>
    )
}

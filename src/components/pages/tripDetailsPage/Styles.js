import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-device-width : 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }
    h1{
        font-family: courier;
        font-size: 40px;
        color: #21c0c2;
        text-align: center;
        margin-top: 50px;
    }
    p{
        width: 120px;
    }
    button{
        background: #3D94F6;
        background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -webkit-gradient(to bottom, #3D94F6, #1E62D0);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        height: 50px;
        color: #FFFFFF;
        font-family: Courier New;
        width: 120px;
        font-size: 25px;
        -webkit-box-shadow: 1px 1px 20px 0 #000000;
        -moz-box-shadow: 1px 1px 20px 0 #000000;
        box-shadow: 1px 1px 4px 0 #000000;
        text-shadow: 0 1px 10px #000000;
        border: solid #337FED 0;
        cursor: pointer;
        text-align: center;
        margin-top: 100px;
        :hover {
            border: solid #337FED 1px;
            background: #1E62D0;
            background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -webkit-gradient(to bottom, #1E62D0, #3D94F6);
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            text-decoration: none;
        }
    }
`
export const DivCandidate = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    box-shadow: 0px 0px 10px 2px black;
    background: #3D94F6;
    color: white;
    margin: auto;
    min-height: 360px;
    h2{
        text-align: center;
    }
    p{
        margin: 15px;
        font-size: 20px;
    }
    
    @media screen and (max-device-width : 480px) {
        width: 100vw;
    }
    section{
        display: flex;
        justify-content: space-evenly;
        width: 400px;
    }
`
export const ButtonAproved = styled.button`
        background: #3D94F6;
        background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -webkit-gradient(to bottom, #3D94F6, #1E62D0);
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        height: 40px;
        color: #FFFFFF;
        font-family: Courier New;
        font-size: 18px;
        -webkit-box-shadow: 1px 1px 20px 0 #000000;
        -moz-box-shadow: 1px 1px 20px 0 #000000;
        box-shadow: 1px 1px 4px 0 #000000;
        text-shadow: 0 1px 10px #000000;
        border: solid #337FED 0;
        cursor: pointer;
        text-align: center;
        margin-bottom: 10px;
        :hover {
            border: solid #337FED 1px;
            background: #1E62D0;
            background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -webkit-gradient(to bottom, #1E62D0, #3D94F6);
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            text-decoration: none;
        }
`

export const ButtonReprov = styled.button`
        background: #F63D3D;
        background-image: -webkit-linear-gradient(top, #F63D3D, #811616);
        background-image: -moz-linear-gradient(top, #F63D3D, #811616);
        background-image: -ms-linear-gradient(top, #F63D3D, #811616);
        background-image: -o-linear-gradient(top, #F63D3D, #811616);
        background-image: -webkit-gradient(to bottom, #F63D3D, #811616);
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        height: 40px;
        color: #FFFFFF;
        font-family: Courier New;
        font-size: 20px;
        -webkit-box-shadow: 1px 1px 20px 0 #000000;
        -moz-box-shadow: 1px 1px 20px 0 #000000;
        box-shadow: 1px 1px 4px 0 #000000;
        text-shadow: 0 1px 10px #000000;
        border: solid #337FED 0;
        cursor: pointer;
        text-align: center;
        margin-bottom: 10px;
        :hover {
            border: solid #ED3333 1px;
            background: #811616;
            background-image: -webkit-linear-gradient(top, #811616, #F63D3D);
            background-image: -moz-linear-gradient(top, #811616, #F63D3D);
            background-image: -ms-linear-gradient(top, #811616, #F63D3D);
            background-image: -o-linear-gradient(top, #811616, #F63D3D);
            background-image: -webkit-gradient(to bottom, #811616, #F63D3D);
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            text-decoration: none;
        }
`

export const TripDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    box-shadow: 0px 0px 10px 2px black;
    background: #3D94F6;
    color: white;
    margin: auto;
    margin-top: 50px;
    p{
        margin: 15px;
        font-size: 20px;
    }
    li{
        margin-left: 20px;
    }
    @media screen and (max-device-width : 480px) {
        width: 100vw;
    }
`

export const CandidatesDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-content: center;
    justify-items: center;
    margin: auto;
    max-width: 800px;
    margin-top: 20px;
    @media screen and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
}

`

export const Loading = styled.div`
    display: flex;
    height: 100vh;
    img{
        margin: auto;
        text-align: center;
    }
`
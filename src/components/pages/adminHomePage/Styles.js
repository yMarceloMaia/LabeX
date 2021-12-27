import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-device-width : 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        @media screen and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        height: 200px;
        }
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
        min-width: 120px;
        font-size: 25px;
        -webkit-box-shadow: 1px 1px 20px 0 #000000;
        -moz-box-shadow: 1px 1px 20px 0 #000000;
        box-shadow: 1px 1px 4px 0 #000000;
        text-shadow: 0 1px 10px #000000;
        border: solid #337FED 0;
        cursor: pointer;
        text-align: center;
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

export const TripDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    height: 70px;
    box-shadow: 0px 0px 10px 2px black;
    background: #3D94F6;
    color: white;
    p{
        margin: 15px;
        font-size: 20px;
        cursor: pointer;
        :hover{
            font-weight: bold; 
        }
    }
    button{
        margin-right: 10px;
    }
    img{
        width: 30px;
        margin-right: 10px;
        cursor: pointer;
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
    @media screen and (max-device-width : 480px) {
        width: 100vw;
    }

`

export const CardTripDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-content: center;
    justify-items: center;
    margin: auto;
    max-width: 800px;
    margin-top: 100px;
    @media screen and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
}

`

export const Loading = styled.div`
    display: flex;
    height: 70vh;
    img{
        margin: auto;
        text-align: center;
    }
`
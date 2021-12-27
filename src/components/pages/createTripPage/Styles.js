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

export const MainDiv = styled.div`
    background: #3D94F6;
    width: 50%;
    min-width: 400px;
    max-width: 800px;
    margin: auto;
    height: 382px;
    border-radius: 10px;
    @media screen and (max-device-width : 480px) {
        width: 100%;
}
    form{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
        margin-top: 140px;
        padding-top: 10px;
        input{
            margin: 10px 0px;
            height: 35px;
            border-radius: 10px;
            border: none;
        }
        select{
            margin: 10px 0px;
            height: 35px;
            border-radius: 10px;
            background-color: white;
            border: none;
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
            margin: auto;
            margin-top: 30px;
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
    };
`
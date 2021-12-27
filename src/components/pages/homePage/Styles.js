import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 70px;
        font-family: courier;
        color: #21c0c2;
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
        height: 100px;
        color: #FFFFFF;
        font-family: Courier New;
        width: 350px;
        font-size: 30px;
        -webkit-box-shadow: 1px 1px 20px 0 #000000;
        -moz-box-shadow: 1px 1px 20px 0 #000000;
        box-shadow: 1px 1px 4px 0 #000000;
        text-shadow: 0 1px 10px #000000;
        border: solid #337FED 0;
        cursor: pointer;
        text-align: center;
        margin: 0px 50px;
        margin-top: 30vh;
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
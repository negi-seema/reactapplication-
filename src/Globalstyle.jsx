import {createGlobalStyle} from 'styled-components'


 const GlobalStyle = createGlobalStyle`
*{
    margin:0px;
    box-sizing:border-box;
    padding:0px;
}

html{
    font-size:62.50%;
}

.container{
max-width:1200px;
margin:0 auto;
}

a{
    list-style:none;
    text-decoration:none;
}

`


export default GlobalStyle
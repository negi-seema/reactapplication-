import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
const Navbar = ()=>{
    return <>
   <Wrapper>
 <div className='nav__cnt'>  <NavLink to='/' className='nav__link '>HOME</NavLink></div>
   </Wrapper>
    </>
}

const Wrapper = styled.section`
margin-bottom:2rem;
.nav__cnt{
    padding:2rem  4rem;
    font-weight:900;
    background:#deeaee;
}
font-size:2rem;
.nav__link{
    color:#000000;
    &::after{
    content:'/';
    padding-left:1.3rem;
    font-weight:900;
    }
}
`
export default Navbar
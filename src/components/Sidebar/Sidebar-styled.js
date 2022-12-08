import styled from "styled-components"

export const StyledSidebar = styled.div`
background-color: #000;
position: fixed;
top: 64px;
left: 0;
width: 360px;
height: 100vh;
padding: 10px 0 0 30px;

nav {
color: #b2b2b2;
font-size: 20px;
margin-top: 60px;
}
nav div {
    margin-bottom: 20px;
}
nav a {
    color: #b2b2b2;
    text-decoration: none;
}
nav div a:hover {
    color: #fff
}
nav i {
    padding-right: 10px
}
`
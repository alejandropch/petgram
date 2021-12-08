import styled from 'styled-components'

export const Form = styled.form`
display:flex;
flex-direction:column;

padding:10px 4px;
align-items:center;
`

export const Input = styled.input`
border:0 solid;
border-bottom:1px #ccc solid;
box-shadow: none;
display:block;
margin: 10px 0;
min-width:220px;
width:40%;
:focus{outline:none;}
&[disabled]{
    opacity:0.5;
}
`
export const Button = styled.button`
background: #8d00ff;
border-radius:3px;
color:#fff;
height:32px;
display:block;
width:70%;
min-width:220px;
&[disabled]{
    opacity:0.5;
}
`
export const Title = styled.h2`
font-size:16px;
font-weight:500;
padding:8px 0px;
text-align:center;
`
export const Error = styled.span`
font-size:14px;
color:red;
`
export const MessageContainer = styled.div`
display:flex;
justify-content: center;

`

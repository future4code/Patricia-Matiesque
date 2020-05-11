import styled from "styled-components";


export const StyledMenuBar = styled.div`
    width: 100%;

`

export const ListMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	padding: 5px 20px;
`

export const ListItem = styled.li`
    margin: 0 20px;
    color: #4d38ae;
	padding: 10px 0;

    &:hover {
    box-shadow: inset 0 -1px 0 #4d38ae;
    }

`
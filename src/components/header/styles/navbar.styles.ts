import styled from "styled-components";
import { Theme } from "../../../models/theme.models";

const SNavbar = styled.nav<Theme>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme  }) => theme.bgNavbar};
    padding: 0 20px;
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        li {
            float: left;
        }
        
        li a {
            display: block;
            color: ${({ theme }) => theme.navText};
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
    }

`

export default SNavbar;

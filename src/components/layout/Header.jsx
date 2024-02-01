
import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Heading, IconButton} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContainerLg from "./Container";
import { darken, lighten } from "polished";

const Header = () => {
    return (
        <Box as="header" borderBottom={"1px solid"} borderColor={"#000000"}>
            <ContainerLg>
                <Box display={["block", null, "flex"]} h={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                    <Logo fontSize={24}>
                        <Link to="/">DashBoard</Link>
                    </Logo>
            <Nav>
                <NavList>
                    <li><Link to="/">Main Dashboard</Link></li>
                    <li><Link to="/marketplace">NFT Market</Link></li>
                    <li><Link to="/datatables">Data Tables</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/signin">Signin</Link></li>
                </NavList>
            </Nav>
            <IconBtnGroup>
                <IconButton aria-label="Search database" icon={<SearchIcon/>}/>
                <IconButton aria-label="Light database" icon={<SunIcon/>}/>
            </IconBtnGroup></Box>
            <ButtonGroup  spacing='6'>
            <Button variant='outline'>Save</Button>
            <Button variant="cancel">Cancel</Button>
            </ButtonGroup>
            </ContainerLg>
        </Box>
    )
}

const Logo = styled(Heading)`
    // color :  ${darken(0.2, '#ff0000')};
    color: ${(props) => lighten(0.1,props.theme.colors.red[300])};
    // color: ${(props) => (props).theme.colors.red[300]};
`

// const 변수이름 = styled.태그이름`속성 : 값;`
const Nav = styled.nav`
    width: 100%;
    height: 100%;
    background: ${lighten(0.1, 'lightblue')};
    margin: 0 20px ;
    @media screen and (min-width:380px) {
        height: 100px;
        
    }
`
const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 100%;
    padding: 0 10px;
    margin: 0;
    list-style: none;
    li {
        width: 100%;
        text-align: center;
    }
    a {
        display: block;
    }
    @media screen and (min-width:380px) {
        flex-direction: row;
        
    }
`
// const 변수이름 = styled(컴포넌트 이름)`속성 : 값;`
const IconBtnGroup = styled(ButtonGroup)`
    button {
        background: #fff;
    }
`
export default Header;
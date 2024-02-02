import { Box, Button, ButtonGroup, Container, Heading, IconButton} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import { PiHamburger } from "react-icons/pi";

const Header = () => {
    return (
        <Box as="header" position={"fixed"} top={0} left={0} right={0} zIndex={1000} bg="rgba(0,0,0,.1)" backdropFilter={'saturate(180%) blur(15px)'}>
            <Box display={["none", null, null, null,"block"]}h={"32px"} bg={"rgba(0,0,0,0.6)"}>
                <Container display="flex" justifyContent={"space-between"} alignContent={"center"} alignItems={"center"}>
                        <ButtonGroup gap={"10px"}>
                            <Button variant="tnb">공공기관용</Button>
                            <Button variant="tnb">금융 클라우드</Button>
                        </ButtonGroup>
                        <ButtonGroup gap={"10px"}>
                            <Button variant="tnb">로그인</Button>
                            <Button variant="tnb" color={"#4ca4f5"}>회원 가입</Button>
                            <Button variant="tnb">Languages</Button>
                        </ButtonGroup>
                </Container>
            </Box>
            <Box bg={"rgba(0,0,0,.05"} >
                <Container display={"flex"} alignItems={"center"} justifyContent={"space-between"} h={"60px"} >
                <Heading as={"h1"} fontSize={24}>
                    <Link to="/">Dash Board</Link>
                </Heading>
                    <Gnb/>
                    <ButtonGroup>
                        <IconButton variant='ghost' aria-label="Search database" icon={<SearchIcon />} />
                        <IconButton variant='ghost' aria-label="Light database" icon={<SunIcon />} />
                    </ButtonGroup>
                    <Button display={{ sm: "flex", lg: "none"}} >
                        <PiHamburger />
                    </Button>

                </Container>
            </Box>
        </Box>
    )
}


export default Header;
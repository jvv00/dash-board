import { Box, Container, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box as="header" borderBottom={"1px solid"} borderColor={"#ff0000"}>
            <Container display={["block", null ,"flex"]} justifyContent={"space-between"}>
            <Heading style={{width: "50px", height: "100%"}}>
                <Link to="/">DashBoard</Link>
            </Heading>
            <nav>
                <ul>
                    <li><Link to="/">Main Dashboard</Link></li>
                    <li><Link to="/marketplace">NFT Market</Link></li>
                    <li><Link to="/datatables">Data Tables</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/signin">Signin</Link></li>
                </ul>
            </nav>
            </Container>
        </Box>
    )
}

export default Header;
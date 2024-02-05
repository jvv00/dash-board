import { Box } from "@chakra-ui/react";
import Footer from "./Footer"
import Header from "./Header"

const 
Layout = (props) => {
    
    return (
        <>
        <Box display={"flex"} flexDirection={"column"} minH={"150vh"}>
            <Header/>
                <Box as="main" id="main" flexGrow={1} pt={{sm: "60px", lg: "92px"}}>
                {props.showTitle && <h2>{props.title}</h2>}
                    {props.children}
                </Box>
            <Footer/>
        </Box>
        </>
    )
}

export default Layout;
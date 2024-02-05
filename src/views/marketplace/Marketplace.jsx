import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
// import { motion } from "framer-motion";
// import topImg from 

const Marketplace = () => {

// const boxStyle = {
//     width: "200px",
//     height: "200px",
//     background: "red",
//     borderRadius: "50%",
// }

    return (
        <Layout title="marketplace" showTitle={false}>
            <div>
            {/* <h2>Marketplace</h2> */}
            </div>
            {/* <motion.div 
            style={boxStyle} 
            initial={{ opacity: 0 }} 
            animate={{opacity: 1, x: 100}}
            transition={{ duration: 2, ease: "easeInOut",}}
            /> */}
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>모두</Tab>
                    <Tab>아트</Tab>
                    <Tab>게이밍</Tab>
                    <Tab>멤버십</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    
                    </TabPanel>
                    <TabPanel>
                    
                    </TabPanel>
                    <TabPanel>
                    
                    </TabPanel>
                    <TabPanel>
                    
                    </TabPanel>
                </TabPanels>
                </Tabs>
        </Layout>
        
    )
}

export default Marketplace;
import { Divider, Heading, Text, VStack } from "@chakra-ui/react";

// import EstimateGas from "../components/EstimateGas";
import EtherWeiConverter from "../components/EtherWeiConverter";
import StringHexConverter from "../components/StringHexConverter";
import WhiteboardGrid from "../components/WhiteboardGrid";
import IPFSUploader from "components/IPFSUploader";

const Home = () => {
  return (
    <VStack>
      {/* <EstimateGas /> */}
      <Heading>IPFS Uploader</Heading>
      <IPFSUploader />
      <Heading>bytes32/hex - string/utf8</Heading>
      <Text>https://www.epochconverter.com/</Text>
      <StringHexConverter />
      <Divider py="4" />
      <Heading>wei - ether</Heading>
      <EtherWeiConverter />
      <Divider py="4" />
      <Heading>Whiteboard</Heading>
      <WhiteboardGrid />
    </VStack>
  );
};

export default Home;

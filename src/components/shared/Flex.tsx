import styled from "styled-components";

interface FlexPropsInterface {
  width?: string;
  minWidth?: string;
  height?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  gap?: string;
  overflowX?: string;
  position?: string;
  flexDirection?: string;
}

export const Flex = styled.div<FlexPropsInterface>`
  display: flex;

  width: ${(props) => props.width || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: ${(props) => props.alignItems || "start"};
  background: ${(props) => props.background || "none"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  gap: ${(props) => props.gap || "0"};
  overflow-x: ${(props) => props.overflowX || "auto"};
  position: ${(props) => props.position || "auto"};
  flex-direction: ${(props) => props.flexDirection || "row"}
  
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;

  & > .input-class {
    width: 75%;
    height: 40px;
    margin: 15px auto;
    border-radius: 5px;
    font-size: 15px;
    outline: none;
    border: 1px solid #385418;
    background-color: lightgrey;
  }

  & > .input-class::placeholder {
    padding: 5px;
    font-size: 18px;
    color: #868686;
    font-family: "Acme", sans-serif;
    font-family: "Catamaran", sans-serif;
    font-family: "Chakra Petch", sans-serif;
    font-family: "Tektur", cursive;
  }

  & > h1 {
	color: #2b6b0f;
  }

  & > button {
	font-family: "Acme", sans-serif;
    font-family: "Catamaran", sans-serif;
    font-family: "Chakra Petch", sans-serif;
    font-family: "Tektur", cursive;
	font-size: 20px;
	margin: 30px 10px auto ;
	width: 76%;
	height: auto;
	background-color: #2b6b0f;
	border-radius: 5px;
	color: white;
  }
`;

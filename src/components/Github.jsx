import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getData } from "./api";
import Card from "./Card";
import { Button, Text } from "@chakra-ui/react";
import {
  Stack,
  Flex,
  Box,
  VStack,
  Input,
  Heading,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Github = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const handleData = (text, page) => {
    setLoading(true);
    getData(text, page)
      .then((res) => {
        setData(res.data.items);
      })

      .catch((err) => {
        setError(true);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getData(text ? text : "github", page)
      .then((res) => {
        setData(res.data.items);
      })

      .catch((err) => {
        setError(true);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const handleClick = () => {
    setPage(1);
    handleData(text, page);
  };

  return (
    <div
    // style={{backgroundColor:"white"}}
    >
      <Box>
        <Flex
          w={"full"}
          h={"auto"}
          backgroundImage={
            "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
          }
          backgroundSize={"cover"}
          marginBottom={"50px"}
          backgroundPosition={"center center"}
        >
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          >
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
             
              {/* <Box marginLeft={"200%"} > */}
          
              {/* </Box> */}
              
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                marginTop={"50px"}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                Github Profile Seeker
                <Button marginLeft={"30px"} bg={"blue.400"} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              </Text>
             
              <Box display={"flex"}>
                <Input
                  color={'white'}
                  marginRight={"2rem"}
                  type="text"
                  fontSize={"20px"}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <Button
                  disabled={loading}
                  onClick={handleClick}
                  bg={"blue.400"}
                  paddingLeft={"25px"}
                  paddingRight={"25px"}
                  // rounded={'full'}
                  // color={'white'}
                  _hover={{ bg: "blue.500" }}
                >
                  {loading ? "Loading" : "Search"}
                </Button>
              </Box>
              <Stack direction={"row"} paddingBottom={"50px"}>
                <Button
                  disabled={page === 1}
                  onClick={() => {
                    setPage(page - 1);
                  }}
                  bg={"blue.400"}
                  paddingLeft={"25px"}
                  paddingRight={"25px"}
                  // rounded={'full'}
                  // color={'white'}
                  _hover={{ bg: "blue.500" }}
                >
                  PREV
                </Button>
                <Text fontSize="2xl" color={"white"}>
                  {page}
                </Text>
                <Button
                  onClick={() => {
                    setPage(page + 1);
                  }}
                  bg={"blue.400"}
                  paddingLeft={"25px"}
                  paddingRight={"25px"}
                  // rounded={'full'}
                  // color={'white'}
                  _hover={{ bg: "blue.500" }}
                >
                  NEXT
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
      </Box>

      {/* <div>
      <h1>Github</h1>
        <input style={{border:"1px solid" , borderRadius:"5px"}} type="text" onChange={(e)=>{setText(e.target.value)}}/>
        <button disabled={loading} onClick={handleClick}>{loading?"Loading":"Search"}</button>
      </div>
      <div>
       <Button disabled={page===1} onClick={()=>{setPage(page+1)}}>PREV</Button>
       <Text >{page}</Text>
       <Button  onClick={()=>{setPage(page+1)}}>NEXT</Button>
      </div> */}

      <div>
        {loading && <p>loading..</p>}
        {data?.map((user) => (
          <div key={user.id}>
            <Card key={user.id} data={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Github;

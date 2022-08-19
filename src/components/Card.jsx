import React from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const Card = ({ data }) => {
  console.log(data);

  const [follow, setFollow] = useState(false);
  const [userfollow, setUserFollow] = useState(data.followers_url.length);
  return (
    <div>
      {/* {data.login} */}
      <Box>
        <Center py={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            // bg={useColorModeValue('white', 'white')}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image objectFit="cover" boxSize="100%" src={data.avatar_url} />
            </Flex>
            <Stack
              // bg={"white"}
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                // color={"black"}
              >
                {data.login}
              </Heading>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                ID : {data.id}
              </Text>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                Type : {data.type}
              </Text>

              <Text
                textAlign={"center"}
                // color={"black"}
                px={3}
              >
                Engineer, programmer and musician. PM for work inquires
                
                or
                <Link href={"#"} color={"blue.400"}>
                  #tag
                </Link>
                me in your posts
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  // bg={"black"}
                  // color={"white"}
                  fontWeight={"400"}
                >
                  #art
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // bg={"black"}
                  // color={"white"}
                  fontWeight={"400"}
                >
                  #coder
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  // bg={"black"}
                  // color={"white"}
                  fontWeight={"400"}
                >
                  #passion
                </Badge>
              </Stack>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                Followers : {userfollow}
              </Text>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  // color={'white'}
                  bg={"blue.400"}
                >
                  <a
                    href={data.html_url}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    View Profile
                  </a>
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  // color={'white'}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  onClick={() => {
                    return (
                      <>
                        {setFollow(!follow)}
                        {follow
                          ? setUserFollow(userfollow + 1)
                          : setUserFollow(userfollow - 1)}
                      </>
                    );
                  }}
                >
                  {follow ? "Unfollow" : "Follow"}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};

export default Card;

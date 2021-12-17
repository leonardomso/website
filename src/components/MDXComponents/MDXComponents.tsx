import React from "react";
import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  UnorderedList,
  OrderedList,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link {...props} />
      </NextLink>
    );
  }

  return <Link isExternal {...props} />;
};

const Quote = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const HeadingOne = (props) => (
  <Heading
    color="#101010"
    as="h1"
    fontSize={36}
    letterSpacing="-0.03em"
    textAlign="start"
    fontWeight="600"
    {...props}
  />
);

const HeadingTwo = (props) => (
  <Heading
    color="#101010"
    as="h2"
    fontSize={36}
    letterSpacing="-0.03em"
    textAlign="start"
    fontWeight="600"
    {...props}
  />
);

const HeadingThree = (props) => (
  <Heading
    color="#101010"
    as="h3"
    fontSize={36}
    letterSpacing="-0.03em"
    textAlign="start"
    fontWeight="600"
    {...props}
  />
);

const HeadingFour = (props) => (
  <Heading
    color="#101010"
    as="h4"
    fontSize={36}
    letterSpacing="-0.03em"
    textAlign="start"
    fontWeight="600"
    {...props}
  />
);

const HeadingFive = (props) => (
  <Heading
    color="#101010"
    as="h5"
    fontSize={36}
    letterSpacing="-0.03em"
    textAlign="start"
    fontWeight="600"
    {...props}
  />
);

const HeadingSix = (props) => (
  <Heading
    color="#101010"
    as="h6"
    fontSize={36}
    letterSpacing="-0.03em"
    textAlign="start"
    fontWeight="600"
    {...props}
  />
);

const InlineCode = (props) => (
  <Code
    fontSize={14}
    fontWeight="600"
    bgColor="#F3F3F3"
    color="#6F6F6F"
    borderRadius="2px"
    pl={1}
    pr={1}
    {...props}
  />
);

const BreakLine = (props) => <Box height="20px" {...props} />;

const HorizontalLine = (props) => (
  <Divider orientation="horizontal" {...props} />
);

const Paragraph = (props) => (
  <Text
    color="#6F6F6F"
    fontSize={16}
    lineHeight="30px"
    textAlign="start"
    {...props}
  />
);

const Unordered = (props) => <UnorderedList {...props} />;

const Ordered = (props) => <OrderedList {...props} />;

const Item = (props) => <ListItem {...props} />;

const MDXComponents = {
  h1: HeadingOne,
  h2: HeadingTwo,
  h3: HeadingThree,
  h4: HeadingFour,
  h5: HeadingFive,
  h6: HeadingSix,
  inlineCode: InlineCode,
  br: BreakLine,
  hr: HorizontalLine,
  a: CustomLink,
  p: Paragraph,
  ul: Unordered,
  ol: Ordered,
  li: Item,
  blockquote: Quote,
};

export { CustomLink };

export default MDXComponents;

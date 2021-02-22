import React, { ReactNode } from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { ArticleJsonLd, NextSeo } from 'next-seo';

import { ARTICLES_BLOG_URL, AUTHOR_NAME, AUTHOR_IMAGE } from "src/utils/constants";

interface Props {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
  slug: string;
  content: ReactNode;
}

const Article = ({ readingTime, title, description, date, slug, content }: Props) => {
  return (
    <article>
      <NextSeo
        title={title}
        description={description}
        canonical={`${ARTICLES_BLOG_URL}/${slug}`}
        openGraph={{
          url: `${ARTICLES_BLOG_URL}/${slug}`,
          title: title,
          description: description,
          images: [
            { url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${title}` },
          ],
          site_name: title,
        }}
      />
      <ArticleJsonLd
        url={`${ARTICLES_BLOG_URL}/${slug}`}
        title={title}
        images={[AUTHOR_IMAGE]}
        datePublished={date}
        authorName={AUTHOR_NAME}
        publisherName={AUTHOR_NAME}
        publisherLogo={AUTHOR_IMAGE}
        description={description}
      />
      <Stack direction="column" spacing="50px">
        <Stack direction="column" spacing="20px">
          <Heading
            color="#101010"
            as="h1"
            fontSize="clamp(2em, 2em + 2vw, 3em)"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {title}
          </Heading>

          <Stack direction="row" spacing="10px">
            <Text width="fit-content" fontSize="16px" lineHeight="30px">
              {date}
            </Text>

            <Text width="fit-content" fontSize="16px" lineHeight="30px">
              ·
            </Text>

            <Text width="fit-content" fontSize="16px" lineHeight="30px">
              {readingTime.text}
            </Text>
          </Stack>
        </Stack>

        <Stack fontSize="16px" lineHeight="30px" direction="column" spacing="20px">{content}</Stack>
      </Stack>
    </article>
  );
};

export default Article;

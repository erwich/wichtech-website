import React, { Fragment } from "react"
import { useColorMode } from "theme-ui"
import { Jumbotron } from "reactstrap"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

type blogProps = {
    title: string;
    content: string;
    date: string;
}

deckDeckGoHighlightElement();

const BlogPost = ({ title, content, date }: blogProps ) => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <>
            <div className="blog-post">
                <Jumbotron
                    className={ colorMode == "dark" ? "bg-dark" : "bg-light" }
                >
                    <h1>{ title }</h1>
                    <p
                        className="font-weight-bold small"
                    >
                        Published: { date }
                    </p>
                </Jumbotron>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </>
    )
}

export default BlogPost
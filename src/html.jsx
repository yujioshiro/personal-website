import React from "react";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* <link href="../../../static/stylesheets/styles.css" rel="stylesheet"/> */}
        <meta charset="UTF-8" />
        <meta name="description" content="Yuji Oshiro's portfolio and blog" />
        <meta name="author" content="Yuji Oshiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
      {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

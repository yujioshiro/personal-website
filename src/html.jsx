import React from "react";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* <link href="../../../static/stylesheets/styles.css" rel="stylesheet"/> */}
        <meta charSet="UTF-8" />
        <meta name="description" content="The things Yuji Oshiro does" />
        <meta name="author" content="Yuji Oshiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="darkreader-lock" />

        <title>Yuji Oshiro</title>
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

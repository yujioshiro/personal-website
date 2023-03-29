import * as React from "react"
import Layout from "../../components/Layout"

const Resume = () => {
  const objectRef = React.useRef(null)

  const updateHeight = () => {
    setTimeout(() => {
      const objectElement = objectRef.current
      const { width } = objectElement.getBoundingClientRect()
      const aspectRatio = 1.2941 // Replace with the aspect ratio of PDF
      const height = width * aspectRatio
      objectElement.style.height = `${height}px`
      console.log('Height updated:', height)
    }, 30)
  }

  React.useEffect(() => {
    updateHeight();
  }, [])

  React.useEffect(() => {
    window.onresize = updateHeight;
  })

  return (
    <Layout>
      <div style={{ maxWidth: "700px", margin:"2vh auto",filter:"brightness(85%)"}}>
        <object ref={objectRef} data={`../resume/YujiOshiroResume.pdf?v=${new Date().getTime()}`} type="application/pdf" width="100%">
          <p>Unable to display PDF. Please <a href="../resume/YujiOshiroResume.pdf" title="Download YujiOshiroResume.pdf" download>download</a> it instead.</p>
        </object>
      </div>

    </Layout>
  )
}

export default Resume;

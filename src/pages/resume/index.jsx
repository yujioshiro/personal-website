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
        <object ref={objectRef} data="../resume/resume.pdf" type="application/pdf" width="100%" height="905px">
            <p>PDF cannot be displayed. Please download it instead.</p>
        </object>
    </Layout>
  )
}

export default Resume;

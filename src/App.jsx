import { useRef, useState, useEffect } from 'react'
import './App.css'


function App() {

  const screen = useRef(null)
  const [mode, setMode] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    screen.current.focus()
  }, [])

  const handleKeyUp = (e) => {
    if (e.key === 'c')
      setMode(!mode)
  }
  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
  }
  return (
    <>
      <div ref={screen} onMouseMove={handleMouseMove} tabIndex={0} onKeyUp={handleKeyUp} className='screen'>

        <img src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/1bcedaff-72ea-4cf0-a688-4c8b5a54a87a/websites_how-to_2x.png" width={1600} height={730} alt="" />


        {mode && (<div> yorum modu aktif </div>)}
      </div>
    </>
  )
}

export default App

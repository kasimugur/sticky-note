import { useContext, useState } from "react"
import Draggable from "react-draggable"
import { MainContext } from "../context"

export default function Note(note) {
  const [visible, setVisible] = useState(false)
  const [clickable, setClickable] = useState(true)
  const { setMode, notes, setNotes } = useContext(MainContext)

  const showNote = () => {
    if (clickable) {
      setVisible(!visible)
    }
  }
  const setNotPosition = (e, data) => {
// const currentNote = notes.find(n => n.number === note.number);
// currentNote.position = {
//   x: data.x,
//   y: data.y
// }
// setNotes([...notes.filter(n => n.number !== note.number), currentNote])
const newNotes = notes.map(n => {
  if (n.number === note.number){
    n.position = {
      x: data.x,
      y: data.y,
    }
  }
  return n
})  
setNotes(newNotes)
}
  return (
    <>
      <Draggable onDrag={() => setClickable(false)}
      onStart={() => setClickable(true)} onStop={setNotPosition}
      defaultPosition={{ x: note.position.x, y: note.position.y }}>
        <div
          onMouseEnter={() => setMode(false)}
          onMouseLeave={() => setMode(true)}
          className="note-container" style={{
            '--color': note.color,
            position: 'absolute',
            top: 0,
            left: 0
          }}>
          <span onClick={showNote} className="note-box-number">{(note.number + 1) - 1} </span>
          <div className="note" style={{ display: visible ? 'flex' : 'none' }}>
            {note.note}
          </div>
        </div>
      </Draggable>
    </>
  )
}
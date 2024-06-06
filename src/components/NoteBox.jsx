import { useContext } from "react"
import { MainContext } from "../context"

export default function NoteBox() {
  const { boxPosition } = useContext(MainContext)
  return (
    <>
      <div style={{position: 'absolute' , top: boxPosition.y , left: boxPosition.x}}>
        not kutusu
      </div>
    </>
  )
}
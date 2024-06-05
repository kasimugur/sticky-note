import { useContext } from "react"
import { MainContext } from "../context"

export default function LeaveCommentText() {
  const { position } = useContext(MainContext)
  return (
    <>
      <div style={{ position: 'fixed', top: position.y, left: position.x }}> yorum yazmak için tıkla</div>
    </>
  )
}
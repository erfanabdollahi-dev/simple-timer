import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

const tick = ()=>{
  const elem = (
    <div>
      <h1>hello dear friends</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  root.render(elem)
}
const kir = (
    <div>
      <h1>kir</h1>
    </div>
)
setInterval(tick, 1000)


import { FC } from "react"

type HelloProps = {
  name: string
}

const HelloApp: FC<HelloProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>
}

export default HelloApp

import { createContext } from "react"

export const dataContext = createContext()

// eslint-disable-next-line react/prop-types
const DataProvider = ({ Children }) => {
  return (
    <dataContext.Provider>
      {Children}
    </dataContext.Provider>
  )
}

export default DataProvider
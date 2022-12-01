import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { githubAction } from "../store/github/github.slice"

const action = {
  ...githubAction
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(action, dispatch)
}
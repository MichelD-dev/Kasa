import {InputHTMLAttributes} from 'react'

const Input = ({...props}: InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} />
)

export default Input

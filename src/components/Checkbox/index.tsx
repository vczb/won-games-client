import * as S from './styles'
import { InputHTMLAttributes, useState } from 'react'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox

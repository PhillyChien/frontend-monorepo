import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  color: 'primary' | 'secondary';
}

const Button = (props: ButtonProps) => {
  const { color } = props;
  return <button {...props} style={
    {
      backgroundColor: color === 'primary' ? 'blue' : 'red'
    }
  }/>;
}

export default Button;
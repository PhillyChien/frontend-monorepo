import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  color: 'primary' | 'secondary';
}

const Button = (props: ButtonProps) => {
  const { color } = props;

  return (
    <button
      className={`${color === 'primary' ? 'bg-blue-500' : 'bg-red-500'} text-white rounded-md p-2`}
      {...props}
      style={{
        backgroundColor: color === 'primary' ? 'blue' : 'red',
      }}
    />
  );
};

export default Button;

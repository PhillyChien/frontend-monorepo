interface NumberInputProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = (props: NumberInputProps) => {
  const { value, onChange } = props;
  return <input {...props} type="number" value={value} onChange={onChange} />;
}

export default NumberInput;
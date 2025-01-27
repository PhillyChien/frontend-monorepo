interface NumberInputProps {
  value: number;
  label?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = (props: NumberInputProps) => {
  const { value, onChange, disabled = false, label } = props;
  return (
    <div className="flex justify-between items-center">
      <label className="text-xl font-bold">{label}</label>
      <input
        {...props}
        type="number"
        value={value}
        onChange={onChange}
        className="border-2 border-gray-300 rounded-md p-2"
        disabled={disabled}
      />
    </div>
  );
};

export default NumberInput;

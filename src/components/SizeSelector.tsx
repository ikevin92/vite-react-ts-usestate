import { FC } from 'react';

const possibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

interface Props {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export const SizeSelector: FC<Props> = ({ selectedSize, onSizeChange }) => {
  return (
    <div style={{ display: 'flex' }}>
      {possibleSizes.map((size) => (
        <button
          key={size}
          onClick={() => onSizeChange(size)}
          className={selectedSize === size ? 'active' : ''}>
          {size}
        </button>
      ))}
    </div>
  );
};

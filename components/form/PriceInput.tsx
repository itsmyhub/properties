import { Label } from '@/components/ui/label';
import { Input } from '../ui/input';
import { Prisma } from '@prisma/client';

const name = Prisma.PropertyScalarFieldEnum.price;
// const name = 'price';

type FormInputNumberProps = {
  defaultValue?: number;
};
type PriceInputProps = {
  defaultValue?: number;
};

export default function PriceInput({ defaultValue }: PriceInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Price ($)
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

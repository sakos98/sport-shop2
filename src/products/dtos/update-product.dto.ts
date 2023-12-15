import { Transform } from 'class-transformer';
import {
  IsInt,
  IsString,
  Length,
  Min,
  IsNotEmpty,
} from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  name: string;

  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    const parsedValue = parseFloat(value); // Przekształcenie wartości na liczbę
    if (isNaN(parsedValue)) {
      throw new Error('Invalid number provided for price');
    }
    return parsedValue;
  })
  price: number;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.join(', ');
    } else if (value === '') {
      return null; 
    } else {
      return value;
    }
  })
  description: string;

  @IsNotEmpty()
  @IsString()
  photo: string;
}
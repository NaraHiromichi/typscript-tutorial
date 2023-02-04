const number: number = 1;
const str: string = "hello";
const isLoading: boolean = false;

interface Props {
  num1: number;
  num2: number;
}

const calculate = ({ num1, num2 }: Props): number => {
  return num1 + num2;
};

calculate({ num1: 1, num2: 3 });

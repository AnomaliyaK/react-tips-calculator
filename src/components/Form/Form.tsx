import React, { FormEvent, useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { TipsOption } from '../../types/types';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Input } from '../Input/Input';
import { StyledForm, Title, Subtitle, Total, InputGroup } from './styles';

const options: TipsOption[] = [
  { value: 0.1, label: '10%' },
  { value: 0.15, label: '15%' },
  { value: 0.2, label: '20%' },
];

export const Form = () => {
  const bill = useInput('');
  const persons = useInput('');
  const [total, setTotal] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const [select, setSelect] = useState<TipsOption>(options[0]);

  // const onChange = (event: TipsOption | null) => {
  //   if (event) {
  //     setSelect(event);
  //   }
  // };

  const handleTotal = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTotal(
      (Number(bill.value) * (1 + Number(select.value))) / Number(persons.value)
    );
  };

  useEffect(() => {
    bill.value && persons.value && bill.value !== '0' && persons.value !== '0'
      ? setDisabled(false)
      : setDisabled(true);
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Subtitle>Let's go calculate your tips</Subtitle>
      <InputGroup>
        <Input placeholder="Enter bill" type="number" {...bill} />
        <Input placeholder="Enter persons" type="number" {...persons} />
        <CustomSelect value={select} onChange={setSelect} options={options} />
      </InputGroup>
      <Total>Total: {total.toFixed(2)} $</Total>
      <Button type="submit" isDisabled={isDisabled} />
    </StyledForm>
  );
};

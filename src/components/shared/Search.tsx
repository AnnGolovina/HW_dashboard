import React, {useState, FC, useCallback, SyntheticEvent, useContext} from 'react';
import { FlexRow } from './Flex';
import {ImCancelCircle} from "react-icons/im";
import { SearchContext } from '../../contexts/SearchContext';

//export type SynteticHTMLInputEvent = SyntheticEvent<HTMLInputElement & {value: string}>
export type HTMLInputEvent = { target: { value: string, name: string } };
interface PropsInterface {

}

export const Search: FC<PropsInterface> = () => {
  const { value, setValue } = useContext(SearchContext)!;

	console.log(value, "Render");

	const onChange = useCallback((event: HTMLInputEvent) => {
		//SyntheticEvent<HTMLInputElement> - працює на трохи ранніх версіях React
		//ChangeEventHandler<HTMLInputElement> краще він -  більш стабільний
		//{target: {value: string}
		setValue(event.target.value);
	}, []);

	const onClear = useCallback(() => {
		setValue("")
	}, []);

  return (
	<FlexRow width='100%' justifyContent='center' padding='10px' gap='10px'>
		<input value={value} onChange={onChange} placeholder='Search' type="text" />
		<span onClick={onClear} style={{ cursor: 'pointer' }}>
                <ImCancelCircle size="20px" />
            </span>
	</FlexRow>
  )
}

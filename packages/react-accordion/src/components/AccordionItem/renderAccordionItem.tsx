import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { AccordionItemState, AccordionItemSlots } from './AccordionItem.types';
import { accordionItemShorthandProps } from './useAccordionItem';
import { AccordionItemContext, useAccordionItemContextValue } from './AccordionItemContext';

/**
 * Function that renders the final JSX of the component
 */
export const renderAccordionItem = (state: AccordionItemState) => {
  const { slots, slotProps } = getSlots<AccordionItemSlots>(state, accordionItemShorthandProps);

  // TODO: either render function should be a hook or this hook should not be called here
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const value = useAccordionItemContextValue(state);

  return (
    <slots.root {...slotProps.root}>
      <AccordionItemContext.Provider value={value}>{state.children}</AccordionItemContext.Provider>
    </slots.root>
  );
};

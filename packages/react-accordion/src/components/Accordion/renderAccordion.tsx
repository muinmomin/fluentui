import { getSlots } from '@fluentui/react-utilities';
import * as React from 'react';
import { AccordionContext } from './AccordionContext';
import type { AccordionState, AccordionSlots, AccordionContextValues } from './Accordion.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderAccordion = (state: AccordionState, contextValues: AccordionContextValues) => {
  const { slots, slotProps } = getSlots<AccordionSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <AccordionContext.Provider value={contextValues.accordion}>{state.children}</AccordionContext.Provider>
    </slots.root>
  );
};

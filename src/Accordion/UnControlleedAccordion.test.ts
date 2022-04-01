import {CollapsedAccordionAC, CollapsedAccordionAT, reducer, StateType} from "./Reducer";
import {action} from "@storybook/addon-actions";


test('collapsed should be false', () => {
    // let todolistId1 = v1();
    // let todolistId2 = v1();

    const startState: StateType =
        {collapsed: true}

    const endState = reducer(startState, CollapsedAccordionAC())

    expect(endState.collapsed).toBe(false);

});

test('collapsed should be true', () => {
    // let todolistId1 = v1();
    // let todolistId2 = v1();

    const startState: StateType =
        {collapsed: false}

    const endState = reducer(startState, CollapsedAccordionAC())

    expect(endState.collapsed).toBe(true);

});
test('collapsed should be error', () => {
    // let todolistId1 = v1();
    // let todolistId2 = v1();

    const startState: StateType =
        {collapsed: false}

    expect(() => {
        reducer(startState, {type: "FAKETYPE"})
    }).toThrowError()
});
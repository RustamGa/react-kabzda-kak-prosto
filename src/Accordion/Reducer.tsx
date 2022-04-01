export type StateType = {
    collapsed: boolean
}
export type CollapsedAccordionAT = {
    type: string
}
export const TOGGLE_CONSTANT = "TOGGLE-CONSTANT"

export const reducer = (state: StateType, action: CollapsedAccordionAT): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("Bad action type")
    }
    return state
}
export const CollapsedAccordionAC = (): CollapsedAccordionAT => {
    return {type: "TOGGLE-CONSTANT"}
}
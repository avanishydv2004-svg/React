import { createContext, useReducer } from "react";
// 1. create context
export const ThemeContext = createContext();   //data create
// 2. initial state
const initialState = {
    theme: "light"
};
// 3. reducer
function themeReducer(state, action) {
    console.log("Reducer function is running");
    console.log("Current state:", state);
    console.log("Action received:", action);

    switch (action.type) {
        case "TOGGLE_THEME":
            console.log("TOGGLE_THEME case is running");
            const newTheme =
             state.theme === "light" ? "dark" : "light";
            console.log("New theme:", newTheme);
            return {
                theme: newTheme
            };
            }
        }

        export function ThemeProvider({ children }) {
            console.log("ThemProvider function is running");

            const [state, dispatch] = useReducer(
                themeReducer, 
                initialState
            );
            console.log("Current Theme:", state.theme);

            return (
                <ThemeContext.Provider value={{ state, dispatch }}>
                    {children}
                </ThemeContext.Provider>
            );
        }
        
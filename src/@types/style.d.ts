import "styled-components"
import { defaultTheme } from "../styles/themes/default"

// this create a default typescript typing for it;

type ThemeType = typeof defaultTheme;
// transform defaulTheme into a type

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}

/* ---

- We're importing styled-components
- We are declaring a module, that is, we are creating a type for that module. But, once we are importing it (and not creating it), we will actually be adding something to it.
- export interface DefaultTheme {} is something that is located inside configs of styled-component module, by redeclaring it that way, we are telling styled-component to "implement" our created-type to it (extends will "merge" it).

--- */

// this all will fit for we to have a more intelligent suggestions at everywhere we use this theme (by pressing ctrl + spacebar), for instance: `background-color: ${props => props.theme.(SUGGESTIONS WE'VE CREATED WILL APPEARS AT THIS POINT)};`
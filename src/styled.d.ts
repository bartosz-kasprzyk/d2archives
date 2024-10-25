import "styled-components";
import { theme } from "./common/config/theme";

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme { }
}
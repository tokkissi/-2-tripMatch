import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      pink: string;
      lightpink: string;
      blue: string;
      lightblue: string;
    };
  }
}

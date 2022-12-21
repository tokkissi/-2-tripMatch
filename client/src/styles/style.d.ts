import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      pink: string;
      lightpink: string;
      blue: string;
      lightblue: string;
    };

    font: {
      title: string;
      content: string;
      XL: string;
      L: string;
      M: string;
      S: string;
      XS: string;
    };
  }
}

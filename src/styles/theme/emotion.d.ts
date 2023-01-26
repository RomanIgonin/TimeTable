import '@emotion/react';

interface Colors {
  white: string;
  blue: string;
  gray: string;
}

declare module '@emotion/react' {
  export interface Theme {
    color: Colors;
  }
}

interface PagarMeModelInterface {
  client?: any;
  transactions?: ReadonlyArray<any>;
}

declare module 'pagarme' {
  export const client: {
    connect: any;
    [key: string]: any;
  };
  export function transactions(): any;
}

export interface PasswordStrategyInterface {
  readonly strategy: 'password';
  readonly email: string;
  readonly password: string;
}

export interface ApiKeyStrategyInterface {
  readonly strategy: 'apiKey';
  readonly api_key: string;
}
export interface EncryptionKeyStrategyInterface {
  readonly strategy: 'encryptionKey';
  readonly encryption_key: string;
}

export type IPagarMeAccessData =
  | PasswordStrategyInterface
  | ApiKeyStrategyInterface
  | EncryptionKeyStrategyInterface;

export interface PagarMeModelInterface {
  readonly client?: any;
  readonly transactions?: ReadonlyArray<any>;
}

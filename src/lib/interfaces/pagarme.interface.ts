import { PagarmeClientInterface } from './client/pagarme-client.interface';

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

export type PagarMeAccessDataInterface =
  | PasswordStrategyInterface
  | ApiKeyStrategyInterface
  | EncryptionKeyStrategyInterface;

export interface PagarMeModelInterface {
  client?: PagarmeClientInterface;
  validate?: any; // TODO: Pending
  postback?: any; // TODO: Pending
}

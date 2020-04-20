export interface PagarmeCustomerInterface {
  /**
   * Identificador do cliente em sua plataforma
   */
  external_id: string;

  /**
   * Nome do cliente
   */
  name: string;

  /**
   * E-mail do cliente
   */
  email: string;

  /**
   * Nacionalidade do cliente (br, us ...)
   */
  country: string;

  /**
   * TIpo de pessoa, individual ou corporation
   */
  type: 'individual' | 'corporation';

  /**
   * Dados dos documentos dos clientes
   */
  documents: string[];

  /**
   * Números de telefone dos clientes
   */
  phone_numbers: string[];
}

import { PagarmeClientCompanyInterface } from './pagarme-client-company.interface';
import { PagarmeClientCompanySegmentsInterface } from './pagarme-client-company-segments.interface';
import { PagarmeClientChargebacksInterface } from './pagarme-client-chargebacks.interface';
import { PagarmeClientTransactionsInterface } from './pagarme-client-transactions.interface';
import { PagarmeClientSessionInterface } from './pagarme-client-session.interface';
import { PagarmeClientPayablesInterface } from './pagarme-client-payables.interface';
import { PagarmeClientUserInterface } from './pagarme-client-user.interface';
import { PagarmeClientInvitesInterface } from './pagarme-client-invites.interface';
import { PagarmeClientSplitRulesInterface } from './pagarme-client-split-rules.interface';
import { PagarmeClientAntifraudAnalysesInterface } from './pagarme-client-antifraud-analyses.interface';
import { PagarmeClientRecipientsInterface } from './pagarme-client-recipients.interface';
import { PagarmeClientBulkAnticipationsInterface } from './pagarme-client-bulk-anticipations.interface';
import { PagarmeClientBankAccountsInterface } from './pagarme-client-bank-accounts.interface';
import { PagarmeClientPlansInterface } from './pagarme-client-plans.interface';
import { PagarmeClientSubscriptionsInterface } from './pagarme-client-subscriptions.interface';
import { PagarmeClientCardsInterface } from './pagarme-client-cards.interface';
import { PagarmeClientAcquirersConfigurationsInterface } from './pagarme-client-acquirers-configurations.interface';
import { PagarmeClientAcquirersInterface } from './pagarme-client-acquirers.interface';
import { PagarmeClientTransfersInterface } from './pagarme-client-transfers.interface';
import { PagarmeClientBalanceInterface } from './pagarme-client-balance.interface';
import { PagarmeClientBalanceOperationsInterface } from './pagarme-client-balance-operations.interface';
import { PagarmeClientEventsInterface } from './pagarme-client-events.interface';
import { PagarmeClientGatewayOperationsInterface } from './pagarme-client-gateway-operations.interface';
import { PagarmeClientChargebackOperationsInterface } from './pagarme-client-chargeback-operations.interface';
import { PagarmeClientPostbacksInterface } from './pagarme-client-postbacks.interface';
import { PagarmeClientSecurityInterface } from './pagarme-client-security.interface';
import { PagarmeClientCustomersInterface } from './pagarme-client-customers.interface';
import { PagarmeClientZipcodesInterface } from './pagarme-client-zipcodes.interface';
import { PagarmeClientPaymentLinksInterface } from './pagarme-client-payment-links.interface';
import { PagarmeClientStatusType } from './pagarme-client-status.type';
import { PagarmeClientOnboardingAnswersInterface } from './pagarme-client-onboarding-answers.interface';
import { PagarmeClientOnboardingQuestionsInterface } from './pagarme-client-onboarding-questions.interface';
import { PagarmeClientOrdersInterface } from './pagarme-client-orders.interface';
import { PagarmeClientVersionsType } from './pagarme-client-versions.type';
import { PagarmeClientReprocessedTransactionsInterface } from './pagarme-client-reprocessed-transactions.interface';
import { PagarmeClientSearchType } from './pagarme-client-search.type';

export interface PagarmeClientInterface {
  company?: PagarmeClientCompanyInterface;

  companySegments?: PagarmeClientCompanySegmentsInterface;

  chargebacks?: PagarmeClientChargebacksInterface;

  search?: PagarmeClientSearchType;

  session?: PagarmeClientSessionInterface;

  transactions?: PagarmeClientTransactionsInterface;

  payables?: PagarmeClientPayablesInterface;

  user?: PagarmeClientUserInterface;

  invites?: PagarmeClientInvitesInterface;

  splitRules?: PagarmeClientSplitRulesInterface;

  antifraudAnalyses?: PagarmeClientAntifraudAnalysesInterface;

  recipients?: PagarmeClientRecipientsInterface;

  bulkAnticipations?: PagarmeClientBulkAnticipationsInterface;

  bankAccounts?: PagarmeClientBankAccountsInterface;

  plans?: PagarmeClientPlansInterface;

  subscriptions?: PagarmeClientSubscriptionsInterface;

  cards?: PagarmeClientCardsInterface;

  acquirersConfigurations?: PagarmeClientAcquirersConfigurationsInterface;

  acquirers?: PagarmeClientAcquirersInterface;

  transfers?: PagarmeClientTransfersInterface;

  balance?: PagarmeClientBalanceInterface;

  balanceOperations?: PagarmeClientBalanceOperationsInterface;

  events?: PagarmeClientEventsInterface;

  gatewayOperations?: PagarmeClientGatewayOperationsInterface;

  chargebackOperations?: PagarmeClientChargebackOperationsInterface;

  postbacks?: PagarmeClientPostbacksInterface;

  security?: PagarmeClientSecurityInterface;

  customers?: PagarmeClientCustomersInterface;

  zipcodes?: PagarmeClientZipcodesInterface;

  paymentLinks?: PagarmeClientPaymentLinksInterface;

  status?: PagarmeClientStatusType;

  onboardingAnswers?: PagarmeClientOnboardingAnswersInterface;

  onboardingQuestions?: PagarmeClientOnboardingQuestionsInterface;

  orders?: PagarmeClientOrdersInterface;

  versions?: PagarmeClientVersionsType;

  reprocessedTransactions?: PagarmeClientReprocessedTransactionsInterface;
}

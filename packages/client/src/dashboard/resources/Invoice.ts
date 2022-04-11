import BaseResource from '../BaseResource';
import serializeRequestBody from '../../serializeRequestBody';
import deserializeResponseBody from '../../deserializeResponseBody';
import toId from '../../toId';
import * as SchemaTypes from '../SchemaTypes';
import * as SimpleSchemaTypes from '../SimpleSchemaTypes';

export default class Invoice extends BaseResource {
  static readonly TYPE: 'invoice' = 'invoice';

  /**
   * Retrieve all invoices
   */
  perAccountPricingBillingProfileList() {
    return this.rawPerAccountPricingBillingProfileList().then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.InvoicePerAccountPricingBillingProfileInstancesTargetSchema>(
        body,
      ),
    );
  }

  /**
   * Retrieve all invoices
   */
  rawPerAccountPricingBillingProfileList(): Promise<SchemaTypes.InvoicePerAccountPricingBillingProfileInstancesTargetSchema> {
    return this.client.request<SchemaTypes.InvoicePerAccountPricingBillingProfileInstancesTargetSchema>(
      {
        method: 'GET',
        url: `/per-account-pricing-billing-profile/invoices`,
      },
    );
  }

  /**
   * Retrieve all invoices
   */
  perSitePricingBillingProfileList(
    perSitePricingBillingProfileId: string | SimpleSchemaTypes.InvoiceData,
  ) {
    return this.rawPerSitePricingBillingProfileList(
      toId(perSitePricingBillingProfileId),
    ).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.InvoicePerSitePricingBillingProfileInstancesTargetSchema>(
        body,
      ),
    );
  }

  /**
   * Retrieve all invoices
   */
  rawPerSitePricingBillingProfileList(
    perSitePricingBillingProfileId: string,
  ): Promise<SchemaTypes.InvoicePerSitePricingBillingProfileInstancesTargetSchema> {
    return this.client.request<SchemaTypes.InvoicePerSitePricingBillingProfileInstancesTargetSchema>(
      {
        method: 'GET',
        url: `/per-site-pricing-billing-profiles/${perSitePricingBillingProfileId}/invoices`,
      },
    );
  }

  /**
   * Collect all unpaid invoices
   */
  perAccountPricingBillingProfileCollectUnpaid(
    body: SimpleSchemaTypes.InvoicePerAccountPricingBillingProfileCollectUnpaidSchema,
  ) {
    return this.rawPerAccountPricingBillingProfileCollectUnpaid(
      serializeRequestBody<SchemaTypes.InvoicePerAccountPricingBillingProfileCollectUnpaidSchema>(
        {
          body,
          type: Invoice.TYPE,
        },
      ),
    ).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.InvoicePerAccountPricingBillingProfileCollectUnpaidTargetSchema>(
        body,
      ),
    );
  }

  /**
   * Collect all unpaid invoices
   */
  rawPerAccountPricingBillingProfileCollectUnpaid(
    body: SchemaTypes.InvoicePerAccountPricingBillingProfileCollectUnpaidSchema,
  ): Promise<SchemaTypes.InvoicePerAccountPricingBillingProfileCollectUnpaidTargetSchema> {
    return this.client.request<SchemaTypes.InvoicePerAccountPricingBillingProfileCollectUnpaidTargetSchema>(
      {
        method: 'GET',
        url: `/per-account-pricing-billing-profile/invoices/collect-unpaid`,
        body,
      },
    );
  }

  /**
   * Collect all unpaid invoices
   */
  perSitePricingBillingProfileCollectUnpaid(
    perSitePricingBillingProfileId: string | SimpleSchemaTypes.InvoiceData,
    body: SimpleSchemaTypes.InvoicePerSitePricingBillingProfileCollectUnpaidSchema,
  ) {
    return this.rawPerSitePricingBillingProfileCollectUnpaid(
      toId(perSitePricingBillingProfileId),
      serializeRequestBody<SchemaTypes.InvoicePerSitePricingBillingProfileCollectUnpaidSchema>(
        {
          body,
          type: Invoice.TYPE,
        },
      ),
    ).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.InvoicePerSitePricingBillingProfileCollectUnpaidTargetSchema>(
        body,
      ),
    );
  }

  /**
   * Collect all unpaid invoices
   */
  rawPerSitePricingBillingProfileCollectUnpaid(
    perSitePricingBillingProfileId: string,
    body: SchemaTypes.InvoicePerSitePricingBillingProfileCollectUnpaidSchema,
  ): Promise<SchemaTypes.InvoicePerSitePricingBillingProfileCollectUnpaidTargetSchema> {
    return this.client.request<SchemaTypes.InvoicePerSitePricingBillingProfileCollectUnpaidTargetSchema>(
      {
        method: 'GET',
        url: `/per-site-pricing-billing-profiles/${perSitePricingBillingProfileId}/invoices/collect-unpaid`,
        body,
      },
    );
  }
}
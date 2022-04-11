import BaseResource from '../BaseResource';
import serializeRequestBody from '../../serializeRequestBody';
import deserializeResponseBody from '../../deserializeResponseBody';
import toId from '../../toId';
import * as SchemaTypes from '../SchemaTypes';
import * as SimpleSchemaTypes from '../SimpleSchemaTypes';

export default class SubscriptionFeature extends BaseResource {
  static readonly TYPE: 'subscription_feature' = 'subscription_feature';

  /**
   * Get all the subscription features
   */
  list(siteId: string | SimpleSchemaTypes.SubscriptionFeatureData) {
    return this.rawList(toId(siteId)).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.SubscriptionFeatureInstancesTargetSchema>(
        body,
      ),
    );
  }

  /**
   * Get all the subscription features
   */
  rawList(
    siteId: string,
  ): Promise<SchemaTypes.SubscriptionFeatureInstancesTargetSchema> {
    return this.client.request<SchemaTypes.SubscriptionFeatureInstancesTargetSchema>(
      {
        method: 'GET',
        url: `/sites/${siteId}/subscription-features`,
      },
    );
  }
}
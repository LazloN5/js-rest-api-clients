import BaseResource from '../BaseResource';
import serializeRequestBody from '../../serializeRequestBody';
import deserializeResponseBody from '../../deserializeResponseBody';
import toId from '../../toId';
import * as SchemaTypes from '../SchemaTypes';
import * as SimpleSchemaTypes from '../SimpleSchemaTypes';

export default class Upload extends BaseResource {
  static readonly TYPE: 'upload' = 'upload';

  /**
   * Create a new upload
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/create
   */
  create(body: SimpleSchemaTypes.UploadCreateSchema) {
    return this.rawCreate(
      serializeRequestBody<SchemaTypes.UploadCreateSchema>({
        body,
        type: Upload.TYPE,
      }),
    ).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadCreateJobSchema>(body),
    );
  }

  /**
   * Create a new upload
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/create
   */
  rawCreate(
    body: SchemaTypes.UploadCreateSchema,
  ): Promise<SchemaTypes.UploadCreateJobSchema> {
    return this.client.request<SchemaTypes.UploadCreateJobSchema>({
      method: 'POST',
      url: `/uploads`,
      body,
    });
  }

  /**
   * List all uploads
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/instances
   */
  list(queryParams?: SimpleSchemaTypes.UploadInstancesHrefSchema) {
    return this.rawList(queryParams).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadInstancesTargetSchema>(
        body,
      ),
    );
  }

  /**
   * List all uploads
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/instances
   */
  rawList(
    queryParams?: SchemaTypes.UploadInstancesHrefSchema,
  ): Promise<SchemaTypes.UploadInstancesTargetSchema> {
    return this.client.request<SchemaTypes.UploadInstancesTargetSchema>({
      method: 'GET',
      url: `/uploads`,
      queryParams,
    });
  }

  /**
   * Retrieve an upload
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/self
   */
  find(uploadId: string | SimpleSchemaTypes.UploadData) {
    return this.rawFind(toId(uploadId)).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadSelfTargetSchema>(body),
    );
  }

  /**
   * Retrieve an upload
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/self
   */
  rawFind(uploadId: string): Promise<SchemaTypes.UploadSelfTargetSchema> {
    return this.client.request<SchemaTypes.UploadSelfTargetSchema>({
      method: 'GET',
      url: `/uploads/${uploadId}`,
    });
  }

  /**
   * Delete an upload
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/destroy
   */
  destroy(uploadId: string | SimpleSchemaTypes.UploadData) {
    return this.rawDestroy(toId(uploadId)).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadDestroyTargetSchema>(
        body,
      ),
    );
  }

  /**
   * Delete an upload
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/destroy
   */
  rawDestroy(uploadId: string): Promise<SchemaTypes.UploadDestroyTargetSchema> {
    return this.client.request<SchemaTypes.UploadDestroyTargetSchema>({
      method: 'DELETE',
      url: `/uploads/${uploadId}`,
    });
  }

  /**
   * Update an upload
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/update
   */
  update(
    uploadId: string | SimpleSchemaTypes.UploadData,
    body: SimpleSchemaTypes.UploadUpdateSchema,
  ) {
    return this.rawUpdate(
      toId(uploadId),
      serializeRequestBody<SchemaTypes.UploadUpdateSchema>({
        body,
        id: toId(uploadId),
        type: Upload.TYPE,
      }),
    ).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadUpdateJobSchema>(body),
    );
  }

  /**
   * Update an upload
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/update
   */
  rawUpdate(
    uploadId: string,
    body: SchemaTypes.UploadUpdateSchema,
  ): Promise<SchemaTypes.UploadUpdateJobSchema> {
    return this.client.request<SchemaTypes.UploadUpdateJobSchema>({
      method: 'PUT',
      url: `/uploads/${uploadId}`,
      body,
    });
  }

  /**
   * Batch add tags to uploads
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/batch_add_tags
   *
   * @deprecated This API call is to be considered private and might change without notice
   */
  batchAddTags(
    queryParams: SimpleSchemaTypes.UploadBatchAddTagsHrefSchema,
    body: SimpleSchemaTypes.UploadBatchAddTagsSchema,
  ) {
    return this.rawBatchAddTags(
      queryParams,
      serializeRequestBody<SchemaTypes.UploadBatchAddTagsSchema>({
        body,
        type: Upload.TYPE,
      }),
    ).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadBatchAddTagsJobSchema>(
        body,
      ),
    );
  }

  /**
   * Batch add tags to uploads
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/batch_add_tags
   *
   * @deprecated This API call is to be considered private and might change without notice
   */
  rawBatchAddTags(
    queryParams: SchemaTypes.UploadBatchAddTagsHrefSchema,
    body: SchemaTypes.UploadBatchAddTagsSchema,
  ): Promise<SchemaTypes.UploadBatchAddTagsJobSchema> {
    return this.client.request<SchemaTypes.UploadBatchAddTagsJobSchema>({
      method: 'PUT',
      url: `/uploads/batch-add-tags`,
      body,
      queryParams,
    });
  }

  /**
   * Delete multiple uploads
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/batch_destroy
   *
   * @deprecated This API call is to be considered private and might change without notice
   */
  batchDestroy(queryParams?: SimpleSchemaTypes.UploadBatchDestroyHrefSchema) {
    return this.rawBatchDestroy(queryParams).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadBatchDestroyJobSchema>(
        body,
      ),
    );
  }

  /**
   * Delete multiple uploads
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/batch_destroy
   *
   * @deprecated This API call is to be considered private and might change without notice
   */
  rawBatchDestroy(
    queryParams?: SchemaTypes.UploadBatchDestroyHrefSchema,
  ): Promise<SchemaTypes.UploadBatchDestroyJobSchema> {
    return this.client.request<SchemaTypes.UploadBatchDestroyJobSchema>({
      method: 'DELETE',
      url: `/uploads/batch-destroy`,
      queryParams,
    });
  }

  /**
   * Referenced records
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/references
   */
  references(
    uploadId: string | SimpleSchemaTypes.UploadData,
    queryParams?: SimpleSchemaTypes.UploadReferencesHrefSchema,
  ) {
    return this.rawReferences(toId(uploadId), queryParams).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadReferencesTargetSchema>(
        body,
      ),
    );
  }

  /**
   * Referenced records
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/references
   */
  rawReferences(
    uploadId: string,
    queryParams?: SchemaTypes.UploadReferencesHrefSchema,
  ): Promise<SchemaTypes.UploadReferencesTargetSchema> {
    return this.client.request<SchemaTypes.UploadReferencesTargetSchema>({
      method: 'GET',
      url: `/uploads/${uploadId}/references`,
      queryParams,
    });
  }

  /**
   * Add tags to assets in bulk
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/bulk_tag
   */
  bulkTag(body: SimpleSchemaTypes.UploadBulkTagSchema) {
    return this.rawBulkTag(
      serializeRequestBody<SchemaTypes.UploadBulkTagSchema>({
        body,
        type: Upload.TYPE,
      }),
    ).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadBulkTagJobSchema>(body),
    );
  }

  /**
   * Add tags to assets in bulk
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/bulk_tag
   */
  rawBulkTag(
    body: SchemaTypes.UploadBulkTagSchema,
  ): Promise<SchemaTypes.UploadBulkTagJobSchema> {
    return this.client.request<SchemaTypes.UploadBulkTagJobSchema>({
      method: 'POST',
      url: `/uploads/bulk/tag`,
      body,
    });
  }

  /**
   * Destroy uploads
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/bulk_destroy
   */
  bulkDestroy(body: SimpleSchemaTypes.UploadBulkDestroySchema) {
    return this.rawBulkDestroy(
      serializeRequestBody<SchemaTypes.UploadBulkDestroySchema>({
        body,
        type: Upload.TYPE,
      }),
    ).then((body) =>
      deserializeResponseBody<SimpleSchemaTypes.UploadBulkDestroyJobSchema>(
        body,
      ),
    );
  }

  /**
   * Destroy uploads
   *
   * Read more: https://www.datocms.com/docs/content-management-api/resources/upload/bulk_destroy
   */
  rawBulkDestroy(
    body: SchemaTypes.UploadBulkDestroySchema,
  ): Promise<SchemaTypes.UploadBulkDestroyJobSchema> {
    return this.client.request<SchemaTypes.UploadBulkDestroyJobSchema>({
      method: 'POST',
      url: `/uploads/bulk/destroy`,
      body,
    });
  }
}
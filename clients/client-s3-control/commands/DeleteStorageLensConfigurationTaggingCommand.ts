import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import {
  DeleteStorageLensConfigurationTaggingRequest,
  DeleteStorageLensConfigurationTaggingResult,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand,
  serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand,
} from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DeleteStorageLensConfigurationTaggingCommandInput = DeleteStorageLensConfigurationTaggingRequest;
export type DeleteStorageLensConfigurationTaggingCommandOutput = DeleteStorageLensConfigurationTaggingResult &
  __MetadataBearer;

/**
 * <p>Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the
 *          <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:DeleteStorageLensConfigurationTagging</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          </note>
 */
export class DeleteStorageLensConfigurationTaggingCommand extends $Command<
  DeleteStorageLensConfigurationTaggingCommandInput,
  DeleteStorageLensConfigurationTaggingCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStorageLensConfigurationTaggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStorageLensConfigurationTaggingCommandInput, DeleteStorageLensConfigurationTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DeleteStorageLensConfigurationTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStorageLensConfigurationTaggingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStorageLensConfigurationTaggingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteStorageLensConfigurationTaggingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteStorageLensConfigurationTaggingCommandOutput> {
    return deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

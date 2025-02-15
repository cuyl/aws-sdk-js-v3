import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { DeleteImagePipelineRequest, DeleteImagePipelineResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteImagePipelineCommand,
  serializeAws_restJson1DeleteImagePipelineCommand,
} from "../protocols/Aws_restJson1";
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

export type DeleteImagePipelineCommandInput = DeleteImagePipelineRequest;
export type DeleteImagePipelineCommandOutput = DeleteImagePipelineResponse & __MetadataBearer;

/**
 * <p> Deletes an image pipeline.</p>
 */
export class DeleteImagePipelineCommand extends $Command<
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteImagePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteImagePipelineCommandInput, DeleteImagePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "DeleteImagePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteImagePipelineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteImagePipelineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteImagePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteImagePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteImagePipelineCommandOutput> {
    return deserializeAws_restJson1DeleteImagePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

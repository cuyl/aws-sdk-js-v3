import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagePipelinesRequest, ListImagePipelinesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListImagePipelinesCommand,
  serializeAws_restJson1ListImagePipelinesCommand,
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

export type ListImagePipelinesCommandInput = ListImagePipelinesRequest;
export type ListImagePipelinesCommandOutput = ListImagePipelinesResponse & __MetadataBearer;

/**
 * <p>Returns a list of image pipelines.</p>
 */
export class ListImagePipelinesCommand extends $Command<
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListImagePipelinesCommandInput) {
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
  ): Handler<ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImagePipelinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListImagePipelinesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListImagePipelinesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListImagePipelinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListImagePipelinesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagePipelinesCommandOutput> {
    return deserializeAws_restJson1ListImagePipelinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

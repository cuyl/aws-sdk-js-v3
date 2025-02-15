import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailMessageFlowClientResolvedConfig,
} from "../WorkMailMessageFlowClient";
import { GetRawMessageContentRequest, GetRawMessageContentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRawMessageContentCommand,
  serializeAws_restJson1GetRawMessageContentCommand,
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

export type GetRawMessageContentCommandInput = GetRawMessageContentRequest;
export type GetRawMessageContentCommandOutput = GetRawMessageContentResponse & __MetadataBearer;

/**
 * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
 */
export class GetRawMessageContentCommand extends $Command<
  GetRawMessageContentCommandInput,
  GetRawMessageContentCommandOutput,
  WorkMailMessageFlowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRawMessageContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailMessageFlowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRawMessageContentCommandInput, GetRawMessageContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailMessageFlowClient";
    const commandName = "GetRawMessageContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRawMessageContentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRawMessageContentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRawMessageContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRawMessageContentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRawMessageContentCommandOutput> {
    return deserializeAws_restJson1GetRawMessageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

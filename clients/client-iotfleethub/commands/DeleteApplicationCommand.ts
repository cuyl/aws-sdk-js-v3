import { IoTFleetHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetHubClient";
import { DeleteApplicationRequest, DeleteApplicationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteApplicationCommand,
  serializeAws_restJson1DeleteApplicationCommand,
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

export type DeleteApplicationCommandInput = DeleteApplicationRequest;
export type DeleteApplicationCommandOutput = DeleteApplicationResponse & __MetadataBearer;

/**
 * <p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p>
 *          <note>
 *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
 *          </note>
 */
export class DeleteApplicationCommand extends $Command<
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
  IoTFleetHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationCommandInput, DeleteApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetHubClient";
    const commandName = "DeleteApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteApplicationCommandOutput> {
    return deserializeAws_restJson1DeleteApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetVoiceConnectorTerminationHealthRequest,
  GetVoiceConnectorTerminationHealthResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommand,
  serializeAws_restJson1GetVoiceConnectorTerminationHealthCommand,
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

export type GetVoiceConnectorTerminationHealthCommandInput = GetVoiceConnectorTerminationHealthRequest;
export type GetVoiceConnectorTerminationHealthCommandOutput = GetVoiceConnectorTerminationHealthResponse &
  __MetadataBearer;

/**
 * <p>Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from
 *             your SIP infrastructure for the specified Amazon Chime Voice Connector.</p>
 */
export class GetVoiceConnectorTerminationHealthCommand extends $Command<
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVoiceConnectorTerminationHealthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVoiceConnectorTerminationHealthCommandInput, GetVoiceConnectorTerminationHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetVoiceConnectorTerminationHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVoiceConnectorTerminationHealthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorTerminationHealthResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetVoiceConnectorTerminationHealthCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVoiceConnectorTerminationHealthCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput> {
    return deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

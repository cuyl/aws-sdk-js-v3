import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  AssociateWirelessGatewayWithCertificateRequest,
  AssociateWirelessGatewayWithCertificateResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand,
  serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand,
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

export type AssociateWirelessGatewayWithCertificateCommandInput = AssociateWirelessGatewayWithCertificateRequest;
export type AssociateWirelessGatewayWithCertificateCommandOutput = AssociateWirelessGatewayWithCertificateResponse &
  __MetadataBearer;

/**
 * <p>Associates a wireless gateway with a certificate.</p>
 */
export class AssociateWirelessGatewayWithCertificateCommand extends $Command<
  AssociateWirelessGatewayWithCertificateCommandInput,
  AssociateWirelessGatewayWithCertificateCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateWirelessGatewayWithCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AssociateWirelessGatewayWithCertificateCommandInput,
    AssociateWirelessGatewayWithCertificateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "AssociateWirelessGatewayWithCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateWirelessGatewayWithCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateWirelessGatewayWithCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWirelessGatewayWithCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWirelessGatewayWithCertificateCommandOutput> {
    return deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

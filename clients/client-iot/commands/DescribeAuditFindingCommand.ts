import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeAuditFindingRequest, DescribeAuditFindingResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DescribeAuditFindingCommand,
  serializeAws_restJson1DescribeAuditFindingCommand,
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

export type DescribeAuditFindingCommandInput = DescribeAuditFindingRequest;
export type DescribeAuditFindingCommandOutput = DescribeAuditFindingResponse & __MetadataBearer;

/**
 * <p>Gets information about a single audit finding. Properties include the reason for
 *       noncompliance, the severity of the issue,
 *       and the start time
 *       when the audit that returned the
 *       finding.</p>
 */
export class DescribeAuditFindingCommand extends $Command<
  DescribeAuditFindingCommandInput,
  DescribeAuditFindingCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAuditFindingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAuditFindingCommandInput, DescribeAuditFindingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuditFindingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAuditFindingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAuditFindingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAuditFindingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAuditFindingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAuditFindingCommandOutput> {
    return deserializeAws_restJson1DescribeAuditFindingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

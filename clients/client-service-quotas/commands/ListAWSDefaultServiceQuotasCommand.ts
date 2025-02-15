import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListAWSDefaultServiceQuotasRequest, ListAWSDefaultServiceQuotasResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand,
  serializeAws_json1_1ListAWSDefaultServiceQuotasCommand,
} from "../protocols/Aws_json1_1";
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

export type ListAWSDefaultServiceQuotasCommandInput = ListAWSDefaultServiceQuotasRequest;
export type ListAWSDefaultServiceQuotasCommandOutput = ListAWSDefaultServiceQuotasResponse & __MetadataBearer;

/**
 * <p>Lists the default values for the quotas for the specified AWS service. A default value
 *       does not reflect any quota increases.</p>
 */
export class ListAWSDefaultServiceQuotasCommand extends $Command<
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAWSDefaultServiceQuotasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListAWSDefaultServiceQuotasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAWSDefaultServiceQuotasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAWSDefaultServiceQuotasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAWSDefaultServiceQuotasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAWSDefaultServiceQuotasCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAWSDefaultServiceQuotasCommandOutput> {
    return deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListAnomaliesForInsightRequest, ListAnomaliesForInsightResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAnomaliesForInsightCommand,
  serializeAws_restJson1ListAnomaliesForInsightCommand,
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

export type ListAnomaliesForInsightCommandInput = ListAnomaliesForInsightRequest;
export type ListAnomaliesForInsightCommandOutput = ListAnomaliesForInsightResponse & __MetadataBearer;

/**
 * <p>
 *    		Returns a list of the anomalies that belong to an insight that you specify using its ID.
 *    	</p>
 */
export class ListAnomaliesForInsightCommand extends $Command<
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAnomaliesForInsightCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnomaliesForInsightCommandInput, ListAnomaliesForInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListAnomaliesForInsightCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAnomaliesForInsightRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAnomaliesForInsightResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAnomaliesForInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnomaliesForInsightCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnomaliesForInsightCommandOutput> {
    return deserializeAws_restJson1ListAnomaliesForInsightCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

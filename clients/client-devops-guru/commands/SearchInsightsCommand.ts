import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { SearchInsightsRequest, SearchInsightsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SearchInsightsCommand,
  serializeAws_restJson1SearchInsightsCommand,
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

export type SearchInsightsCommandInput = SearchInsightsRequest;
export type SearchInsightsCommandOutput = SearchInsightsResponse & __MetadataBearer;

/**
 * <p>
 *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time, one or more statuses
 *    		(<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>,
 *    		and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>).
 *    	</p>
 *    	     <p>
 *    		Use the <code>Filters</code> parameter to specify status and severity
 *    		search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search.
 *    	</p>
 */
export class SearchInsightsCommand extends $Command<
  SearchInsightsCommandInput,
  SearchInsightsCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchInsightsCommandInput) {
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
  ): Handler<SearchInsightsCommandInput, SearchInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "SearchInsightsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchInsightsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchInsightsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchInsightsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchInsightsCommandOutput> {
    return deserializeAws_restJson1SearchInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

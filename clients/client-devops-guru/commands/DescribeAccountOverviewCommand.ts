import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeAccountOverviewRequest, DescribeAccountOverviewResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAccountOverviewCommand,
  serializeAws_restJson1DescribeAccountOverviewCommand,
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

export type DescribeAccountOverviewCommandInput = DescribeAccountOverviewRequest;
export type DescribeAccountOverviewCommandOutput = DescribeAccountOverviewResponse & __MetadataBearer;

/**
 * <p>
 *    		For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights
 *    		that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
 *    	</p>
 */
export class DescribeAccountOverviewCommand extends $Command<
  DescribeAccountOverviewCommandInput,
  DescribeAccountOverviewCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountOverviewCommandInput) {
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
  ): Handler<DescribeAccountOverviewCommandInput, DescribeAccountOverviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeAccountOverviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountOverviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountOverviewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountOverviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAccountOverviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccountOverviewCommandOutput> {
    return deserializeAws_restJson1DescribeAccountOverviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

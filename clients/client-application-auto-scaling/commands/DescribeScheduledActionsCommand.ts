import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { DescribeScheduledActionsRequest, DescribeScheduledActionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScheduledActionsCommand,
  serializeAws_json1_1DescribeScheduledActionsCommand,
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

export type DescribeScheduledActionsCommandInput = DescribeScheduledActionsRequest;
export type DescribeScheduledActionsCommandOutput = DescribeScheduledActionsResponse & __MetadataBearer;

/**
 * <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p>
 *          <p>You can filter the results using the <code>ResourceId</code>,
 *             <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the
 *          <i>Application Auto Scaling User Guide</i>.</p>
 */
export class DescribeScheduledActionsCommand extends $Command<
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScheduledActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "DescribeScheduledActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScheduledActionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScheduledActionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScheduledActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeScheduledActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScheduledActionsCommandOutput> {
    return deserializeAws_json1_1DescribeScheduledActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

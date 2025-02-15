import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeInstancesInput, DescribeInstancesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeInstancesCommand,
  serializeAws_json1_1DescribeInstancesCommand,
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

export type DescribeInstancesCommandInput = DescribeInstancesInput;
export type DescribeInstancesCommandOutput = DescribeInstancesOutput & __MetadataBearer;

/**
 * <p>Retrieves information about a fleet's instances, including instance IDs, connection
 *             data, and status. </p>
 *         <p>This operation can be used in the following ways:</p>
 *         <ul>
 *             <li>
 *                 <p>To get information on all instances that are deployed to a fleet's home
 *                     Region, provide the fleet ID.</p>
 *             </li>
 *             <li>
 *                 <p>To get information on all instances that are deployed to a fleet's remote
 *                     location, provide the fleet ID and location name.</p>
 *             </li>
 *             <li>
 *                 <p>To get information on a specific instance in a fleet, provide the fleet ID and
 *                     instance ID.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, an <code>Instance</code> object is returned for each requested
 *             instance. Instances are not returned in any particular order. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a>
 *          </p>
 *
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>DescribeInstances</a> |
 *                     <a>GetInstanceAccess</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class DescribeInstancesCommand extends $Command<
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstancesCommandInput, DescribeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutConfigurationAggregatorRequest, PutConfigurationAggregatorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutConfigurationAggregatorCommand,
  serializeAws_json1_1PutConfigurationAggregatorCommand,
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

export type PutConfigurationAggregatorCommandInput = PutConfigurationAggregatorRequest;
export type PutConfigurationAggregatorCommandOutput = PutConfigurationAggregatorResponse & __MetadataBearer;

/**
 * <p>Creates and updates the configuration aggregator with the
 * 			selected source accounts and regions. The source account can be
 * 			individual account(s) or an organization.</p>
 *
 * 		       <p>
 *             <code>accountIds</code> that are passed will be replaced with existing accounts.
 * 			If you want to add additional accounts into the aggregator, call <code>DescribeAggregator</code> to get the previous accounts and then append new ones.</p>
 * 		       <note>
 * 			         <p>AWS Config should be enabled in source accounts and regions
 * 				you want to aggregate.</p>
 *
 * 			         <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization.
 * 				If the caller is a management account, AWS Config calls <code>EnableAwsServiceAccess</code> API to enable integration between AWS Config and AWS Organizations.
 * 				If the caller is a registered delegated administrator, AWS Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p>
 * 			         <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the AWS Config developer guide. </p>
 * 		       </note>
 */
export class PutConfigurationAggregatorCommand extends $Command<
  PutConfigurationAggregatorCommandInput,
  PutConfigurationAggregatorCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConfigurationAggregatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConfigurationAggregatorCommandInput, PutConfigurationAggregatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutConfigurationAggregatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigurationAggregatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutConfigurationAggregatorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutConfigurationAggregatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutConfigurationAggregatorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationAggregatorCommandOutput> {
    return deserializeAws_json1_1PutConfigurationAggregatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

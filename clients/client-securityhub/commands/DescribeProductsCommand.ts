import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DescribeProductsRequest, DescribeProductsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DescribeProductsCommand,
  serializeAws_restJson1DescribeProductsCommand,
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

export type DescribeProductsCommandInput = DescribeProductsRequest;
export type DescribeProductsCommandOutput = DescribeProductsResponse & __MetadataBearer;

/**
 * <p>Returns information about product integrations in Security Hub.</p>
 *          <p>You can optionally provide an integration ARN. If you provide an integration ARN, then
 *          the results only include that integration.</p>
 *          <p>If you do not provide an integration ARN, then the results include all of the available
 *          product integrations. </p>
 */
export class DescribeProductsCommand extends $Command<
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProductsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProductsCommandInput, DescribeProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DescribeProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProductsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProductsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeProductsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProductsCommandOutput> {
    return deserializeAws_restJson1DescribeProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

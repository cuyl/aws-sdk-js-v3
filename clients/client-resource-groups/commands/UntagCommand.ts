import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { UntagInput, UntagOutput } from "../models/models_0";
import { deserializeAws_restJson1UntagCommand, serializeAws_restJson1UntagCommand } from "../protocols/Aws_restJson1";
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

export type UntagCommandInput = UntagInput;
export type UntagCommandOutput = UntagOutput & __MetadataBearer;

/**
 * <p>Deletes tags from a specified resource group.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:Untag</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export class UntagCommand extends $Command<UntagCommandInput, UntagCommandOutput, ResourceGroupsClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UntagCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagCommandInput, UntagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "UntagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagInput.filterSensitiveLog,
      outputFilterSensitiveLog: UntagOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UntagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagCommandOutput> {
    return deserializeAws_restJson1UntagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

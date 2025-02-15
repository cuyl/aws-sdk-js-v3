import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeFileSystemAssociationsInput, DescribeFileSystemAssociationsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFileSystemAssociationsCommand,
  serializeAws_json1_1DescribeFileSystemAssociationsCommand,
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

export type DescribeFileSystemAssociationsCommandInput = DescribeFileSystemAssociationsInput;
export type DescribeFileSystemAssociationsCommandOutput = DescribeFileSystemAssociationsOutput & __MetadataBearer;

/**
 * <p>Gets the file system association information. This operation is only supported for
 *          Amazon FSx file gateways.</p>
 */
export class DescribeFileSystemAssociationsCommand extends $Command<
  DescribeFileSystemAssociationsCommandInput,
  DescribeFileSystemAssociationsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFileSystemAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFileSystemAssociationsCommandInput, DescribeFileSystemAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeFileSystemAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFileSystemAssociationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFileSystemAssociationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeFileSystemAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFileSystemAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFileSystemAssociationsCommandOutput> {
    return deserializeAws_json1_1DescribeFileSystemAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

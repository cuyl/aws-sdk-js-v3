import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetImageAttributeRequest } from "../models/models_5";
import {
  deserializeAws_ec2ResetImageAttributeCommand,
  serializeAws_ec2ResetImageAttributeCommand,
} from "../protocols/Aws_ec2";
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

export type ResetImageAttributeCommandInput = ResetImageAttributeRequest;
export type ResetImageAttributeCommandOutput = __MetadataBearer;

/**
 * <p>Resets an attribute of an AMI to its default value.</p>
 *          <note>
 *             <p>The productCodes attribute can't be reset.</p>
 *          </note>
 */
export class ResetImageAttributeCommand extends $Command<
  ResetImageAttributeCommandInput,
  ResetImageAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetImageAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetImageAttributeCommandInput, ResetImageAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetImageAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetImageAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetImageAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ResetImageAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetImageAttributeCommandOutput> {
    return deserializeAws_ec2ResetImageAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

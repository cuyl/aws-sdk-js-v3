import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateUserIdentityInfoRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateUserIdentityInfoCommand,
  serializeAws_restJson1UpdateUserIdentityInfoCommand,
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

export type UpdateUserIdentityInfoCommandInput = UpdateUserIdentityInfoRequest;
export type UpdateUserIdentityInfoCommandOutput = __MetadataBearer;

/**
 * <p>Updates the identity information for the specified user.</p>
 *          <important>
 *             <p>We strongly recommend limiting who has the ability to invoke
 *      <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials
 *     of other users by changing their email address. This poses a security risk to your organization.
 *     They can change the email address of a user to the attacker's email address, and then reset the
 *     password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for
 *      Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *          </important>
 */
export class UpdateUserIdentityInfoCommand extends $Command<
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserIdentityInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserIdentityInfoCommandInput, UpdateUserIdentityInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateUserIdentityInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserIdentityInfoRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserIdentityInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateUserIdentityInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserIdentityInfoCommandOutput> {
    return deserializeAws_restJson1UpdateUserIdentityInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

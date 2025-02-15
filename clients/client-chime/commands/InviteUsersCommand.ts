import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { InviteUsersRequest, InviteUsersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1InviteUsersCommand,
  serializeAws_restJson1InviteUsersCommand,
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

export type InviteUsersCommandInput = InviteUsersRequest;
export type InviteUsersCommandOutput = InviteUsersResponse & __MetadataBearer;

/**
 * <p>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime
 *                 <code>Team</code> account. Only <code>Team</code> account types are currently
 *             supported for this action.</p>
 */
export class InviteUsersCommand extends $Command<
  InviteUsersCommandInput,
  InviteUsersCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InviteUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InviteUsersCommandInput, InviteUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "InviteUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InviteUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InviteUsersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InviteUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InviteUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InviteUsersCommandOutput> {
    return deserializeAws_restJson1InviteUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DisassociateFromMasterAccountRequest, DisassociateFromMasterAccountResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DisassociateFromMasterAccountCommand,
  serializeAws_restJson1DisassociateFromMasterAccountCommand,
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

export type DisassociateFromMasterAccountCommandInput = DisassociateFromMasterAccountRequest;
export type DisassociateFromMasterAccountCommandOutput = DisassociateFromMasterAccountResponse & __MetadataBearer;

/**
 * <p>Disassociates the current Security Hub member account from the associated master
 *          account.</p>
 *          <p>This operation is only used by accounts that are not part of an organization. For
 *          organization accounts, only the master account (the designated Security Hub administrator) can
 *          disassociate a member account.</p>
 */
export class DisassociateFromMasterAccountCommand extends $Command<
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateFromMasterAccountCommandInput) {
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
  ): Handler<DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DisassociateFromMasterAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateFromMasterAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateFromMasterAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateFromMasterAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateFromMasterAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateFromMasterAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateFromMasterAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

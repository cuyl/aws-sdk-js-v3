import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { BatchUpdateUserRequest, BatchUpdateUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpdateUserCommand,
  serializeAws_restJson1BatchUpdateUserCommand,
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

export type BatchUpdateUserCommandInput = BatchUpdateUserRequest;
export type BatchUpdateUserCommandOutput = BatchUpdateUserResponse & __MetadataBearer;

/**
 * <p>
 * Updates user details within the
 * <a>UpdateUserRequestItem</a>
 * object for up to 20 users for the specified Amazon Chime account.
 * Currently, only <code>LicenseType</code>
 * updates are supported for this action.
 * </p>
 */
export class BatchUpdateUserCommand extends $Command<
  BatchUpdateUserCommandInput,
  BatchUpdateUserCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdateUserCommandInput) {
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
  ): Handler<BatchUpdateUserCommandInput, BatchUpdateUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchUpdateUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdateUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateUserCommandOutput> {
    return deserializeAws_restJson1BatchUpdateUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateRoleDescriptionRequest, UpdateRoleDescriptionResponse } from "../models/models_1";
import {
  deserializeAws_queryUpdateRoleDescriptionCommand,
  serializeAws_queryUpdateRoleDescriptionCommand,
} from "../protocols/Aws_query";
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

export type UpdateRoleDescriptionCommandInput = UpdateRoleDescriptionRequest;
export type UpdateRoleDescriptionCommandOutput = UpdateRoleDescriptionResponse & __MetadataBearer;

/**
 * <p>Use <a>UpdateRole</a> instead.</p>
 *         <p>Modifies only the description of a role. This operation performs the same function as
 *             the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
 */
export class UpdateRoleDescriptionCommand extends $Command<
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRoleDescriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateRoleDescriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoleDescriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoleDescriptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRoleDescriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateRoleDescriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRoleDescriptionCommandOutput> {
    return deserializeAws_queryUpdateRoleDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

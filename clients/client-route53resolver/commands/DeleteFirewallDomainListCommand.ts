import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteFirewallDomainListRequest, DeleteFirewallDomainListResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteFirewallDomainListCommand,
  serializeAws_json1_1DeleteFirewallDomainListCommand,
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

export type DeleteFirewallDomainListCommandInput = DeleteFirewallDomainListRequest;
export type DeleteFirewallDomainListCommandOutput = DeleteFirewallDomainListResponse & __MetadataBearer;

/**
 * <p>Deletes the specified domain list. </p>
 */
export class DeleteFirewallDomainListCommand extends $Command<
  DeleteFirewallDomainListCommandInput,
  DeleteFirewallDomainListCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFirewallDomainListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFirewallDomainListCommandInput, DeleteFirewallDomainListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DeleteFirewallDomainListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFirewallDomainListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFirewallDomainListResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFirewallDomainListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFirewallDomainListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFirewallDomainListCommandOutput> {
    return deserializeAws_json1_1DeleteFirewallDomainListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

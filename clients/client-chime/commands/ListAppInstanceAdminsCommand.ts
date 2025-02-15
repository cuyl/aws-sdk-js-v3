import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListAppInstanceAdminsRequest, ListAppInstanceAdminsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAppInstanceAdminsCommand,
  serializeAws_restJson1ListAppInstanceAdminsCommand,
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

export type ListAppInstanceAdminsCommandInput = ListAppInstanceAdminsRequest;
export type ListAppInstanceAdminsCommandOutput = ListAppInstanceAdminsResponse & __MetadataBearer;

/**
 * <p>Returns a list of the administrators in the <code>AppInstance</code>.</p>
 */
export class ListAppInstanceAdminsCommand extends $Command<
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppInstanceAdminsCommandInput) {
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
  ): Handler<ListAppInstanceAdminsCommandInput, ListAppInstanceAdminsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListAppInstanceAdminsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppInstanceAdminsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceAdminsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppInstanceAdminsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppInstanceAdminsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppInstanceAdminsCommandOutput> {
    return deserializeAws_restJson1ListAppInstanceAdminsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

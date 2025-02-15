import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListWorkloadsInput, ListWorkloadsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListWorkloadsCommand,
  serializeAws_restJson1ListWorkloadsCommand,
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

export type ListWorkloadsCommandInput = ListWorkloadsInput;
export type ListWorkloadsCommandOutput = ListWorkloadsOutput & __MetadataBearer;

/**
 * <p>List workloads. Paginated.</p>
 */
export class ListWorkloadsCommand extends $Command<
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkloadsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkloadsCommandInput, ListWorkloadsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListWorkloadsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkloadsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkloadsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkloadsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWorkloadsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkloadsCommandOutput> {
    return deserializeAws_restJson1ListWorkloadsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

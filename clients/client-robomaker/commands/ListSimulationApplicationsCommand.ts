import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListSimulationApplicationsRequest, ListSimulationApplicationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListSimulationApplicationsCommand,
  serializeAws_restJson1ListSimulationApplicationsCommand,
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

export type ListSimulationApplicationsCommandInput = ListSimulationApplicationsRequest;
export type ListSimulationApplicationsCommandOutput = ListSimulationApplicationsResponse & __MetadataBearer;

/**
 * <p>Returns a list of simulation applications. You can optionally provide filters to
 *          retrieve specific simulation applications. </p>
 */
export class ListSimulationApplicationsCommand extends $Command<
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSimulationApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListSimulationApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSimulationApplicationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSimulationApplicationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSimulationApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSimulationApplicationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSimulationApplicationsCommandOutput> {
    return deserializeAws_restJson1ListSimulationApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

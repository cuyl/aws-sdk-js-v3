import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { GetReportGroupTrendInput, GetReportGroupTrendOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetReportGroupTrendCommand,
  serializeAws_json1_1GetReportGroupTrendCommand,
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

export type GetReportGroupTrendCommandInput = GetReportGroupTrendInput;
export type GetReportGroupTrendCommandOutput = GetReportGroupTrendOutput & __MetadataBearer;

/**
 * <p>Analyzes and accumulates test report values for the specified test reports.</p>
 */
export class GetReportGroupTrendCommand extends $Command<
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetReportGroupTrendCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReportGroupTrendCommandInput, GetReportGroupTrendCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "GetReportGroupTrendCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReportGroupTrendInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetReportGroupTrendOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReportGroupTrendCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReportGroupTrendCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReportGroupTrendCommandOutput> {
    return deserializeAws_json1_1GetReportGroupTrendCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

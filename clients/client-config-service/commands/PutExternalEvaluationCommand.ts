import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutExternalEvaluationRequest, PutExternalEvaluationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutExternalEvaluationCommand,
  serializeAws_json1_1PutExternalEvaluationCommand,
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

export type PutExternalEvaluationCommandInput = PutExternalEvaluationRequest;
export type PutExternalEvaluationCommandOutput = PutExternalEvaluationResponse & __MetadataBearer;

/**
 * <p>Add or updates the evaluations for process checks.
 * 			This API checks if the rule is a process check when the name of the AWS Config rule is provided.</p>
 */
export class PutExternalEvaluationCommand extends $Command<
  PutExternalEvaluationCommandInput,
  PutExternalEvaluationCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutExternalEvaluationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutExternalEvaluationCommandInput, PutExternalEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutExternalEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutExternalEvaluationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutExternalEvaluationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutExternalEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutExternalEvaluationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutExternalEvaluationCommandOutput> {
    return deserializeAws_json1_1PutExternalEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

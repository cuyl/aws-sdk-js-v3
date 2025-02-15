import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CancelBatchPredictionJobRequest, CancelBatchPredictionJobResult } from "../models/models_0";
import {
  deserializeAws_json1_1CancelBatchPredictionJobCommand,
  serializeAws_json1_1CancelBatchPredictionJobCommand,
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

export type CancelBatchPredictionJobCommandInput = CancelBatchPredictionJobRequest;
export type CancelBatchPredictionJobCommandOutput = CancelBatchPredictionJobResult & __MetadataBearer;

/**
 * <p>Cancels the specified batch prediction job.</p>
 */
export class CancelBatchPredictionJobCommand extends $Command<
  CancelBatchPredictionJobCommandInput,
  CancelBatchPredictionJobCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelBatchPredictionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelBatchPredictionJobCommandInput, CancelBatchPredictionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "CancelBatchPredictionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelBatchPredictionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelBatchPredictionJobResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelBatchPredictionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelBatchPredictionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelBatchPredictionJobCommandOutput> {
    return deserializeAws_json1_1CancelBatchPredictionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

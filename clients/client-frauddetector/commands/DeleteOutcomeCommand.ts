import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteOutcomeRequest, DeleteOutcomeResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteOutcomeCommand,
  serializeAws_json1_1DeleteOutcomeCommand,
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

export type DeleteOutcomeCommandInput = DeleteOutcomeRequest;
export type DeleteOutcomeCommandOutput = DeleteOutcomeResult & __MetadataBearer;

/**
 * <p>Deletes an outcome.</p>
 * 	        <p>You cannot delete an outcome that is used in a rule version.</p>
 * 	        <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>
 */
export class DeleteOutcomeCommand extends $Command<
  DeleteOutcomeCommandInput,
  DeleteOutcomeCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteOutcomeCommandInput) {
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
  ): Handler<DeleteOutcomeCommandInput, DeleteOutcomeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteOutcomeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOutcomeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteOutcomeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOutcomeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteOutcomeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOutcomeCommandOutput> {
    return deserializeAws_json1_1DeleteOutcomeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

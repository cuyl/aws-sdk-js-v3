import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { StartRxNormInferenceJobRequest, StartRxNormInferenceJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartRxNormInferenceJobCommand,
  serializeAws_json1_1StartRxNormInferenceJobCommand,
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

export type StartRxNormInferenceJobCommandInput = StartRxNormInferenceJobRequest;
export type StartRxNormInferenceJobCommandOutput = StartRxNormInferenceJobResponse & __MetadataBearer;

/**
 * <p>Starts an asynchronous job to detect medication entities and link them to the RxNorm
 *       ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a
 *       job.</p>
 */
export class StartRxNormInferenceJobCommand extends $Command<
  StartRxNormInferenceJobCommandInput,
  StartRxNormInferenceJobCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartRxNormInferenceJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartRxNormInferenceJobCommandInput, StartRxNormInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "StartRxNormInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartRxNormInferenceJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartRxNormInferenceJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartRxNormInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartRxNormInferenceJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartRxNormInferenceJobCommandOutput> {
    return deserializeAws_json1_1StartRxNormInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

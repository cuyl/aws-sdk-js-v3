import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { CreateModelRequest, CreateModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateModelCommand,
  serializeAws_restJson1CreateModelCommand,
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

export type CreateModelCommandInput = CreateModelRequest;
export type CreateModelCommandOutput = CreateModelResponse & __MetadataBearer;

/**
 * <p>Creates a new version of a model within an an Amazon Lookout for Vision project.
 *       <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests,
 *        and evaluates a new version of a model. </p>
 *          <p>To get the current status, check the <code>Status</code> field returned
 *       in the response from <a>DescribeModel</a>.</p>
 *          <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset
 *        to create a training and a test dataset.
 *        If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test
 *        the model. </p>
 *          <p>After training completes, the evaluation metrics are stored at the location specified in
 *         <code>OutputConfig</code>.  </p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require
 *          permission to the <code>lookoutvision:TagResource</code> operation.</p>
 */
export class CreateModelCommand extends $Command<
  CreateModelCommandInput,
  CreateModelCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateModelCommandInput, CreateModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "CreateModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelCommandOutput> {
    return deserializeAws_restJson1CreateModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

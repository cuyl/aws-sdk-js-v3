import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateInstanceExportTaskRequest, CreateInstanceExportTaskResult } from "../models/models_0";
import {
  deserializeAws_ec2CreateInstanceExportTaskCommand,
  serializeAws_ec2CreateInstanceExportTaskCommand,
} from "../protocols/Aws_ec2";
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

export type CreateInstanceExportTaskCommandInput = CreateInstanceExportTaskRequest;
export type CreateInstanceExportTaskCommandOutput = CreateInstanceExportTaskResult & __MetadataBearer;

/**
 * <p>Exports a running or stopped instance to an Amazon S3 bucket.</p>
 *          <p>For information about the supported operating systems, image formats, and known limitations
 *    for the types of instances you can export, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html">Exporting an instance as a VM Using VM Import/Export</a>
 *    in the <i>VM Import/Export User Guide</i>.</p>
 */
export class CreateInstanceExportTaskCommand extends $Command<
  CreateInstanceExportTaskCommandInput,
  CreateInstanceExportTaskCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateInstanceExportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInstanceExportTaskCommandInput, CreateInstanceExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateInstanceExportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInstanceExportTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInstanceExportTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInstanceExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateInstanceExportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceExportTaskCommandOutput> {
    return deserializeAws_ec2CreateInstanceExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

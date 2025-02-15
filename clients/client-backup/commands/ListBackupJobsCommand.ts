import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupJobsInput, ListBackupJobsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupJobsCommand,
  serializeAws_restJson1ListBackupJobsCommand,
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

export type ListBackupJobsCommandInput = ListBackupJobsInput;
export type ListBackupJobsCommandOutput = ListBackupJobsOutput & __MetadataBearer;

/**
 * <p>Returns a list of existing backup jobs for an authenticated account for the last 30
 *          days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.</p>
 */
export class ListBackupJobsCommand extends $Command<
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackupJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupJobsCommandInput, ListBackupJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupJobsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupJobsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupJobsCommandOutput> {
    return deserializeAws_restJson1ListBackupJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

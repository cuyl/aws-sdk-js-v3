import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { PostAgentProfileRequest, PostAgentProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PostAgentProfileCommand,
  serializeAws_restJson1PostAgentProfileCommand,
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

export type PostAgentProfileCommandInput = PostAgentProfileRequest;
export type PostAgentProfileCommandOutput = PostAgentProfileResponse & __MetadataBearer;

/**
 * <p>
 *          Submits profiling data to an aggregated profile of a profiling group. To get an
 *          aggregated profile that is created with this profiling data, use
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html">
 *                <code>GetProfile</code>
 *             </a>.
 *       </p>
 */
export class PostAgentProfileCommand extends $Command<
  PostAgentProfileCommandInput,
  PostAgentProfileCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostAgentProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PostAgentProfileCommandInput, PostAgentProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "PostAgentProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PostAgentProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PostAgentProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostAgentProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PostAgentProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostAgentProfileCommandOutput> {
    return deserializeAws_restJson1PostAgentProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

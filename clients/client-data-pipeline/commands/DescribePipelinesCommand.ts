import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { DescribePipelinesInput, DescribePipelinesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribePipelinesCommand,
  serializeAws_json1_1DescribePipelinesCommand,
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

export type DescribePipelinesCommandInput = DescribePipelinesInput;
export type DescribePipelinesCommandOutput = DescribePipelinesOutput & __MetadataBearer;

/**
 * <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier,
 *             its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines
 *             that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines
 *             for which you have read permissions.</p>
 *         <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DescribePipelines
 * Content-Length: 70
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineIds":
 *   ["df-08785951KAKJEXAMPLE"]
 * }
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: 02870eb7-0736-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 767
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"pipelineDescriptionList":
 *   [
 *     {"description": "This is my first pipeline",
 *      "fields":
 *       [
 *         {"key": "@pipelineState",
 *          "stringValue": "SCHEDULED"},
 *         {"key": "description",
 *          "stringValue": "This is my first pipeline"},
 *         {"key": "name",
 *          "stringValue": "myPipeline"},
 *         {"key": "@creationTime",
 *          "stringValue": "2012-12-13T01:24:06"},
 *         {"key": "@id",
 *          "stringValue": "df-0937003356ZJEXAMPLE"},
 *         {"key": "@sphere",
 *          "stringValue": "PIPELINE"},
 *         {"key": "@version",
 *          "stringValue": "1"},
 *         {"key": "@userId",
 *          "stringValue": "924374875933"},
 *         {"key": "@accountId",
 *          "stringValue": "924374875933"},
 *         {"key": "uniqueId",
 *          "stringValue": "1234567890"}
 *       ],
 *      "name": "myPipeline",
 *      "pipelineId": "df-0937003356ZJEXAMPLE"}
 *   ]
 * }
 * </response>
 *         </examples>
 */
export class DescribePipelinesCommand extends $Command<
  DescribePipelinesCommandInput,
  DescribePipelinesCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePipelinesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePipelinesCommandInput, DescribePipelinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "DescribePipelinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePipelinesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePipelinesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePipelinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePipelinesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePipelinesCommandOutput> {
    return deserializeAws_json1_1DescribePipelinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

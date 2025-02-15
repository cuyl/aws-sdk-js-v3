import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { DescribeObjectsInput, DescribeObjectsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeObjectsCommand,
  serializeAws_json1_1DescribeObjectsCommand,
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

export type DescribeObjectsCommandInput = DescribeObjectsInput;
export type DescribeObjectsCommandOutput = DescribeObjectsOutput & __MetadataBearer;

/**
 * <p>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of
 *             a set of fields that define the properties of the object.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DescribeObjects
 * Content-Length: 98
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "objectIds":
 *   ["Schedule"],
 *  "evaluateExpressions": true}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: 4c18ea5d-0777-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 1488
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"hasMoreResults": false,
 *  "pipelineObjects":
 *   [
 *     {"fields":
 *       [
 *         {"key": "startDateTime",
 *          "stringValue": "2012-12-12T00:00:00"},
 *         {"key": "parent",
 *          "refValue": "Default"},
 *         {"key": "@sphere",
 *          "stringValue": "COMPONENT"},
 *         {"key": "type",
 *          "stringValue": "Schedule"},
 *         {"key": "period",
 *          "stringValue": "1 hour"},
 *         {"key": "endDateTime",
 *          "stringValue": "2012-12-21T18:00:00"},
 *         {"key": "@version",
 *          "stringValue": "1"},
 *         {"key": "@status",
 *          "stringValue": "PENDING"},
 *         {"key": "@pipelineId",
 *          "stringValue": "df-06372391ZG65EXAMPLE"}
 *       ],
 *      "id": "Schedule",
 *      "name": "Schedule"}
 *   ]
 * }
 *
 *             </response>
 *         </examples>
 */
export class DescribeObjectsCommand extends $Command<
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeObjectsCommandInput) {
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
  ): Handler<DescribeObjectsCommandInput, DescribeObjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "DescribeObjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeObjectsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeObjectsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeObjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeObjectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeObjectsCommandOutput> {
    return deserializeAws_json1_1DescribeObjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

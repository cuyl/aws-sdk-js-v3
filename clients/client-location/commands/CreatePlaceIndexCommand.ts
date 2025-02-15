import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreatePlaceIndexRequest, CreatePlaceIndexResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreatePlaceIndexCommand,
  serializeAws_restJson1CreatePlaceIndexCommand,
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

export type CreatePlaceIndexCommandInput = CreatePlaceIndexRequest;
export type CreatePlaceIndexCommandOutput = CreatePlaceIndexResponse & __MetadataBearer;

/**
 * <p>Creates a Place index resource in your AWS account, which supports Places functions with
 *          geospatial data sourced from your chosen data provider.</p>
 *          <note>
 *             <p>By using Places, you agree that AWS may transmit your API queries to your selected
 *             third party provider for processing, which may be outside the AWS region you are
 *             currently using. </p>
 *             <p>Because of licensing limitations, you may not use HERE to store results for locations
 *             in Japan. For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon
 *             Location Service.</p>
 *          </note>
 */
export class CreatePlaceIndexCommand extends $Command<
  CreatePlaceIndexCommandInput,
  CreatePlaceIndexCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePlaceIndexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "CreatePlaceIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlaceIndexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePlaceIndexResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlaceIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePlaceIndexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePlaceIndexCommandOutput> {
    return deserializeAws_restJson1CreatePlaceIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

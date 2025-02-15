import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListGeoLocationsRequest, ListGeoLocationsResponse } from "../models/models_0";
import {
  deserializeAws_restXmlListGeoLocationsCommand,
  serializeAws_restXmlListGeoLocationsCommand,
} from "../protocols/Aws_restXml";
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

export type ListGeoLocationsCommandInput = ListGeoLocationsRequest;
export type ListGeoLocationsCommandOutput = ListGeoLocationsResponse & __MetadataBearer;

/**
 * <p>Retrieves a list of supported geographic locations.</p>
 * 		       <p>Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces),
 * 			the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.</p>
 * 	        <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
 * 	        <p>For a list of supported geolocation codes, see the
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data type.</p>
 */
export class ListGeoLocationsCommand extends $Command<
  ListGeoLocationsCommandInput,
  ListGeoLocationsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGeoLocationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListGeoLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGeoLocationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGeoLocationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGeoLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListGeoLocationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGeoLocationsCommandOutput> {
    return deserializeAws_restXmlListGeoLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateCustomAvailabilityZoneMessage, CreateCustomAvailabilityZoneResult } from "../models/models_0";
import {
  deserializeAws_queryCreateCustomAvailabilityZoneCommand,
  serializeAws_queryCreateCustomAvailabilityZoneCommand,
} from "../protocols/Aws_query";
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

export type CreateCustomAvailabilityZoneCommandInput = CreateCustomAvailabilityZoneMessage;
export type CreateCustomAvailabilityZoneCommandOutput = CreateCustomAvailabilityZoneResult & __MetadataBearer;

/**
 * <p>Creates a custom Availability Zone (AZ).</p>
 *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 RDS on VMware User Guide.</a>
 *          </p>
 */
export class CreateCustomAvailabilityZoneCommand extends $Command<
  CreateCustomAvailabilityZoneCommandInput,
  CreateCustomAvailabilityZoneCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomAvailabilityZoneCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomAvailabilityZoneCommandInput, CreateCustomAvailabilityZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateCustomAvailabilityZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomAvailabilityZoneMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomAvailabilityZoneResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomAvailabilityZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCustomAvailabilityZoneCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomAvailabilityZoneCommandOutput> {
    return deserializeAws_queryCreateCustomAvailabilityZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

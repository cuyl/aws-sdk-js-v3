import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateClusterCommand,
  serializeAws_restJson1CreateClusterCommand,
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

export type CreateClusterCommandInput = CreateClusterRequest;
export type CreateClusterCommandOutput = CreateClusterResponse & __MetadataBearer;

/**
 * <p>Creates an Amazon EKS control plane. </p>
 *         <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes
 *             software, such as <code>etcd</code> and the API server. The control plane runs in an
 *             account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server
 *             endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its
 *             own set of Amazon EC2 instances.</p>
 *         <p>The cluster control plane is provisioned across multiple Availability Zones and
 *             fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC
 *             subnets to provide connectivity from the control plane instances to the nodes (for
 *             example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code>
 *             data flows).</p>
 *         <p>Amazon EKS nodes run in your AWS account and connect to your cluster's control plane via
 *             the Kubernetes API server endpoint and a certificate file that is created for your
 *             cluster.</p>
 *
 *         <p>Cluster creation typically takes several minutes. After you create an Amazon EKS cluster,
 *             you must configure your Kubernetes tooling to communicate with the API server and launch
 *             nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster
 *                 Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
 */
export class CreateClusterCommand extends $Command<
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClusterCommandInput, CreateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClusterCommandOutput> {
    return deserializeAws_restJson1CreateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

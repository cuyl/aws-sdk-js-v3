import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "../commands/DeleteSessionCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { PutSessionCommandInput, PutSessionCommandOutput } from "../commands/PutSessionCommand";
import { RecognizeTextCommandInput, RecognizeTextCommandOutput } from "../commands/RecognizeTextCommand";
import { RecognizeUtteranceCommandInput, RecognizeUtteranceCommandOutput } from "../commands/RecognizeUtteranceCommand";
import { StartConversationCommandInput, StartConversationCommandOutput } from "../commands/StartConversationCommand";
import {
  AccessDeniedException,
  ActiveContext,
  ActiveContextTimeToLive,
  AudioInputEvent,
  AudioResponseEvent,
  BadGatewayException,
  Button,
  ConfidenceScore,
  ConfigurationEvent,
  ConflictException,
  DTMFInputEvent,
  DependencyFailedException,
  DialogAction,
  DisconnectionEvent,
  HeartbeatEvent,
  ImageResponseCard,
  Intent,
  IntentResultEvent,
  InternalServerException,
  Interpretation,
  Message,
  PlaybackCompletionEvent,
  PlaybackInterruptionEvent,
  ResourceNotFoundException,
  SentimentResponse,
  SentimentScore,
  SessionState,
  Slot,
  StartConversationRequestEventStream,
  StartConversationResponseEventStream,
  TextInputEvent,
  TextResponseEvent,
  ThrottlingException,
  TranscriptEvent,
  ValidationException,
  Value,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1DeleteSessionCommand = async (
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutSessionCommand = async (
  input: PutSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.responseContentType) && { responsecontenttype: input.responseContentType! }),
  };
  let resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.messages !== undefined &&
      input.messages !== null && { messages: serializeAws_restJson1Messages(input.messages, context) }),
    ...(input.requestAttributes !== undefined &&
      input.requestAttributes !== null && {
        requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
      }),
    ...(input.sessionState !== undefined &&
      input.sessionState !== null && { sessionState: serializeAws_restJson1SessionState(input.sessionState, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1RecognizeTextCommand = async (
  input: RecognizeTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text";
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.requestAttributes !== undefined &&
      input.requestAttributes !== null && {
        requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
      }),
    ...(input.sessionState !== undefined &&
      input.sessionState !== null && { sessionState: serializeAws_restJson1SessionState(input.sessionState, context) }),
    ...(input.text !== undefined && input.text !== null && { text: input.text }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1RecognizeUtteranceCommand = async (
  input: RecognizeUtteranceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/octet-stream",
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    ...(isSerializableHeaderValue(input.sessionState) && { "x-amz-lex-session-state": input.sessionState! }),
    ...(isSerializableHeaderValue(input.requestAttributes) && {
      "x-amz-lex-request-attributes": input.requestAttributes!,
    }),
    ...(isSerializableHeaderValue(input.requestContentType) && { "content-type": input.requestContentType! }),
    ...(isSerializableHeaderValue(input.responseContentType) && {
      "response-content-type": input.responseContentType!,
    }),
  };
  let resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance";
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  let body: any;
  if (input.inputStream !== undefined) {
    body = input.inputStream;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartConversationCommand = async (
  input: StartConversationCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.conversationMode) && {
      "x-amz-lex-conversation-mode": input.conversationMode!,
    }),
  };
  let resolvedPath = "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation";
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  let body: any;
  if (input.requestEventStream !== undefined) {
    body = context.eventStreamMarshaller.serialize(input.requestEventStream, (event) =>
      serializeAws_restJson1StartConversationRequestEventStream_event(event, context)
    );
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1DeleteSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSessionCommandError(output, context);
  }
  const contents: DeleteSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    botAliasId: undefined,
    botId: undefined,
    localeId: undefined,
    sessionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = data.botAliasId;
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.sessionId = data.sessionId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSessionCommandError(output, context);
  }
  const contents: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    interpretations: undefined,
    messages: undefined,
    sessionId: undefined,
    sessionState: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.interpretations !== undefined && data.interpretations !== null) {
    contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
  }
  if (data.messages !== undefined && data.messages !== null) {
    contents.messages = deserializeAws_restJson1Messages(data.messages, context);
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.sessionId = data.sessionId;
  }
  if (data.sessionState !== undefined && data.sessionState !== null) {
    contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSessionCommandError(output, context);
  }
  const contents: PutSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    audioStream: undefined,
    contentType: undefined,
    messages: undefined,
    requestAttributes: undefined,
    sessionId: undefined,
    sessionState: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  if (output.headers["x-amz-lex-messages"] !== undefined) {
    contents.messages = output.headers["x-amz-lex-messages"];
  }
  if (output.headers["x-amz-lex-session-state"] !== undefined) {
    contents.sessionState = output.headers["x-amz-lex-session-state"];
  }
  if (output.headers["x-amz-lex-request-attributes"] !== undefined) {
    contents.requestAttributes = output.headers["x-amz-lex-request-attributes"];
  }
  if (output.headers["x-amz-lex-session-id"] !== undefined) {
    contents.sessionId = output.headers["x-amz-lex-session-id"];
  }
  const data: any = output.body;
  contents.audioStream = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      response = {
        ...(await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RecognizeTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RecognizeTextCommandError(output, context);
  }
  const contents: RecognizeTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    interpretations: undefined,
    messages: undefined,
    requestAttributes: undefined,
    sessionId: undefined,
    sessionState: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.interpretations !== undefined && data.interpretations !== null) {
    contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
  }
  if (data.messages !== undefined && data.messages !== null) {
    contents.messages = deserializeAws_restJson1Messages(data.messages, context);
  }
  if (data.requestAttributes !== undefined && data.requestAttributes !== null) {
    contents.requestAttributes = deserializeAws_restJson1StringMap(data.requestAttributes, context);
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.sessionId = data.sessionId;
  }
  if (data.sessionState !== undefined && data.sessionState !== null) {
    contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RecognizeTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      response = {
        ...(await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RecognizeUtteranceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeUtteranceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RecognizeUtteranceCommandError(output, context);
  }
  const contents: RecognizeUtteranceCommandOutput = {
    $metadata: deserializeMetadata(output),
    audioStream: undefined,
    contentType: undefined,
    inputMode: undefined,
    inputTranscript: undefined,
    interpretations: undefined,
    messages: undefined,
    requestAttributes: undefined,
    sessionId: undefined,
    sessionState: undefined,
  };
  if (output.headers["x-amz-lex-input-mode"] !== undefined) {
    contents.inputMode = output.headers["x-amz-lex-input-mode"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  if (output.headers["x-amz-lex-messages"] !== undefined) {
    contents.messages = output.headers["x-amz-lex-messages"];
  }
  if (output.headers["x-amz-lex-interpretations"] !== undefined) {
    contents.interpretations = output.headers["x-amz-lex-interpretations"];
  }
  if (output.headers["x-amz-lex-session-state"] !== undefined) {
    contents.sessionState = output.headers["x-amz-lex-session-state"];
  }
  if (output.headers["x-amz-lex-request-attributes"] !== undefined) {
    contents.requestAttributes = output.headers["x-amz-lex-request-attributes"];
  }
  if (output.headers["x-amz-lex-session-id"] !== undefined) {
    contents.sessionId = output.headers["x-amz-lex-session-id"];
  }
  if (output.headers["x-amz-lex-input-transcript"] !== undefined) {
    contents.inputTranscript = output.headers["x-amz-lex-input-transcript"];
  }
  const data: any = output.body;
  contents.audioStream = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RecognizeUtteranceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecognizeUtteranceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadGatewayException":
    case "com.amazonaws.lexruntimev2#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexruntimev2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimev2#DependencyFailedException":
      response = {
        ...(await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartConversationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartConversationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartConversationCommandError(output, context);
  }
  const contents: StartConversationCommandOutput = {
    $metadata: deserializeMetadata(output),
    responseEventStream: undefined,
  };
  const data: any = context.eventStreamMarshaller.deserialize(output.body, async (event) => {
    const eventName = Object.keys(event)[0];
    const eventHeaders = Object.entries(event[eventName].headers).reduce((accummulator, curr) => {
      accummulator[curr[0]] = curr[1].value;
      return accummulator;
    }, {} as { [key: string]: any });
    const eventMessage = {
      headers: eventHeaders,
      body: event[eventName].body,
    };
    const parsedEvent = {
      [eventName]: eventMessage,
    };
    return await deserializeAws_restJson1StartConversationResponseEventStream_event(parsedEvent, context);
  });
  contents.responseEventStream = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartConversationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConversationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lexruntimev2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexruntimev2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexruntimev2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexruntimev2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const serializeAws_restJson1StartConversationRequestEventStream_event = (
  input: any,
  context: __SerdeContext
): __Message => {
  return StartConversationRequestEventStream.visit(input, {
    ConfigurationEvent: (value) => serializeAws_restJson1ConfigurationEvent_event(value, context),
    AudioInputEvent: (value) => serializeAws_restJson1AudioInputEvent_event(value, context),
    DTMFInputEvent: (value) => serializeAws_restJson1DTMFInputEvent_event(value, context),
    TextInputEvent: (value) => serializeAws_restJson1TextInputEvent_event(value, context),
    PlaybackCompletionEvent: (value) => serializeAws_restJson1PlaybackCompletionEvent_event(value, context),
    DisconnectionEvent: (value) => serializeAws_restJson1DisconnectionEvent_event(value, context),
    _: (value) => value as any,
  });
};
const deserializeAws_restJson1StartConversationResponseEventStream_event = async (
  output: any,
  context: __SerdeContext
): Promise<StartConversationResponseEventStream> => {
  if (output["PlaybackInterruptionEvent"] !== undefined) {
    return {
      PlaybackInterruptionEvent: await deserializeAws_restJson1PlaybackInterruptionEvent_event(
        output["PlaybackInterruptionEvent"],
        context
      ),
    };
  }
  if (output["TranscriptEvent"] !== undefined) {
    return {
      TranscriptEvent: await deserializeAws_restJson1TranscriptEvent_event(output["TranscriptEvent"], context),
    };
  }
  if (output["IntentResultEvent"] !== undefined) {
    return {
      IntentResultEvent: await deserializeAws_restJson1IntentResultEvent_event(output["IntentResultEvent"], context),
    };
  }
  if (output["TextResponseEvent"] !== undefined) {
    return {
      TextResponseEvent: await deserializeAws_restJson1TextResponseEvent_event(output["TextResponseEvent"], context),
    };
  }
  if (output["AudioResponseEvent"] !== undefined) {
    return {
      AudioResponseEvent: await deserializeAws_restJson1AudioResponseEvent_event(output["AudioResponseEvent"], context),
    };
  }
  if (output["HeartbeatEvent"] !== undefined) {
    return {
      HeartbeatEvent: await deserializeAws_restJson1HeartbeatEvent_event(output["HeartbeatEvent"], context),
    };
  }
  if (output["AccessDeniedException"] !== undefined) {
    return {
      AccessDeniedException: await deserializeAws_restJson1AccessDeniedException_event(
        output["AccessDeniedException"],
        context
      ),
    };
  }
  if (output["ResourceNotFoundException"] !== undefined) {
    return {
      ResourceNotFoundException: await deserializeAws_restJson1ResourceNotFoundException_event(
        output["ResourceNotFoundException"],
        context
      ),
    };
  }
  if (output["ValidationException"] !== undefined) {
    return {
      ValidationException: await deserializeAws_restJson1ValidationException_event(
        output["ValidationException"],
        context
      ),
    };
  }
  if (output["ThrottlingException"] !== undefined) {
    return {
      ThrottlingException: await deserializeAws_restJson1ThrottlingException_event(
        output["ThrottlingException"],
        context
      ),
    };
  }
  if (output["InternalServerException"] !== undefined) {
    return {
      InternalServerException: await deserializeAws_restJson1InternalServerException_event(
        output["InternalServerException"],
        context
      ),
    };
  }
  if (output["ConflictException"] !== undefined) {
    return {
      ConflictException: await deserializeAws_restJson1ConflictException_event(output["ConflictException"], context),
    };
  }
  if (output["DependencyFailedException"] !== undefined) {
    return {
      DependencyFailedException: await deserializeAws_restJson1DependencyFailedException_event(
        output["DependencyFailedException"],
        context
      ),
    };
  }
  if (output["BadGatewayException"] !== undefined) {
    return {
      BadGatewayException: await deserializeAws_restJson1BadGatewayException_event(
        output["BadGatewayException"],
        context
      ),
    };
  }
  return { $unknown: output };
};
const serializeAws_restJson1AudioInputEvent_event = (input: AudioInputEvent, context: __SerdeContext): __Message => {
  const message: __Message = {
    headers: {
      ":event-type": { type: "string", value: "AudioInputEvent" },
      ":message-type": { type: "string", value: "event" },
    },
    body: new Uint8Array(),
  };
  message.body = serializeAws_restJson1AudioInputEvent(input, context);
  return message;
};
const serializeAws_restJson1ConfigurationEvent_event = (
  input: ConfigurationEvent,
  context: __SerdeContext
): __Message => {
  const message: __Message = {
    headers: {
      ":event-type": { type: "string", value: "ConfigurationEvent" },
      ":message-type": { type: "string", value: "event" },
    },
    body: new Uint8Array(),
  };
  message.body = serializeAws_restJson1ConfigurationEvent(input, context);
  return message;
};
const serializeAws_restJson1DisconnectionEvent_event = (
  input: DisconnectionEvent,
  context: __SerdeContext
): __Message => {
  const message: __Message = {
    headers: {
      ":event-type": { type: "string", value: "DisconnectionEvent" },
      ":message-type": { type: "string", value: "event" },
    },
    body: new Uint8Array(),
  };
  message.body = serializeAws_restJson1DisconnectionEvent(input, context);
  return message;
};
const serializeAws_restJson1DTMFInputEvent_event = (input: DTMFInputEvent, context: __SerdeContext): __Message => {
  const message: __Message = {
    headers: {
      ":event-type": { type: "string", value: "DTMFInputEvent" },
      ":message-type": { type: "string", value: "event" },
    },
    body: new Uint8Array(),
  };
  message.body = serializeAws_restJson1DTMFInputEvent(input, context);
  return message;
};
const serializeAws_restJson1PlaybackCompletionEvent_event = (
  input: PlaybackCompletionEvent,
  context: __SerdeContext
): __Message => {
  const message: __Message = {
    headers: {
      ":event-type": { type: "string", value: "PlaybackCompletionEvent" },
      ":message-type": { type: "string", value: "event" },
    },
    body: new Uint8Array(),
  };
  message.body = serializeAws_restJson1PlaybackCompletionEvent(input, context);
  return message;
};
const serializeAws_restJson1TextInputEvent_event = (input: TextInputEvent, context: __SerdeContext): __Message => {
  const message: __Message = {
    headers: {
      ":event-type": { type: "string", value: "TextInputEvent" },
      ":message-type": { type: "string", value: "event" },
    },
    body: new Uint8Array(),
  };
  message.body = serializeAws_restJson1TextInputEvent(input, context);
  return message;
};
const deserializeAws_restJson1AccessDeniedException_event = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1AudioResponseEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<AudioResponseEvent> => {
  let contents: AudioResponseEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1AudioResponseEvent(data, context),
  } as any;
  return contents;
};
const deserializeAws_restJson1BadGatewayException_event = async (
  output: any,
  context: __SerdeContext
): Promise<BadGatewayException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1ConflictException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1DependencyFailedException_event = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1HeartbeatEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<HeartbeatEvent> => {
  let contents: HeartbeatEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1HeartbeatEvent(data, context),
  } as any;
  return contents;
};
const deserializeAws_restJson1IntentResultEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<IntentResultEvent> => {
  let contents: IntentResultEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1IntentResultEvent(data, context),
  } as any;
  return contents;
};
const deserializeAws_restJson1InternalServerException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1PlaybackInterruptionEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<PlaybackInterruptionEvent> => {
  let contents: PlaybackInterruptionEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1PlaybackInterruptionEvent(data, context),
  } as any;
  return contents;
};
const deserializeAws_restJson1ResourceNotFoundException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1TextResponseEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<TextResponseEvent> => {
  let contents: TextResponseEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1TextResponseEvent(data, context),
  } as any;
  return contents;
};
const deserializeAws_restJson1ThrottlingException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1TranscriptEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<TranscriptEvent> => {
  let contents: TranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1TranscriptEvent(data, context),
  } as any;
  return contents;
};
const deserializeAws_restJson1ValidationException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1BadGatewayExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadGatewayException> => {
  const contents: BadGatewayException = {
    name: "BadGatewayException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1DependencyFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const contents: DependencyFailedException = {
    name: "DependencyFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1ActiveContext = (input: ActiveContext, context: __SerdeContext): any => {
  return {
    ...(input.contextAttributes !== undefined &&
      input.contextAttributes !== null && {
        contextAttributes: serializeAws_restJson1ActiveContextParametersMap(input.contextAttributes, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.timeToLive !== undefined &&
      input.timeToLive !== null && {
        timeToLive: serializeAws_restJson1ActiveContextTimeToLive(input.timeToLive, context),
      }),
  };
};

const serializeAws_restJson1ActiveContextParametersMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1ActiveContextsList = (input: ActiveContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ActiveContext(entry, context);
    });
};

const serializeAws_restJson1ActiveContextTimeToLive = (
  input: ActiveContextTimeToLive,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeToLiveInSeconds !== undefined &&
      input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }),
  };
};

const serializeAws_restJson1AudioInputEvent = (input: AudioInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.audioChunk !== undefined &&
      input.audioChunk !== null && { audioChunk: context.base64Encoder(input.audioChunk) }),
    ...(input.clientTimestampMillis !== undefined &&
      input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
    ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
  };
};

const serializeAws_restJson1Button = (input: Button, context: __SerdeContext): any => {
  return {
    ...(input.text !== undefined && input.text !== null && { text: input.text }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1ButtonsList = (input: Button[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Button(entry, context);
    });
};

const serializeAws_restJson1ConfigurationEvent = (input: ConfigurationEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis !== undefined &&
      input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.disablePlayback !== undefined &&
      input.disablePlayback !== null && { disablePlayback: input.disablePlayback }),
    ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
    ...(input.requestAttributes !== undefined &&
      input.requestAttributes !== null && {
        requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
      }),
    ...(input.responseContentType !== undefined &&
      input.responseContentType !== null && { responseContentType: input.responseContentType }),
    ...(input.sessionState !== undefined &&
      input.sessionState !== null && { sessionState: serializeAws_restJson1SessionState(input.sessionState, context) }),
    ...(input.welcomeMessages !== undefined &&
      input.welcomeMessages !== null && {
        welcomeMessages: serializeAws_restJson1Messages(input.welcomeMessages, context),
      }),
  };
};

const serializeAws_restJson1DialogAction = (input: DialogAction, context: __SerdeContext): any => {
  return {
    ...(input.slotToElicit !== undefined && input.slotToElicit !== null && { slotToElicit: input.slotToElicit }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1DisconnectionEvent = (input: DisconnectionEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis !== undefined &&
      input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
  };
};

const serializeAws_restJson1DTMFInputEvent = (input: DTMFInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis !== undefined &&
      input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
    ...(input.inputCharacter !== undefined &&
      input.inputCharacter !== null && { inputCharacter: input.inputCharacter }),
  };
};

const serializeAws_restJson1ImageResponseCard = (input: ImageResponseCard, context: __SerdeContext): any => {
  return {
    ...(input.buttons !== undefined &&
      input.buttons !== null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) }),
    ...(input.imageUrl !== undefined && input.imageUrl !== null && { imageUrl: input.imageUrl }),
    ...(input.subtitle !== undefined && input.subtitle !== null && { subtitle: input.subtitle }),
    ...(input.title !== undefined && input.title !== null && { title: input.title }),
  };
};

const serializeAws_restJson1Intent = (input: Intent, context: __SerdeContext): any => {
  return {
    ...(input.confirmationState !== undefined &&
      input.confirmationState !== null && { confirmationState: input.confirmationState }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.slots !== undefined &&
      input.slots !== null && { slots: serializeAws_restJson1Slots(input.slots, context) }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
  };
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.content !== undefined && input.content !== null && { content: input.content }),
    ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
    ...(input.imageResponseCard !== undefined &&
      input.imageResponseCard !== null && {
        imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
      }),
  };
};

const serializeAws_restJson1Messages = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Message(entry, context);
    });
};

const serializeAws_restJson1PlaybackCompletionEvent = (
  input: PlaybackCompletionEvent,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientTimestampMillis !== undefined &&
      input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
  };
};

const serializeAws_restJson1SessionState = (input: SessionState, context: __SerdeContext): any => {
  return {
    ...(input.activeContexts !== undefined &&
      input.activeContexts !== null && {
        activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
      }),
    ...(input.dialogAction !== undefined &&
      input.dialogAction !== null && { dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context) }),
    ...(input.intent !== undefined &&
      input.intent !== null && { intent: serializeAws_restJson1Intent(input.intent, context) }),
    ...(input.originatingRequestId !== undefined &&
      input.originatingRequestId !== null && { originatingRequestId: input.originatingRequestId }),
    ...(input.sessionAttributes !== undefined &&
      input.sessionAttributes !== null && {
        sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
      }),
  };
};

const serializeAws_restJson1Slot = (input: Slot, context: __SerdeContext): any => {
  return {
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_restJson1Value(input.value, context) }),
  };
};

const serializeAws_restJson1Slots = (input: { [key: string]: Slot }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: Slot }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Slot(value, context),
    };
  }, {});
};

const serializeAws_restJson1StartConversationRequestEventStream = (
  input: StartConversationRequestEventStream,
  context: __SerdeContext
): any => {
  return StartConversationRequestEventStream.visit(input, {
    AudioInputEvent: (value) => ({ AudioInputEvent: serializeAws_restJson1AudioInputEvent(value, context) }),
    ConfigurationEvent: (value) => ({ ConfigurationEvent: serializeAws_restJson1ConfigurationEvent(value, context) }),
    DTMFInputEvent: (value) => ({ DTMFInputEvent: serializeAws_restJson1DTMFInputEvent(value, context) }),
    DisconnectionEvent: (value) => ({ DisconnectionEvent: serializeAws_restJson1DisconnectionEvent(value, context) }),
    PlaybackCompletionEvent: (value) => ({
      PlaybackCompletionEvent: serializeAws_restJson1PlaybackCompletionEvent(value, context),
    }),
    TextInputEvent: (value) => ({ TextInputEvent: serializeAws_restJson1TextInputEvent(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TextInputEvent = (input: TextInputEvent, context: __SerdeContext): any => {
  return {
    ...(input.clientTimestampMillis !== undefined &&
      input.clientTimestampMillis !== null && { clientTimestampMillis: input.clientTimestampMillis }),
    ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
    ...(input.text !== undefined && input.text !== null && { text: input.text }),
  };
};

const serializeAws_restJson1Value = (input: Value, context: __SerdeContext): any => {
  return {
    ...(input.interpretedValue !== undefined &&
      input.interpretedValue !== null && { interpretedValue: input.interpretedValue }),
    ...(input.originalValue !== undefined && input.originalValue !== null && { originalValue: input.originalValue }),
    ...(input.resolvedValues !== undefined &&
      input.resolvedValues !== null && {
        resolvedValues: serializeAws_restJson1StringList(input.resolvedValues, context),
      }),
  };
};

const deserializeAws_restJson1ActiveContext = (output: any, context: __SerdeContext): ActiveContext => {
  return {
    contextAttributes:
      output.contextAttributes !== undefined && output.contextAttributes !== null
        ? deserializeAws_restJson1ActiveContextParametersMap(output.contextAttributes, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    timeToLive:
      output.timeToLive !== undefined && output.timeToLive !== null
        ? deserializeAws_restJson1ActiveContextTimeToLive(output.timeToLive, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActiveContextParametersMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ActiveContextsList = (output: any, context: __SerdeContext): ActiveContext[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActiveContext(entry, context);
    });
};

const deserializeAws_restJson1ActiveContextTimeToLive = (
  output: any,
  context: __SerdeContext
): ActiveContextTimeToLive => {
  return {
    timeToLiveInSeconds:
      output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null
        ? output.timeToLiveInSeconds
        : undefined,
    turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined,
  } as any;
};

const deserializeAws_restJson1AudioResponseEvent = (output: any, context: __SerdeContext): AudioResponseEvent => {
  return {
    audioChunk:
      output.audioChunk !== undefined && output.audioChunk !== null
        ? context.base64Decoder(output.audioChunk)
        : undefined,
    contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
  } as any;
};

const deserializeAws_restJson1Button = (output: any, context: __SerdeContext): Button => {
  return {
    text: output.text !== undefined && output.text !== null ? output.text : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1ButtonsList = (output: any, context: __SerdeContext): Button[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Button(entry, context);
    });
};

const deserializeAws_restJson1ConfidenceScore = (output: any, context: __SerdeContext): ConfidenceScore => {
  return {
    score: output.score !== undefined && output.score !== null ? output.score : undefined,
  } as any;
};

const deserializeAws_restJson1DialogAction = (output: any, context: __SerdeContext): DialogAction => {
  return {
    slotToElicit: output.slotToElicit !== undefined && output.slotToElicit !== null ? output.slotToElicit : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_restJson1HeartbeatEvent = (output: any, context: __SerdeContext): HeartbeatEvent => {
  return {
    eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
  } as any;
};

const deserializeAws_restJson1ImageResponseCard = (output: any, context: __SerdeContext): ImageResponseCard => {
  return {
    buttons:
      output.buttons !== undefined && output.buttons !== null
        ? deserializeAws_restJson1ButtonsList(output.buttons, context)
        : undefined,
    imageUrl: output.imageUrl !== undefined && output.imageUrl !== null ? output.imageUrl : undefined,
    subtitle: output.subtitle !== undefined && output.subtitle !== null ? output.subtitle : undefined,
    title: output.title !== undefined && output.title !== null ? output.title : undefined,
  } as any;
};

const deserializeAws_restJson1Intent = (output: any, context: __SerdeContext): Intent => {
  return {
    confirmationState:
      output.confirmationState !== undefined && output.confirmationState !== null
        ? output.confirmationState
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    slots:
      output.slots !== undefined && output.slots !== null
        ? deserializeAws_restJson1Slots(output.slots, context)
        : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
  } as any;
};

const deserializeAws_restJson1IntentResultEvent = (output: any, context: __SerdeContext): IntentResultEvent => {
  return {
    eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
    inputMode: output.inputMode !== undefined && output.inputMode !== null ? output.inputMode : undefined,
    interpretations:
      output.interpretations !== undefined && output.interpretations !== null
        ? deserializeAws_restJson1Interpretations(output.interpretations, context)
        : undefined,
    requestAttributes:
      output.requestAttributes !== undefined && output.requestAttributes !== null
        ? deserializeAws_restJson1StringMap(output.requestAttributes, context)
        : undefined,
    sessionId: output.sessionId !== undefined && output.sessionId !== null ? output.sessionId : undefined,
    sessionState:
      output.sessionState !== undefined && output.sessionState !== null
        ? deserializeAws_restJson1SessionState(output.sessionState, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Interpretation = (output: any, context: __SerdeContext): Interpretation => {
  return {
    intent:
      output.intent !== undefined && output.intent !== null
        ? deserializeAws_restJson1Intent(output.intent, context)
        : undefined,
    nluConfidence:
      output.nluConfidence !== undefined && output.nluConfidence !== null
        ? deserializeAws_restJson1ConfidenceScore(output.nluConfidence, context)
        : undefined,
    sentimentResponse:
      output.sentimentResponse !== undefined && output.sentimentResponse !== null
        ? deserializeAws_restJson1SentimentResponse(output.sentimentResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Interpretations = (output: any, context: __SerdeContext): Interpretation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Interpretation(entry, context);
    });
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    content: output.content !== undefined && output.content !== null ? output.content : undefined,
    contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    imageResponseCard:
      output.imageResponseCard !== undefined && output.imageResponseCard !== null
        ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Messages = (output: any, context: __SerdeContext): Message[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Message(entry, context);
    });
};

const deserializeAws_restJson1PlaybackInterruptionEvent = (
  output: any,
  context: __SerdeContext
): PlaybackInterruptionEvent => {
  return {
    causedByEventId:
      output.causedByEventId !== undefined && output.causedByEventId !== null ? output.causedByEventId : undefined,
    eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
    eventReason: output.eventReason !== undefined && output.eventReason !== null ? output.eventReason : undefined,
  } as any;
};

const deserializeAws_restJson1SentimentResponse = (output: any, context: __SerdeContext): SentimentResponse => {
  return {
    sentiment: output.sentiment !== undefined && output.sentiment !== null ? output.sentiment : undefined,
    sentimentScore:
      output.sentimentScore !== undefined && output.sentimentScore !== null
        ? deserializeAws_restJson1SentimentScore(output.sentimentScore, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SentimentScore = (output: any, context: __SerdeContext): SentimentScore => {
  return {
    mixed: output.mixed !== undefined && output.mixed !== null ? output.mixed : undefined,
    negative: output.negative !== undefined && output.negative !== null ? output.negative : undefined,
    neutral: output.neutral !== undefined && output.neutral !== null ? output.neutral : undefined,
    positive: output.positive !== undefined && output.positive !== null ? output.positive : undefined,
  } as any;
};

const deserializeAws_restJson1SessionState = (output: any, context: __SerdeContext): SessionState => {
  return {
    activeContexts:
      output.activeContexts !== undefined && output.activeContexts !== null
        ? deserializeAws_restJson1ActiveContextsList(output.activeContexts, context)
        : undefined,
    dialogAction:
      output.dialogAction !== undefined && output.dialogAction !== null
        ? deserializeAws_restJson1DialogAction(output.dialogAction, context)
        : undefined,
    intent:
      output.intent !== undefined && output.intent !== null
        ? deserializeAws_restJson1Intent(output.intent, context)
        : undefined,
    originatingRequestId:
      output.originatingRequestId !== undefined && output.originatingRequestId !== null
        ? output.originatingRequestId
        : undefined,
    sessionAttributes:
      output.sessionAttributes !== undefined && output.sessionAttributes !== null
        ? deserializeAws_restJson1StringMap(output.sessionAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Slot = (output: any, context: __SerdeContext): Slot => {
  return {
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1Value(output.value, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Slots = (output: any, context: __SerdeContext): { [key: string]: Slot } => {
  return Object.entries(output).reduce((acc: { [key: string]: Slot }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Slot(value, context),
    };
  }, {});
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1TextResponseEvent = (output: any, context: __SerdeContext): TextResponseEvent => {
  return {
    eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
    messages:
      output.messages !== undefined && output.messages !== null
        ? deserializeAws_restJson1Messages(output.messages, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TranscriptEvent = (output: any, context: __SerdeContext): TranscriptEvent => {
  return {
    eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
    transcript: output.transcript !== undefined && output.transcript !== null ? output.transcript : undefined,
  } as any;
};

const deserializeAws_restJson1Value = (output: any, context: __SerdeContext): Value => {
  return {
    interpretedValue:
      output.interpretedValue !== undefined && output.interpretedValue !== null ? output.interpretedValue : undefined,
    originalValue:
      output.originalValue !== undefined && output.originalValue !== null ? output.originalValue : undefined,
    resolvedValues:
      output.resolvedValues !== undefined && output.resolvedValues !== null
        ? deserializeAws_restJson1StringList(output.resolvedValues, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
